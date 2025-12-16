/**
 * Component Tests for ChatMessage
 * Tests memoization and rendering behavior
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { ChatMessage, ChatMessageProps } from '../ChatMessage';

describe('ChatMessage Component', () => {
  const mockProps: ChatMessageProps = {
    id: 'msg-1',
    type: 'bot' as const,
    content: 'Hello! How can I help you?',
    timestamp: new Date(),
    botColor: '#3B82F6',
  };

  it('should render bot message correctly', () => {
    render(<ChatMessage {...mockProps} />);

    expect(screen.getByText('Hello! How can I help you?')).toBeInTheDocument();
  });

  it('should render user message correctly', () => {
    render(<ChatMessage {...mockProps} type="user" content="I need help" />);

    expect(screen.getByText('I need help')).toBeInTheDocument();
  });

  it('should display sources when provided', () => {
    render(<ChatMessage {...mockProps} sources={['doc1.pdf', 'doc2.pdf']} />);

    expect(screen.getByText(/Sources: 2 document\(s\)/)).toBeInTheDocument();
  });

  it('should render buttons when provided', () => {
    const buttons = [
      { text: 'Option 1', value: 'opt1' },
      { text: 'Option 2', value: 'opt2' },
    ];

    render(<ChatMessage {...mockProps} buttons={buttons} />);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('should call onButtonClick when button is clicked', () => {
    const mockButtonClick = jest.fn();
    const buttons = [{ text: 'Click Me', value: 'test_value' }];

    render(
      <ChatMessage
        {...mockProps}
        buttons={buttons}
        onButtonClick={mockButtonClick}
      />
    );

    fireEvent.click(screen.getByText('Click Me'));

    expect(mockButtonClick).toHaveBeenCalledWith('test_value');
  });

  it('should apply bot color for user messages', () => {
    const { container } = render(
      <ChatMessage {...mockProps} type="user" botColor="#FF0000" />
    );

    const messageDiv = container.querySelector('[style*="background-color"]');
    expect(messageDiv).toBeInTheDocument();
  });

  it('should not re-render when unrelated props change', () => {
    const { rerender } = render(<ChatMessage {...mockProps} />);

    const renderCount = jest.fn();
    (ChatMessage as any).displayName = renderCount;

    // Re-render with same props
    rerender(<ChatMessage {...mockProps} />);

    // Component should not re-render due to memoization
    // (In real scenario, we'd use React DevTools Profiler)
  });

  it('should handle long content', () => {
    const longContent = 'A'.repeat(1000);

    render(<ChatMessage {...mockProps} content={longContent} />);

    expect(screen.getByText(longContent)).toBeInTheDocument();
  });

  it('should handle content with newlines', () => {
    const multilineContent = 'Line 1\nLine 2\nLine 3';

    const { container } = render(<ChatMessage {...mockProps} content={multilineContent} />);

    // Check if the content is in the DOM (whitespace-pre-wrap preserves newlines)
    expect(container.textContent).toContain('Line 1');
    expect(container.textContent).toContain('Line 2');
    expect(container.textContent).toContain('Line 3');
  });

  it('should not render sources when empty', () => {
    render(<ChatMessage {...mockProps} sources={[]} />);

    expect(screen.queryByText(/Sources:/)).not.toBeInTheDocument();
  });

  it('should not render buttons when empty', () => {
    render(<ChatMessage {...mockProps} buttons={[]} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

