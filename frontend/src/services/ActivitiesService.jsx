const baseURL = "http://localhost:3000";

export const activitiesService = {
    async createActivity(newActivity) {
        try {
            const response = await fetch(`${baseURL}/activities`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newActivity),
            });
            if (!response.ok) {
                const responseData = await response.json();
                console.error('Server response:', responseData);
                throw new Error("Error creating activity");
            }
            const responseData = await response.json();
            console.log('Activity created successfully:', responseData);
            return responseData;
        } catch (error) {
            console.error("Error creating activity:", error);
            throw error;
        }
    },    
};
