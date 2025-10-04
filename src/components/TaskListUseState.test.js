import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskList from "./TaskListUseState";

test("Renders the Task List heading", () => {
  render(<TaskList />);
  const headingElement = screen.getByRole('heading', { level: 2, name: /Task List/i });
  expect(headingElement).toBeInTheDocument();
});

test("Displays the initial tasks", () => {
  render(<TaskList />);
  expect(screen.getByText("Learn React Hooks")).toBeInTheDocument();
  expect(screen.getByText("Build a Task List")).toBeInTheDocument();
  expect(screen.getByText("Practice useState")).toBeInTheDocument();
});

test("Shows the correct initial number of remaining tasks", () => {
  render(<TaskList />);
  expect(screen.getByText(/2 tasks remaining/i)).toBeInTheDocument();
});

test("Allows toggling task completion status", () => {
  render(<TaskList />);
  const firstTaskCheckbox = screen.getAllByRole("checkbox")[0];
  
  // Initial state: remaining tasks counter shows 2
  expect(screen.getByText(/2 tasks remaining/i)).toBeInTheDocument();
  
  // Click the checkbox to complete a task
  fireEvent.click(firstTaskCheckbox);
  
  // After completing one more task, only 1 should remain
  expect(screen.getByText(/1 task remaining/i)).toBeInTheDocument();
  
  // Click again to mark as incomplete
  fireEvent.click(firstTaskCheckbox);
  
  // Back to 2 remaining tasks
  expect(screen.getByText(/2 tasks remaining/i)).toBeInTheDocument();
});

test("Has the correct initial checkbox states", () => {
  render(<TaskList />);
  const checkboxes = screen.getAllByRole("checkbox");
  
  // First two tasks should be unchecked
  expect(checkboxes[0]).not.toBeChecked();
  expect(checkboxes[1]).not.toBeChecked();
  
  // Third task should be checked
  expect(checkboxes[2]).toBeChecked();
});