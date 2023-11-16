const baseURL = "http://localhost:3000";

export const FormService = {
    async postForm({ email, fullName, gender, age, residencePlace, interests, availabilityTime}){
    try {
        await fetch(`${baseURL}/registrationform`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, fullName, gender, age, residencePlace, interests, availabilityTime }),
        });
      } catch (error) {
        console.error("Check that all fields are correct:", error);
        throw error;
      }
}}