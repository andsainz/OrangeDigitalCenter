// En CategoryService.jsx
const baseURL = "http://localhost:3000";

export const getActivitiesByCategory = async (category_name) => {
    try {
        const response = await fetch(`${baseURL}/activities/categories/${category_name}`);

        if (!response.ok) {
            console.error(`Error al obtener actividades por categoría: ${response.statusText}`);
            throw new Error(`Error al obtener actividades por categoría: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
