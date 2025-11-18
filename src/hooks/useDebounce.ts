import { useEffect, useRef } from "react";

export const useDebounce = (callback: () => void, delay: number, dependencies: unknown[]) => {
  const isFirstRun = useRef(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      callback();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [...dependencies, delay]);
};
