import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Login from "./Login";

jest.mock("./Login", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    handleSubmit: jest.fn(),
  })),
}));

describe("Login", () => {

    test("submits login form with valid credentials", async () => {
        render(
            <Router>
                <Login />
            </Router>
        );
        const emailInput = screen.getByTestId("email-input");
        const passwordInput = screen.getByTestId("password-input");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(screen.getByTestId("login-button"));

        expect(Login.prototype.handleSubmit).toHaveBeenCalled();
    });
});
