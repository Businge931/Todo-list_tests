import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passes into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// test("should render same text passes into title pro", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });
