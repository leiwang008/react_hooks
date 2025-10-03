import React, {act} from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import TimerData from "./Timer";

// Mock timer functions
jest.useFakeTimers();

// Cleanup after each test to prevent memory leaks
afterEach(() => {
  cleanup();
  jest.clearAllTimers();
});

test("Renders timer heading", () => {
  render(<TimerData />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toHaveTextContent(/Timer with useEffect/i);
});

test("Shows loading message initially", () => {
  render(<TimerData />);
  expect(screen.getByText(/Loading timer data/i)).toBeInTheDocument();
});

test("Timer starts at 0 seconds", () => {
  render(<TimerData />);
  expect(screen.getByText(/0 seconds/i)).toBeInTheDocument();
});

test("Timer increments after 1 second", () => {
  const { unmount } = render(<TimerData />);
  
  // Fast-forward time by 1 second
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  
  expect(screen.getByText(/1 seconds/i)).toBeInTheDocument();
  unmount(); // Explicitly unmount to prevent memory leaks
});

test("Timer increments multiple times", () => {
  const { unmount } = render(<TimerData />);
  
  // Fast-forward time by 3 seconds
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  
  expect(screen.getByText(/3 seconds/i)).toBeInTheDocument();
  unmount();
});

test("Reset button sets timer back to 0", () => {
  const { unmount } = render(<TimerData />);
  
  // Fast-forward time by 3 seconds
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  
  // Verify timer has incremented
  expect(screen.getByText(/3 seconds/i)).toBeInTheDocument();
  
  // Click reset button
  const resetButton = screen.getByText(/Reset Timer/i);
  act(() => {
    fireEvent.click(resetButton);
  });
  
  // Verify timer has reset to 0
  expect(screen.getByText(/0 seconds/i)).toBeInTheDocument();
  unmount();
});
