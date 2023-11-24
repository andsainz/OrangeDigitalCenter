/* eslint-disable no-undef */
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterForm from "./RegisterForm";

describe("RegisterForm", () => {
    test("renders correctly", () => {
        render(<RegisterForm />);
        const formElement = screen.getByLabelText("register-form");
        expect(formElement).toBeInTheDocument();
    });
});
