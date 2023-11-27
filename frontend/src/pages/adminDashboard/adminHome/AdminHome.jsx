import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { activitiesService } from '../../../services/ActivitiesService.jsx';
import Cards from '../../../components/home/cards/Cards.jsx';
import MenuCategories from '../../../components/home/menuCategories/MenuCategories.jsx';
import SubscriptionBanner from '../../../components/home/banners/SubscriptionBanner.jsx';
import { Link } from 'react-router-dom';
import deleteIcon from '../../../assets/icons/iconedit.png';
import editIcon from '../../../assets/icons/icondelete.png';
import './AdminHome.css';
import DeleteModal from './DeleteModal.jsx';
import "./DeleteModal.css"

function AdminHome() {
    const [activities, setActivities] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedActivityId, setSelectedActivityId] = useState(null);

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = async () => {
        try {
            const fetchedActivities = await activitiesService.getActivities();
            setActivities(fetchedActivities);
        } catch (error) {
            console.error("Error fetching activities", error);
        }
    };

    const handleDelete = async (activityId) => {
        try {
            await activitiesService.deleteActivity(activityId);
            const updatedActivities = activities.filter(activity => activity.activity_id !== activityId);
            setActivities(updatedActivities);
        } catch (error) {
            console.error("Error deleting activity:", error);
        }
    };

    const getActivitiesByCategory = async (category_name) => {
        try {
            const fetchedActivities = await activitiesService.getActivitiesByCategory(category_name);
            setActivities(fetchedActivities);
        } catch (error) {
            console.error("Error fetching activities", error);
            setActivities([]);
        }
    };

    const handleCategoryClick = async (category) => {
        if (category) {
            try {
                const activities = await activitiesService.getActivitiesByCategory(category);
                if (activities.length === 0) {
                    setErrorMessage('No se encontraron actividades para esta categoría');
                    setActivities([]);
                } else {
                    setActivities(activities);
                    setErrorMessage('');
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            activitiesService.getActivities();
        }
    };

    useEffect(() => {
        activitiesService.getActivities();
    }, []);

    return (
        <div className="home-admin-container">
            <div className='home-admin-btn-container'>
            <Link to={`/admin/activitypost`}><button className='activity-post-btn'>Añadir actividad</button></Link>
            <Link to={`/admin/adminlist`}><button className='activity-post-btn'>Ver administradores</button></Link>
            </div>
            <MenuCategories onCategoryClick={handleCategoryClick} />
            <div className="container-admin-father">
                <div className="cards-admin-container">
                    {activities.length > 0 ? (
                        <Row xs={1} md={2} lg={3}>
                            {activities.map(activity => (
                                <Col key={activity.activity_id} className="mt-4">
                                    <Cards
                                        activity_image={activity.activity_image}
                                        activity_title={activity.activity_title}
                                        activity_description_short={activity.activity_description_short}
                                        activity_date={activity.activity_date}
                                        start_time={activity.start_time}
                                        end_time={activity.end_time}
                                        link={`http://localhost:5173/activities/${activity.activity_id}`}
                                    />
                                    <div className="card-icons">
                                        <img
                                            src={editIcon}
                                            alt="Delete Icon"
                                            className="icon-delete"
                                            onClick={() => {
                                                setSelectedActivityId(activity.activity_id);
                                                setShowDeleteModal(true);
                                            }}
                                        />
                                        <Link to={`/admin/editform/${activity.activity_id}`}>
                                            <img
                                                src={deleteIcon}
                                                alt="Edit Icon"
                                                className="icon-edit"
                                            />
                                        </Link>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <p className='category-not-found-error'>{errorMessage || 'No hay actividades para mostrar.'}</p>
                    )}
                </div>
            </div>

            <DeleteModal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                onDelete={() => {
                    handleDelete(selectedActivityId);
                    setShowDeleteModal(false);
                }}
            />
        </div>
    );
}

export default AdminHome;
