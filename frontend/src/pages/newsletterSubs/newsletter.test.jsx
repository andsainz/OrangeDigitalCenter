/* eslint-disable no-undef */
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NewsletterSubs from "./NewsletterSubs";
import "@testing-library/jest-dom";

describe("Newsletter", () => {
    test("renders correctly", () => {
        render(<NewsletterSubs />);
        const newsletterElement = screen.getByLabelText("newsletter-form");
        expect(newsletterElement).toBeInTheDocument();
    });
    test("renders name input correctly", () => {
        render(<NewsletterSubs />);
        const nameInput = screen.getByPlaceholderText("Nombre y apellidos");
        expect(nameInput).toBeInTheDocument();
    });
    test("renders email input correctly", () => {
        render(<NewsletterSubs />);
        const emailInput = screen.getByPlaceholderText("Ej. odc@gmail.com");
        expect(emailInput).toBeInTheDocument();
    });  

    test("renders receive newsletter button correctly", () => {
        render(<NewsletterSubs />);
        const receiveNewsletterButton = screen.getByText("Recibir newsletter");
        expect(receiveNewsletterButton).toBeInTheDocument();
    });
    test("renders receive newsletter button correctly", () => {
        render(<NewsletterSubs />);
        const receiveNewsletterButton = screen.getByText("Recibir newsletter");
        expect(receiveNewsletterButton).toBeInTheDocument();
    });
});
