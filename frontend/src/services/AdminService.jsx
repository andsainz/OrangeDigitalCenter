const baseURL = "http://localhost:3000";

export const getToken = () => {
    return localStorage.getItem("token");
};

export const adminsService = {
    async getAdmins() {
        try {
            const response = await fetch(`${baseURL}/admins`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            if (!response.ok) {
                throw new Error("Error to obtain admins");
            }
            const allAdmins = await response.json();
            return allAdmins;
        } catch (error) {
            console.error("Error getting admins:", error);
            throw error;
        }
    },
    async getAdmin(id) {
        try {
            const response = await fetch(`${baseURL}/admins/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            if (!response.ok) {
                throw new Error("Error getting admin");
            }
            const admin = await response.json();
            return admin;
        } catch (error) {
            console.error("Error getting admin:", error);
            throw error;
        }
    },
    async createAdmin(newAdmin) {
        try {
            const token = getToken();
            const response = await fetch(`${baseURL}/admins`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newAdmin),
            });
            if (!response.ok) {
                const responseData = await response.json();
                console.error("Server response:", responseData);
                throw new Error("Error creating admin");
            }
            const responseData = await response.json();
            console.log("Admin created successfully:", responseData);
            return responseData;
        } catch (error) {
            console.error("Error creating admin:", error);
            throw error;
        }
    },
    async updateAdmin(id, updatedAdmin) {
        try {
            await fetch(`${baseURL}/admins/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(updatedAdmin),
            });
        } catch (error) {
            console.error("Error updating admin:", error);
            throw error;
        }
    },
    async deleteAdmin(id) {
        try {
            const token = getToken();

            if (!token) {
                throw new Error(
                    "Token not available. Cannot delete admin without authentication."
                );
            }
            const response = await fetch(`${baseURL}/admins/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const responseData = await response.json();
                console.error("Server response:", responseData);
                throw new Error("Error deleting admin");
            }

            console.log("admin deleted successfully");
        } catch (error) {
            console.error("Error deleting admin:", error);
            throw error;
        }
    },
};
