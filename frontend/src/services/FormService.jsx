const baseURL = "http://localhost:3000";

export const FormService = {
    async postForm({ email, fullName, gender, age, residencePlace, interests, hasDonePreviousActivity, isSubscribed, availableTime }) {
        try {
            const response = await fetch(`${baseURL}/registerform`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    fullName,
                    gender,
                    age,
                    residencePlace,
                    interests,
                    hasDonePreviousActivity,
                    isSubscribed,
                    availableTime,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Failed to post form data. Server responded with ${response.status}: ${errorText}`);
                throw new Error(`Failed to post form data. Server responded with ${response.status}`);
            }
            console.log('Formulario enviado con éxito');
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            throw error;
        }
    },
};
