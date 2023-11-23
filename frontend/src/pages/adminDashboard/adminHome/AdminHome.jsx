import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { activitiesService } from '../../../services/ActivitiesService.jsx';
import Cards from '../../../Components/home/Cards/Cards.jsx';
import MenuCategories from '../../../Components/home/menuCategories/menuCategories.jsx';
import SubscriptionBanner from '../../../Components/home/banners/subscriptionBanner.jsx';
import { Link } from 'react-router-dom';
import './AdminHome.css';

function AdminHome() {
    const [activities, setActivities] = useState([]);

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

 

    const handleDelete = async (index) => {
        try {
            const activityIdToDelete = activities[index].activity_id;
            const updatedActivities = activities.filter((_, i) => i !== index);
            setActivities(updatedActivities);
            await activitiesService.deleteActivity(activityIdToDelete);
        } catch (error) {
            console.error("Error deleting activity:", error);
        }
    };
    
    return (
        <div className="home-admin-container">
            <MenuCategories />
            <Button className='add-product'>
                Añadir actividad
            </Button>
            <div className="container-admin-father">
                <div className="cards-admin-container">
                    <Row xs={1} md={2} lg={3}>
                        {activities.map((activity, index) => (
                            <Col key={index} className="mt-4">
                                <Cards
                                    key={index}
                                    activity_image={activity.activity_image}
                                    activity_title={activity.activity_title}
                                    activity_description_short={activity.activity_description_short}
                                    activity_date={activity.activity_date}
                                    start_time={activity.start_time}
                                    end_time={activity.end_time}
                                    link={`http://localhost:5173/activities/${activity.activity_id}`}
                                />
                                <Button variant="danger" onClick={() => handleDelete(index)}>
                                    Borrar
                                </Button>
                                <Button variant="primary">
                                <Link to={`/admin/editform/${activity.activity_id}`}>Editar</Link>
                                </Button>

                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <SubscriptionBanner />
        </div>
    );
}

export default AdminHome;
