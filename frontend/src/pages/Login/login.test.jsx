/* eslint-disable no-undef */
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import "@testing-library/jest-dom";

describe("Login", () => {
    test("renders correctly", () => {
        render(<Login />);
        const loginElement = screen.getByLabelText("Login");
        expect(loginElement).toBeInTheDocument();
    });
    test("renders email input correctly", () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText("Correo electrónico");
        expect(emailInput).toBeInTheDocument();
    });
    test("renders password input correctly", () => {
        render(<Login />);
        const passwordInput = screen.getByPlaceholderText("Contraseña");
        expect(passwordInput).toBeInTheDocument();
    });
    test("renders login button correctly", () => {
        render(<Login />);
        const loginButton = screen.getByText("Iniciar sesión");
        expect(loginButton).toBeInTheDocument();
    });
    test("submits login form with valid credentials", async () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText("Correo electrónico");
        const passwordInput = screen.getByPlaceholderText("Contraseña");
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        fireEvent.click(screen.getByText("Iniciar sesión"));
    });
    test("renders register text correctly", () => {
        render(<Login />);
        const registerText = screen.getByText("¿Aún no tienes cuenta?");
        expect(registerText).toBeInTheDocument();
    });
});
