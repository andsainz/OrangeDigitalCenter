import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import WelcomeBanner from '../../Components/home/banners/welcomeBanner'
import Cards from '../../Components/home/Cards/Cards'
import { activitiesService } from '../../services/ActivitiesService';

function Home() {
    const [activities, setActivities] = useState([]);
    const activitiesLinks = [
        "http://localhost:5173/tallerautismo",
        "http://localhost:5173/cinetarantino",
        "http://localhost:5173/eventoconcomida",
        "http://localhost:5173/caferico"
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
            <WelcomeBanner />
            <div className="container-father">
                <div className="cards-container">
                    <Row xs={1} md={2} lg={4}>
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
                                    activity_link={activity.activity_link}
                                    link={activitiesLinks[index]}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
}
export default Home;
