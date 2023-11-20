/* eslint-disable no-undef */
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
    test("renders correctly", () => {
        render(<Footer />);
        const footerElement = screen.getByLabelText("Footer");
        expect(footerElement).toBeInTheDocument();
    });
    test("renders facebook icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole("img", { name: "facebook" });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders twitter icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole("img", { name: "twitter" });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders linkedin icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole("img", { name: "linkedin" });
        expect(headerElement).toBeInTheDocument();
    });
    test("renders instagram icon correctly", () => {
        render(<Footer />);
        const headerElement = screen.getByRole("img", { name: "instagram" });
        expect(headerElement).toBeInTheDocument();
    });
    test("works link in facebook icon", () => {
        render(<Footer />);
        const facebookLink = screen.getByLabelText("facebook");
        fireEvent.click(facebookLink);
    });
    test("works link in twitter icon", () => {
        render(<Footer />);
        const twitterLink = screen.getByLabelText("twitter");
        fireEvent.click(twitterLink);
    });
    test("works link in linkedin icon", () => {
        render(<Footer />);
        const linkedinLink = screen.getByLabelText("linkedin");
        fireEvent.click(linkedinLink);
    });
    test("works link in instagram icon", () => {
        render(<Footer />);
        const instagramLink = screen.getByLabelText("instagram");
        fireEvent.click(instagramLink);
    });
});
