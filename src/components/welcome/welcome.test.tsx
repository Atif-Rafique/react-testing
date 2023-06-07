import { render, screen } from "@testing-library/react"


// Components
import Welcome from "./welcome";


// ============ Global Method for filtering test ============
// test.only => will run only this test, test.only("", ()=> {})
// test.skip => will skip executing this test


test("intro renders correctly", () => {
    render(<Welcome />);
    const topHeading = screen.getByText(/welcome/i);
    expect(topHeading).toBeInTheDocument();
})



// Grouping Tests

// describe is used for that => describe(name, fn)

describe("Intro", () => {

    test("intro renders", () => {
        render(<Welcome />);
        const topHeading = screen.getByText(/welcome/i);
        expect(topHeading).toBeInTheDocument();
    });


    test("intro renders correctly", () => {
        render(<Welcome />);
        const topHeading = screen.getByText(/welcome/i);
        expect(topHeading).toBeInTheDocument();
    })
})