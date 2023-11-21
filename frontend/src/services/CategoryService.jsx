const baseURL = "http://localhost:3000";

export const getActivitiesByCategory = async (category_name) => {
    try {
        const url = category_name
            ? `${baseURL}/activities/categories/${category_name}`
            : `${baseURL}/activities`;

        const response = await fetch(url);

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
