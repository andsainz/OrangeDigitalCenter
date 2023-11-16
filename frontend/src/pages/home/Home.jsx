import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../Components/home/Cards/Cards.jsx';
import WelcomeBanner from '../../Components/home/banners/WelcomeBanner.jsx';
import MenuCategories from '../../Components/home/menuCategories/MenuCategories.jsx';
import SubscriptionBanner from '../../Components/home/banners/SubscriptionBanner.jsx';
import './Home.css';

function Home() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        
        const data = [
            {
                activity_image: "1",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Descripción del evento...",
                link: "activity url",
            },
            {
                activity_image: "1",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Descripción del evento...",
                link: "activity url",
            },
            {
                activity_image: "1",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Descripción del evento...",
                link: "activity url",
            },
            {
                activity_image: "1",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Descripción del evento...",
                link: "activity url",
            },
        ];

        setCardsData(data);
    }, []);

    return (
        <div className="home-container">
            <WelcomeBanner />
            <MenuCategories />
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {cardsData.map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <Cards
                            activity_image={card.activity_image}
                            activity_description={card.activity_description}
                            activity_date={card.activity_date}
                            start_time={card.start_time}
                            end_time={card.end_time}
                            activity_title={card.activity_title}
                            link={card.link}
                        />
                    </Col>
                ))}
            </Row>
            <SubscriptionBanner />
        </div>
    );
}
    export default Home;