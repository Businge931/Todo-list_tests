import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  //   beforeEach(() => {
  //     console.log("RUNNING BEFORE EACH TEST");
  //   });
  //   beforeAll(() => {
  //     console.log("RUNNING ONCE BEFORE EACH TEST");
  //   });

  //   afterAll(()=>{})

  //   afterEach(()=>{})

  test("should render follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  //   test("should render multiple follower items", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
