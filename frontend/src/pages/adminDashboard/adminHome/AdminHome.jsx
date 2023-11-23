import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { activitiesService } from '../../../services/ActivitiesService.jsx';
import Cards from '../../../Components/home/Cards/Cards.jsx';
import MenuCategories from '../../../Components/home/menuCategories/menuCategories.jsx';
import SubscriptionBanner from '../../../Components/home/banners/subscriptionBanner.jsx';
import { Link } from 'react-router-dom';
import deleteIcon from '../../../assets/images/iconedit.png';
import editIcon from '../../../assets/images/icondelete.png';
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

    const handleDelete = async (activityId) => {
        try {
            await activitiesService.deleteActivity(activityId);
            const updatedActivities = activities.filter(activity => activity.activity_id !== activityId);
            setActivities(updatedActivities);
        } catch (error) {
            console.error("Error deleting activity:", error);
        }
    };

    return (
        <div className="home-admin-container">
            <Link to={`/admin/activitypost`}><button className='activity-post-btn'>Añadir actividad</button></Link>
            <MenuCategories />
            <div className="container-admin-father">
                <div className="cards-admin-container">
                    <Row xs={1} md={2} lg={3}>
                        {activities.map(activity => (
                            <Col key={activity.activity_id} className="mt-4" >
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
                                        onClick={() => handleDelete(activity.activity_id)}
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
                </div>
            </div>
            <SubscriptionBanner />
        </div>
    );
}

export default AdminHome;
