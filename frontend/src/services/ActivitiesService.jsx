const baseURL = "http://localhost:3000";

const getToken = () => {
    return localStorage.getItem("token");
};

export const activitiesService = {
    async getActivities() {
        try {
            const response = await fetch(`${baseURL}/activities`);
            if (!response.ok) {
                throw new Error("Error to obtain activities");
            }
            const allActivities = await response.json();
            return allActivities;
        } catch (error) {
            console.error("Error getting activities:", error);
            throw error;
        }
    },
    async getActivity(id) {
        try {
            const response = await fetch(`${baseURL}/activities/${id}`);
            if (!response.ok) {
                throw new Error("Error getting activity");
            }
            const activity = await response.json();
            return activity;
        } catch (error) {
            console.error("Error getting activity:", error);
            throw error;
        }
    },
    async getActivitiesByCategory(category_name){
        try {
            const url = category_name
                ? `${baseURL}/activities/categories/${category_name}`
                : `${baseURL}/activities`;
    
            const response = await fetch(url);
    
            if (!response.ok) {
                if (response.status === 404) {
                    return [];
                } else {
                    console.error(`Error al obtener actividades por categoría: ${response.statusText}`);
                    throw new Error(`Error al obtener actividades por categoría: ${response.statusText}`);
                }
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async createActivity(newActivity) {
        try {
            const response = await fetch(`${baseURL}/activities`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getToken()}`,
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
    async updateActivity(id, updatedActivity) {
        try {
            await fetch(`${baseURL}/activities/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedActivity),
            });
        } catch (error) {
            console.error("Error updating activity:", error);
            throw error;
        }
    },
    async deleteActivity(id) {
        try {
            await fetch(`${baseURL}/activities/${id}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.error("Error deleting activity:", error);
            throw error;
        }
    }
};
