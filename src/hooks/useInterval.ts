import * as React from "react";

const { useEffect, useRef } = React;

type IntervalFunction = () => unknown | void;

export function useInterval(
  callback: IntervalFunction,
  delay: number,
  condition: boolean
) {
  const savedCallback = useRef<IntervalFunction | null>(null);

  useEffect(() => {
    if (!condition) return;
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (!condition) return;
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [condition, delay]);
}
