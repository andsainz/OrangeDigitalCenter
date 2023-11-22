import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { activitiesService } from '../../services/ActivitiesService';
import Cards from '../../Components/home/Cards/Cards';
import MenuCategories from '../../Components/home/menuCategories/menuCategories';
import SubscriptionBanner from '../../Components/home/banners/subscriptionBanner';
import './Home.css';
import CarouselComponent from '../../Components/carousel/Carousel';

function Home() {
    const [activities, setActivities] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const activitiesLinks = [
        "http://localhost:5173/activities/1",
        "http://localhost:5173/activities/2",
        "http://localhost:5173/activities/3",
        "http://localhost:5173/activities/10",
        "http://localhost:5173/activities/11",
        "http://localhost:5173/activities/12",
        "http://localhost:5173/activities/13",
        "http://localhost:5173/activities/14"
    ];

    const getActivities = async () => {
        try {
            const fetchedActivities = await activitiesService.getActivities();
            setActivities(fetchedActivities);
        } catch (error) {
            console.error("Error fetching activities", error);
            setActivities([]);
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

    async function handleCategoryClick(category) {
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
            getActivities();
        }
    }

    useEffect(() => {
        getActivities();
    }, []);

    // Home.js
    return (
        <div className="home-container">
            <CarouselComponent />
            <MenuCategories onCategoryClick={handleCategoryClick} />
            <div className="container-father">
                <div className="cards-container">
                    {activities.length > 0 ? (
                        <Row xs={1} md={2} lg={3}>
                            {activities.map((activity, index) => (
                                <Col key={index} className="mt-4">
                                    <Cards
                                        key={index}
                                        activity_image={activity.activity_image}
                                        activity_title={activity.activity_title}
                                        activity_description={activity.activity_description}
                                        activity_date={activity.activity_date}
                                        start_time={activity.start_time}
                                        end_time={activity.end_time}
                                        link={activitiesLinks[index]}
                                    />
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <p className='category-not-found-error'>{errorMessage || 'No hay actividades para mostrar.'}</p>
                    )}
                </div>
            </div>
            <SubscriptionBanner />
        </div>
    );
}

export default Home;
