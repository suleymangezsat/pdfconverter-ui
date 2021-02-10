import { renderHook, cleanup } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { useInterval } from "./useInterval";

afterEach(cleanup);
jest.useFakeTimers("modern");

describe("hooks/useInterval", () => {
  test("should init hook with `handler` and `delay`", () => {
    const handler = jest.fn();

    renderHook(() => {
      useInterval(handler, 1000);
    });

    expect(handler).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(5000);
    expect(handler).toHaveBeenCalledTimes(5);
  });

  test("should pause the timer if `delay` is `null`", () => {
    const handler = jest.fn();

    renderHook(() => {
      useInterval(handler, null);
    });

    jest.advanceTimersByTime(5000);
    expect(handler).toHaveBeenCalledTimes(0);
  });

  test("should not be restarted if passed a new `handler`", () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    let handler = handler1;

    const { rerender } = renderHook(() => {
      useInterval(handler, 1000);
    });

    jest.advanceTimersByTime(500);

    handler = handler2;
    rerender();

    jest.advanceTimersByTime(500);
    expect(handler1).toHaveBeenCalledTimes(0);
    expect(handler2).toHaveBeenCalledTimes(1);
  });

  test("should cancel the current timer and restart a new one if passed a new `delay`", () => {
    const handler = jest.fn();
    let delay = 500;

    const { rerender } = renderHook(() => {
      useInterval(handler, delay);
    });

    jest.advanceTimersByTime(1000);
    expect(handler).toHaveBeenCalledTimes(2);

    delay = 1000;
    rerender();
    jest.advanceTimersByTime(5000);
    expect(handler).toHaveBeenCalledTimes(7);
  });

  test("should cancel the current timer and pause if passed a new `delay` of `null`", () => {
    const handler = jest.fn();
    let delay: number | null = 500;

    const { rerender } = renderHook(() => {
      useInterval(handler, delay);
    });

    jest.advanceTimersByTime(1000);
    expect(handler).toHaveBeenCalledTimes(2);

    delay = null;
    rerender();
    jest.advanceTimersByTime(5000);
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
