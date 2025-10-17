"use client";

import { useEffect, useState } from "react";

interface PerformanceMonitorProps {
  name: string;
  onMeasure?: (duration: number) => void;
}

export default function PerformanceMonitor({
  name,
  onMeasure,
}: PerformanceMonitorProps) {
  const [startTime] = useState(() => performance.now());
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const endTime = performance.now();
    const measureDuration = endTime - startTime;
    setDuration(measureDuration);

    if (onMeasure) {
      onMeasure(measureDuration);
    }

    // Log performance in development
    if (process.env.NODE_ENV === "development") {
      console.log(`⏱️ ${name}: ${measureDuration.toFixed(2)}ms`);
    }
  }, [name, startTime, onMeasure]);

  // Only show in development
  if (process.env.NODE_ENV !== "development" || duration === null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded z-50">
      {name}: {duration.toFixed(2)}ms
    </div>
  );
}
