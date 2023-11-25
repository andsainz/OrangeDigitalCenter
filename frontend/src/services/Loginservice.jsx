const baseURL = "http://localhost:3000";

export const LoginService = {

    async postLogin({ email, admin_password }) {
        try {
            const response = await fetch(`${baseURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, admin_password }),
            });
    
            if (!response.ok) {
                console.error("Error in login:", response.statusText);
                return null;
            }
    
            return response;
        } catch (error) {
            console.error("Error in login:", error);
            return null;
        }
    }
    };