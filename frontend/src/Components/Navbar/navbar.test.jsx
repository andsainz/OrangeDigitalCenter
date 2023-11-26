import { test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
    test("renders correctly", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const navbarElement = screen.getByLabelText("Navbar");
        expect(navbarElement).toBeInTheDocument();
    });

    test("renders logotype correctly", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const logotypeElement = screen.getByRole("img", { name: "logotype" });
        expect(logotypeElement).toBeInTheDocument();
    });

    test("works link in logotype icon", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const logotypeLink = screen.getByLabelText("logotype");
        fireEvent.click(logotypeLink);
    });

    test("renders arrow icon correctly", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const arrowIconElement = screen.getByRole("img", { name: "arrow-icon" });
        expect(arrowIconElement).toBeInTheDocument();
    });

    test("works link in arrow icon", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const arrowIcon = screen.getByRole("img", { name: "arrow-icon" });
        fireEvent.click(arrowIcon);
    });

    test("renders home icon correctly", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const homeIconElement = screen.getByRole("img", { name: "home-icon" });
        expect(homeIconElement).toBeInTheDocument();
    });

    test("works link in home icon", () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const homeIcon = screen.getByRole("img", { name: "home-icon" });
        fireEvent.click(homeIcon);
    });

    test("renders login/logout icon correctly", () => {

        localStorage.removeItem('token');

        render(
            <Router>
                <Navbar />
            </Router>
        );

        const loginIconElement = screen.getByRole("img", { name: "login-icon" });
        expect(loginIconElement).toBeInTheDocument();
        const logoutIconElement = screen.queryByRole("img", { name: "logout-icon" });
        expect(logoutIconElement).not.toBeInTheDocument();
    });

    test("works link in login/logout icon when logged in", () => {
        localStorage.setItem('token', 'some-token');
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const loginIconElement = screen.queryByRole("img", { name: "login-icon" });
        expect(loginIconElement).not.toBeInTheDocument();
        const logoutIconElement = screen.getByRole("img", { name: "logout-icon" });
        expect(logoutIconElement).toBeInTheDocument();
        localStorage.removeItem('token');
    });
});

