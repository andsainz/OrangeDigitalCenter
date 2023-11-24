import Cookies from "js-cookie";

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
                    `Ha habido un error en el inicio de sesión. El servidor respondió con ${response.status}`,
                    errorData
                );
                throw new Error(
                    `Ha habido un error en el inicio de sesión. El servidor respondió con ${response.status}`
                );
            }

            console.log("Inicio de sesión realizado con éxito.");

            const token = response.headers.get("Authorization");

            if (token) {
                Cookies.set("token", token, {
                    expires: 1,
                    secure: true,
                    httpOnly: false,
                });
            }

            return response;
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            throw error;
        }
    },
};
