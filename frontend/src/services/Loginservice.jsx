const baseURL = "http://localhost:3000";

export const LoginService = {
    async postLogin({ email, user_password }) {
        try {
            const response = await fetch(`${baseURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, user_password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error(
                    `Fallo al enviar los datos del formulario. El servidor respondió con ${response.status}`,
                    errorData
                );
                throw new Error(
                    `Fallo al enviar los datos del formulario. El servidor respondió con ${response.status}`
                );
            }

            console.log("Formulario enviado con éxito");
            return response; 
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            throw error;
        }
    },
};
