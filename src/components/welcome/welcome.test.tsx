import { render, screen } from "@testing-library/react"


// Components
import Welcome from "./welcome";

test("intro renders correctly", () => {
    render(<Welcome />);
    const topHeading = screen.getByText(/welcome/i);
    expect(topHeading).toBeInTheDocument();
})