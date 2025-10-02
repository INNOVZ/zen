// Utility for creating timeout-aware fetch requests

export interface TimeoutOptions {
  timeoutMs: number;
  timeoutMessage?: string;
}

export function createTimeoutController(options: TimeoutOptions): {
  controller: AbortController;
  cleanup: () => void;
} {
  const controller = new AbortController();
  const { timeoutMs, timeoutMessage = `Request timeout after ${timeoutMs}ms` } =
    options;

  const timeoutId = setTimeout(() => {
    controller.abort(new Error(timeoutMessage));
  }, timeoutMs);

  const cleanup = () => {
    clearTimeout(timeoutId);
  };

  return { controller, cleanup };
}

export async function fetchWithTimeout<T>(
  fetchFn: (signal: AbortSignal) => Promise<T>,
  options: TimeoutOptions
): Promise<T> {
  const { controller, cleanup } = createTimeoutController(options);

  try {
    const result = await fetchFn(controller.signal);
    cleanup();
    return result;
  } catch (error) {
    cleanup();

    if (
      error instanceof Error &&
      (error.name === "AbortError" || error.message.includes("timeout"))
    ) {
      throw new Error(
        options.timeoutMessage || "Request timed out. Please try again."
      );
    }

    throw error;
  }
}
