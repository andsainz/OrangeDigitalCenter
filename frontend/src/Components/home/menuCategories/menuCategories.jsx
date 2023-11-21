/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Navbar, Nav, Card } from "react-bootstrap";
import "./MenuCategories.css";
import "../../home/Cards/Cards.css"
import { getActivitiesByCategory } from "../../../services/CategoryService";

const MenuCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null);
    
                if (selectedCategory === null) {
                    // Si no se ha seleccionado una categoría, recuperar todas las actividades
                    const allActivities = await getActivitiesByCategory(null);
                    setActivities(allActivities);
                } else {
                    // Si se ha seleccionado una categoría, recuperar actividades por esa categoría
                    const activitiesData = await getActivitiesByCategory(selectedCategory);
                    console.log("Activities from server:", activitiesData);
                    setActivities(activitiesData);
                }
            } catch (error) {
                console.error("Error fetching activities:", error);
                setActivities([]);
                setError("Error al cargar las actividades.");
            }
        };
    
        fetchData();
    }, [selectedCategory]);

    const handleCategoryClick = (category_name) => {
        setSelectedCategory(category_name);
    };

    return (
        <div>
            <Navbar className="menu-categories-navbar" expand="lg">
                <Nav>
                    {["emprendimiento", "fabricaciondigital", "programacion", "digitalizacion", "otros"].map(category => (
                        <Nav.Link
                            key={category}
                            href={`#${category}`}
                            className={`menu-categories-nav-link ${selectedCategory === category && "active"}`}
                            onClick={() => handleCategoryClick(category)}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar>

            <div className="activities-container">
                {error ? (
                    <div>
                        {/* Resto del contenido del error */}
                    </div>
                ) : (
                    <ul>
                        {activities.map((activity) => (
                            <div className="card-section-container">
                            <Card className="card-section-categories" key={activity.activity_id}>
                                <Card.Img className="card-home-image" variant="top" src={activity.activity_image} alt="Activity Image" />
                                <Card.Body className="card-body">
                                <div className="date-time-container">
                                    <Card.Title>{activity.activity_date}</Card.Title>
                                    <Card.Text>{activity.start_time}</Card.Text>
                                    <Card.Text>{activity.end_time}</Card.Text>
                                    </div>
                                <h5>
                                    <Card.Text>{activity.activity_title}</Card.Text>
                                </h5>
                                <Card.Text>{activity.activity_description}</Card.Text>
                                    <Card.Text>{`${activity.start_time} - ${activity.end_time}`}</Card.Text>
                                    <button className="read-more-btn">LEER MÁS</button>
                                </Card.Body>
                            </Card>
                            </div>
                        ))}
                        {activities.length === 0 && (
                            <div>
                                <p className="paragraph-menu-categories">No hay actividades asociadas a esta categoría!</p>
                            </div>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MenuCategories;
