const baseURL = "http://localhost:3000";

export const loginService = {
    async postLogin({ email, user_password }) {
        try {
            await fetch(`${baseURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, user_password }),
            });
        } catch (error) {
            console.error("Email or password does not match!:", error);
            throw error;
        }
    },
};