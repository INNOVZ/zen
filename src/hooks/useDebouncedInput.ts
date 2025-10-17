import { useState, useEffect, useCallback } from "react";

interface UseDebouncedInputOptions<T> {
  initialValue: T;
  onDebouncedChange: (value: T) => void;
  delay?: number;
}

export function useDebouncedInput<T>({
  initialValue,
  onDebouncedChange,
  delay = 300,
}: UseDebouncedInputOptions<T>) {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  // Update local value when initial value changes (from external source)
  useEffect(() => {
    setValue(initialValue);
    setDebouncedValue(initialValue);
  }, [initialValue]);

  // Debounce the value changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  // Call the callback when debounced value changes
  useEffect(() => {
    if (debouncedValue !== initialValue) {
      onDebouncedChange(debouncedValue);
    }
  }, [debouncedValue, onDebouncedChange, initialValue]);

  const handleChange = useCallback((newValue: T) => {
    setValue(newValue);
  }, []);

  return {
    value,
    onChange: handleChange,
    debouncedValue,
    isDirty: value !== initialValue,
  };
}
