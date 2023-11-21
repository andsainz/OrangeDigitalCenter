import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { activitiesService } from '../../services/ActivitiesService';
import Cards from '../../Components/home/Cards/Cards';
import MenuCategories from '../../Components/home/menuCategories/menuCategories';
import SubscriptionBanner from '../../Components/home/banners/subscriptionBanner';
import './Home.css';
import CarouselComponent from '../../Components/carousel/Carousel';
import PopUp from '../../Components/popUpSubs/PopUp';

function Home() {
    const [activities, setActivities] = useState([]);
    const activitiesLinks = [
        "http://localhost:5173/activities/1",
        "http://localhost:5173/activities/2",
        "http://localhost:5173/activities/3",
        "http://localhost:5173/activities/4",
        "http://localhost:5173/activities/5",
        "http://localhost:5173/activities/6",
        "http://localhost:5173/activities/7",
        "http://localhost:5173/activities/8",
        "http://localhost:5173/activities/9",
        "http://localhost:5173/activities/10",
        "http://localhost:5173/activities/11",
        "http://localhost:5173/activities/12",
        "http://localhost:5173/activities/13",
        "http://localhost:5173/activities/14"
    ];
    useEffect(() => {
        activitiesService
            .getActivities()
            .then((fetchedActivities) => {
                setActivities(fetchedActivities);
            })
            .catch((error) => {
                console.error("Error fetching activities", error);
            });
    }, []);
    return (
        <div className="home-container">
            <PopUp/>
            <CarouselComponent/>
            <MenuCategories />
            <div className="container-father">
                <div className="cards-container">
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
                </div>
            </div>
            <SubscriptionBanner />
        </div>
    );
}
export default Home;
