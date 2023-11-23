/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
    test("renders correctly", () => {
        render(<Navbar />);
        const headerElement = screen.getByLabelText("Navbar");
        expect(headerElement).toBeInTheDocument();
    });
    test("renders logotype correctly", () => {
        render(<Navbar />);
        const headerElement = screen.getByLabelText("logotype");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in logotype icon", () => {
        render(<Navbar />);
        const logotypeLink = screen.getByLabelText("logotype");
        fireEvent.click(logotypeLink);
    });
    test("renders arrow icon correctly", () => {
        render(<Navbar />);
        const headerElement = screen.getByLabelText("arrow-icon");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in arrow icon", () => {
        render(<Navbar />);
        const arrowIconLink = screen.getByLabelText("arrow-icon");
        fireEvent.click(arrowIconLink);
    });
    test("renders home icon correctly", () => {
        render(<Navbar />);
        const headerElement = screen.getByLabelText("home-icon");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in home icon", () => {
        render(<Navbar />);
        const homeIconLink = screen.getByLabelText("home-icon");
        fireEvent.click(homeIconLink);
    });
    test("renders login icon correctly", () => {
        render(<Navbar />);
        const headerElement = screen.getByLabelText("login-icon");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in login icon", () => {
        render(<Navbar />);
        const loginIconLink = screen.getByLabelText("login-icon");
        fireEvent.click(loginIconLink);
    });
});
