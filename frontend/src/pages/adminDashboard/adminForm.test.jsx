/* eslint-disable no-undef */
import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminForm from "./adminForm";
import "@testing-library/jest-dom";

describe("AdminForm", () => {
    test("renders correctly", () => {
        render(
            <BrowserRouter>
                <AdminForm />
            </BrowserRouter>
        );
        const formElement = screen.getByLabelText("admin-form");
        expect(formElement).toBeInTheDocument();
    });

    test("submits form with valid data", async () => {
        render(
            <BrowserRouter>
                <AdminForm />
            </BrowserRouter>
        );

        const titleInput = screen.getByLabelText("Título");
        const categoryInput = screen.getByLabelText("Categoría");
        const shortDescriptionInput = screen.getByLabelText("Descripción breve");
        const longDescriptionInput = screen.getByLabelText("Descripción detallada");
        const contentInput = screen.getByLabelText("Contenidos");
        const dateInput = screen.getByLabelText("Fecha");
        const startTimeInput = screen.getByLabelText("Hora de inicio");
        const endTimeInput = screen.getByLabelText("Hora de finalización");
        const availablePlacesInput = screen.getByLabelText("Plazas disponibles");

        const file = new window.File(["file contents"], "file.png", {
            type: "image/png",
        });

        fireEvent.change(titleInput, { target: { value: "Título" } });
        fireEvent.change(categoryInput, { target: { value: "1" } });
        fireEvent.change(shortDescriptionInput, {
            target: { value: "Descripción breve" },
        });
        fireEvent.change(longDescriptionInput, { target: { value: "Descripción detallada" } });
        fireEvent.change(contentInput, { target: { value: "Contenidos" } });
        fireEvent.change(dateInput, { target: { value: "Fecha" } });
        fireEvent.change(startTimeInput, {
            target: { value: "Hora de inicio" },
        });
        fireEvent.change(endTimeInput, {
            target: { value: "Fecha de finalización" },
        });
        fireEvent.change(availablePlacesInput, {
            target: { value: "Plazas disponibles" },
        });
        Object.defineProperty(titleInput, "files", {
            value: [file],
        });
        const uploadImageInput = screen.getByLabelText("Sube una imagen");
        fireEvent.change(uploadImageInput, { target: { files: [file] } });

        fireEvent.click(screen.getByText("Subir Actividad"));
    });
});
