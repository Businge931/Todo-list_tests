import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((task) =>
    fireEvent.change(inputElement, {
      target: { value: task },
    })
  );
  fireEvent.click(buttonElement);
};

describe("Todo", () => {
  test("shuld render todo when button is clicked", async () => {
    render(<MockedTodo />);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  //   test("should render multiple elements/todos", async () => {
  //     render(<MockedTodo />);
  //     addTask(["Go Grocery Shopping", "Pet my Cat", "Wash my Hands"]);
  //     const divElements = screen.getAllByTestId("task-container");
  //     expect(divElements.length).toBe(3);
  //   });

  test("task should not have completed class when rendere", async () => {
    render(<MockedTodo />);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should have completed class when clicked", async () => {
    render(<MockedTodo />);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
