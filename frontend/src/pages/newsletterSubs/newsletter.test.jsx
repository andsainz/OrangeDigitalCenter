import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NewsletterSubs from "./NewsletterSubs";
import "@testing-library/jest-dom";

describe("Newsletter", () => {
    test("renders correctly", () => {
        render(
            <Router>
                <NewsletterSubs />
            </Router>
        );
        const newsletterElement = screen.getByLabelText("newsletter-form");
        expect(newsletterElement).toBeInTheDocument();
    });
    test("renders email input correctly", () => {
        render(
            <Router>
                <NewsletterSubs />
            </Router>
        );
        const emailInput = screen.getByPlaceholderText("Ej. orangedigitalcenter@gmail.com");
        expect(emailInput).toBeInTheDocument();
    });  

    test("renders receive newsletter button correctly", () => {
        render(
            <Router>
                <NewsletterSubs />
            </Router>
        );
        const receiveNewsletterButton = screen.getByText("Recibir newsletter");
        expect(receiveNewsletterButton).toBeInTheDocument();
    });
    test("renders receive newsletter button correctly", () => {
        render(
            <Router>
                <NewsletterSubs />
            </Router>
        );
        const receiveNewsletterButton = screen.getByText("Recibir newsletter");
        expect(receiveNewsletterButton).toBeInTheDocument();
    });
});
