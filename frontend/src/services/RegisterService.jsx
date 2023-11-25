const baseURL = "http://localhost:3000";

export const registrationService = {
  async postRegistration({ fullName, email, admin_password }) {
    try {
      const response = await fetch(`${baseURL}/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, admin_password }),
      });
      return response;
    } catch (error) {
      console.error("Check that all fields are correct:", error);
      throw error;
    }
  },
};
