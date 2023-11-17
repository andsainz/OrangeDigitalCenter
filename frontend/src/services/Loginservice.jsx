const baseURL = "http://localhost:3000"; // Update with your server URL

export const FormService = {
    async postForm(data) {
        try {
            const response = await fetch(`${baseURL}/registerform`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();  // Intenta obtener más detalles del error
                console.error(`Failed to post form data. Server responded with ${response.status}`, errorData);
                throw new Error(`Failed to post form data. Server responded with ${response.status}`);
            }

            console.log('Formulario enviado con éxito');
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            throw error;
        }
    },
};
