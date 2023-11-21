/* eslint-disable no-undef */
import { useState } from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import { getActivitiesByCategory } from "../../../services/CategoryService";
import "./MenuCategories.css";

const MenuCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);

    const handleCategoryClick = async (category_name) => {
        try {
            setSelectedCategory(category_name);
            setError(null);

            if (category_name) {
                const activitiesData = await getActivitiesByCategory(
                    category_name
                );
                console.log("Activities from server:", activitiesData);
                setActivities(activitiesData);
            }
        } catch (error) {
            console.error("No hay actividades asignadas a esta categoría.");
            setActivities([]);
            setError("No hay actividades asignadas a esta categoría.");
        }
    };

    return (
        <div>
            <Navbar className="menu-categories-navbar" expand="lg">
                <Nav>
                    <Nav.Link
                        href="#emprendimiento"
                        className={`menu-categories-nav-link ${
                            selectedCategory === "emprendimiento" && "active"
                        }`}
                        onClick={() => handleCategoryClick("emprendimiento")}>
                        Emprendimiento
                    </Nav.Link>
                    <Nav.Link
                        href="#fabricaciondigital"
                        className={`menu-categories-nav-link ${
                            selectedCategory === "fabricaciondigital" &&
                            "active"
                        }`}
                        onClick={() =>
                            handleCategoryClick("fabricaciondigital")
                        }>
                        Fabricación digital
                    </Nav.Link>
                    <Nav.Link
                        href="#programacion"
                        className={`menu-categories-nav-link ${
                            selectedCategory === "programacion" && "active"
                        }`}
                        onClick={() => handleCategoryClick("programacion")}>
                        Programación
                    </Nav.Link>
                    <Nav.Link
                        href="#digitalizacion"
                        className={`menu-categories-nav-link ${
                            selectedCategory === "digitalizacion" && "active"
                        }`}
                        onClick={() => handleCategoryClick("digitalizacion")}>
                        Digitalización
                    </Nav.Link>
                    <Nav.Link
                        href="#otros"
                        className={`menu-categories-nav-link ${
                            selectedCategory === "otros" && "active"
                        }`}
                        onClick={() => handleCategoryClick("otros")}>
                        Otros
                    </Nav.Link>
                </Nav>
            </Navbar>

            <div className="activities-container">
                {error ? (
                    <Card className="card-section" aria-label="Card">
                        <Card.Body>
                            <Card.Text className="paragraph-menu-categories" style={{ color: "white" }}>{error}</Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <ul>
                        {activities.map((activity) => (
                            <Card key={activity.activity_id} className="card-section" aria-label="Card">
                                <Card.Img variant="top" src={activity.activity_image} alt="Activity Image" />
                                <Card.Body>
                                    <div className="activity-details">
                                        <h3 className="paragraph-menu-categories">{activity.activity_title}</h3>
                                        <p className="paragraph-menu-categories">{activity.activity_description}</p>
                                        <p className="paragraph-menu-categories">Fecha: {activity.activity_date}</p>
                                        <p className="paragraph-menu-categories">Horario: {activity.start_time} - {activity.end_time}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                        {activities.length === 0 && (
                            <Card className="card-section" aria-label="Card">
                                <Card.Body>
                                    <Card.Text className="paragraph-menu-categories">
                                        No hay actividades disponibles para la categoría seleccionada.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MenuCategories;

