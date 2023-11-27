import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
    test("renders correctly", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const footerElement = screen.getByLabelText("Footer");
        expect(footerElement).toBeInTheDocument();
    });

    test("renders logotype correctly", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const headerElement = screen.getByRole("img", { name: "logotype" });
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in logotype icon", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const logotypeLink = screen.getByLabelText("logotype");
        fireEvent.click(logotypeLink);
    });
    test("renders privacy policy correctly", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const headerElement = screen.getByLabelText("privacy-policy");
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in privacy policy", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const privacyPolicyLink = screen.getByLabelText("privacy-policy");
        fireEvent.click(privacyPolicyLink);
    });
    test("renders twitter icon correctly", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const headerElement = screen.getByRole("img", { name: "twitter" });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders linkedin icon correctly", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const headerElement = screen.getByRole("img", { name: "linkedin" });
        expect(headerElement).toBeInTheDocument();
    });

    test("renders instagram icon correctly", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const headerElement = screen.getByRole("img", { name: "instagram" });
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in twitter icon", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const twitterLink = screen.getByLabelText("twitter");
        fireEvent.click(twitterLink);
    });

    test("works link in linkedin icon", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const linkedinLink = screen.getByLabelText("linkedin");
        fireEvent.click(linkedinLink);
    });

    test("works link in instagram icon", () => {
        render(
            <Router>
                <Footer />
            </Router>
        );
        const instagramLink = screen.getByLabelText("instagram");
        fireEvent.click(instagramLink);
    });
});
