/* eslint-disable no-undef */
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ODC from "./Odc"
import "@testing-library/jest-dom";

describe("ODC", () => {
    test("renders correctly", () => {
        render(<ODC />);
        const odcElement = screen.getByLabelText("ODC");
        expect(odcElement).toBeInTheDocument();
    });
    test("images renders correctly", () => {
        render(<ODC />);
        const odcElement = screen.getByLabelText("imageODC-1");
        expect(odcElement).toBeInTheDocument();
    });
    test("images renders correctly", () => {
        render(<ODC />);
        const odcElement = screen.getByLabelText("imageODC-2");
        expect(odcElement).toBeInTheDocument();
    });
    test("images renders correctly", () => {
        render(<ODC />);
        const odcElement = screen.getByLabelText("imageODC-3");
        expect(odcElement).toBeInTheDocument();
    });
    test("images renders correctly", () => {
        render(<ODC />);
        const odcElement = screen.getByLabelText("imageODC-4");
        expect(odcElement).toBeInTheDocument();
    });
    test("images renders correctly", () => {
        render(<ODC />);
        const odcElement = screen.getByLabelText("imageODC-5");
        expect(odcElement).toBeInTheDocument();
    });
    test("images renders correctly", () => {
        render(<ODC />);
        const odcElement = screen.getByLabelText("imageODC-6");
        expect(odcElement).toBeInTheDocument();
    });
})