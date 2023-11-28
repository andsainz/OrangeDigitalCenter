const baseURL = "http://localhost:3000";

export const subscribedService = {
    async postSubscribed({ email }) {
        try {
            await fetch(`${baseURL}/newsletter`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
        } catch (error) {
            console.error("The user could not subscribe in newsletter:", error);
            throw error;
        }
    },
};
