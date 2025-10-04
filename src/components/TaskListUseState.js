// React 16.x code​​​​​​‌‌‌​​‌​‌​​‌‌​‌​​​‌​‌​‌​‌​ below
import './comp.css';
import React, { useState } from "react";

// TaskItem component - displays an individual task with a checkbox
function TaskItem(props) {
  // It should display a task with a checkbox for completion status
  // When the checkbox is clicked, it should call a function passed via props
  return (
    <div className="task-item">
      <input type="checkbox" 
            checked={props.task.completed}
            onChange={(event) => props.onSelect(event.target.checked)}
            id={`check-task-${props.task.id}`}></input>
      <label htmlFor={`check-task-${props.task.id}`}>
        {props.task.name}
      </label>
    </div>
  );
}

// TaskList component - manages the tasks and coordinates between components
function TaskList() {
  // Initial tasks array
  const initialTasks = [
    { id: 1, name: "Learn React Hooks", completed: false },
    { id: 2, name: "Build a Task List", completed: false },
    { id: 3, name: "Practice useState", completed: true }
  ];
  
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (taskId, selected) => {
    // This function should toggle the completed status of a task
    setTasks(
      preTasks => (
        preTasks.map(task => 
          task.id === taskId? {...task, completed:selected}:task
        )
      )
    );
  };

  // Calculate the actual number of remaining tasks
  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <p className="task-counter">
        {remainingTasks} {remainingTasks === 1 ? "task" : "tasks"} remaining
      </p>
      
      <div className="task-list">
        {tasks.map(task =>(
            <TaskItem key={task.id} 
            task={task} 
            onSelect={(selected)=>toggleTask(task.id, selected)} />
        )
        )}
      </div>
    </div>
  );
}

/* Ignore and do not change the code below */
/**
 * Preview function
 * This function renders the `TaskList` component and is used for visual rendering
 * during the challenge. Candidates do not need to modify this.
 */
export function Preview() {
  return <TaskList />;
}
/* Ignore and do not change the code above */

// Export the main component
export default TaskList;