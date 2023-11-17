import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardWrapper from '../../components/home/cardWrapper/CardWrapper';
import WelcomeBanner from '../../components/home/banners/WelcomeBanner.jsx';
import MenuCategories from '../../components/home/menuCategories/MenuCategories.jsx'
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
                act_description: "Los alumnos del bootcamp de ODC y Factoria F5 reciben una charla sobre como manejar la frustación en un entorno de desarrollo...",
                link: "activity url",
            },
            {
                activity_image: "2",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Los alumnos del bootcamp de ODC y Factoria F5 reciben una charla sobre como manejar la frustación en un entorno de desarrollo...",
                link: "activity url",
            },
            {
                activity_image: "3",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Los alumnos del bootcamp de ODC y Factoria F5 reciben una charla sobre como manejar la frustación en un entorno de desarrollo...",
                link: "activity url",
            },
        ];

        setCardsData(data);
    }, []);

    return (
        <>
            <WelcomeBanner />
            <MenuCategories />
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                <CardWrapper cardsData={cardsData} />
            </Row>
        </>
    );
}

export default Home;