#!/bin/bash

# Test Results Management Script
# Helps manage test logs and artifacts

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Paths
RESULTS_DIR="test-results"
ARTIFACTS_DIR="$RESULTS_DIR/artifacts"
HTML_REPORT="$RESULTS_DIR/html-report"

show_help() {
  echo "Test Results Management Script"
  echo ""
  echo "Usage: ./scripts/manage-tests.sh [command]"
  echo ""
  echo "Commands:"
  echo "  view         View latest HTML test report"
  echo "  clean        Clean all test results and artifacts"
  echo "  clean-old    Keep only 5 latest results"
  echo "  status       Show test results status"
  echo "  summary      Show test summary from latest results"
  echo "  help         Show this help message"
}

view_report() {
  echo -e "${BLUE}Opening HTML test report...${NC}"
  if [ -d "$HTML_REPORT" ]; then
    npx playwright show-report
  else
    echo -e "${RED}No HTML report found. Run tests first: npm run test:e2e${NC}"
  fi
}

clean_all() {
  echo -e "${YELLOW}Removing all test results and artifacts...${NC}"
  rm -rf "$RESULTS_DIR"/*
  mkdir -p "$RESULTS_DIR/artifacts"
  mkdir -p "$HTML_REPORT"
  echo -e "${GREEN}Test results cleaned${NC}"
}

clean_old() {
  echo -e "${YELLOW}Keeping only 5 latest test results...${NC}"
  
  # Count JSON files
  count=$(ls -1 "$RESULTS_DIR"/results-*.json 2>/dev/null | wc -l)
  
  if [ "$count" -gt 5 ]; then
    ls -t "$RESULTS_DIR"/results-*.json | tail -n +6 | xargs rm
    echo -e "${GREEN}Removed $((count - 5)) old result files${NC}"
  else
    echo -e "${BLUE}Only $count result files found, nothing to clean${NC}"
  fi
  
  # Same for JUnit XML
  count=$(ls -1 "$RESULTS_DIR"/junit-*.xml 2>/dev/null | wc -l)
  
  if [ "$count" -gt 5 ]; then
    ls -t "$RESULTS_DIR"/junit-*.xml | tail -n +6 | xargs rm
    echo -e "${GREEN}Removed $((count - 5)) old JUnit files${NC}"
  fi
}

show_status() {
  echo -e "${BLUE}Test Results Status${NC}"
  echo "==================="
  
  if [ -d "$RESULTS_DIR" ]; then
    echo -e "${GREEN}✓ Results directory exists${NC}"
    
    # Count files
    json_count=$(ls -1 "$RESULTS_DIR"/results-*.json 2>/dev/null | wc -l || echo 0)
    junit_count=$(ls -1 "$RESULTS_DIR"/junit-*.xml 2>/dev/null | wc -l || echo 0)
    artifact_count=$(find "$ARTIFACTS_DIR" -type f 2>/dev/null | wc -l || echo 0)
    
    echo "  JSON Results: $json_count files"
    echo "  JUnit Results: $junit_count files"
    echo "  Artifacts: $artifact_count files"
    
    if [ -d "$HTML_REPORT" ]; then
      html_size=$(du -sh "$HTML_REPORT" 2>/dev/null | cut -f1)
      echo "  HTML Report: $html_size"
    fi
  else
    echo -e "${RED}✗ Results directory not found${NC}"
  fi
  
  echo ""
  echo "Latest result file:"
  latest=$(ls -t "$RESULTS_DIR"/results-*.json 2>/dev/null | head -1)
  if [ -n "$latest" ]; then
    echo "  $latest"
    ls -lh "$latest"
  else
    echo "  No results found"
  fi
}

show_summary() {
  latest=$(ls -t "$RESULTS_DIR"/results-*.json 2>/dev/null | head -1)
  
  if [ -z "$latest" ]; then
    echo -e "${RED}No test results found. Run tests first: npm run test:e2e${NC}"
    return 1
  fi
  
  echo -e "${BLUE}Test Summary${NC}"
  echo "============="
  
  if command -v jq &> /dev/null; then
    cat "$latest" | jq '.stats'
  else
    echo -e "${YELLOW}jq not installed. Install it to view formatted results.${NC}"
    echo "Raw results:"
    cat "$latest" | grep -E '"stats"|"total"|"passed"|"failed"' | head -10
  fi
}

# Main script
case "${1:-help}" in
  view)
    view_report
    ;;
  clean)
    clean_all
    ;;
  clean-old)
    clean_old
    ;;
  status)
    show_status
    ;;
  summary)
    show_summary
    ;;
  help|--help|-h)
    show_help
    ;;
  *)
    echo -e "${RED}Unknown command: $1${NC}"
    echo ""
    show_help
    exit 1
    ;;
esac
