import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReducerCounter from "./ReducerCounter";

// Silence React testing warnings
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    args[0].includes('Warning: An update to App inside a test was not wrapped in act') ||
    args[0].includes("Warning: Can't perform a React state update on an unmounted component")
  ) {
    return;
  }
  originalConsoleError(...args);
};

test("Renders the Counter heading", () => {
  render(<ReducerCounter />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toHaveTextContent(/Counter with useReducer/i);
});

test("Initial count is displayed as 0", () => {
  render(<ReducerCounter />);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test("Increment button increases count by 1", () => {
  render(<ReducerCounter />);
  const incrementButton = screen.getByText(/Increment/i);
  
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
});

test("Decrement button decreases count by 1", () => {
  render(<ReducerCounter />);
  const decrementButton = screen.getByText(/Decrement/i);
  
  fireEvent.click(decrementButton);
  expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
  
  fireEvent.click(decrementButton);
  expect(screen.getByText(/Count: -2/i)).toBeInTheDocument();
});