import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cards from "../../Components/Cards/Cards.jsx";
import CardWrapper from '../../Components/cardWrapper/CardWrapper';
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
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {cardsData.map((card, index) => (
                <Col key={index}>
                    <CardWrapper>
                        <Cards {...card} />
                    </CardWrapper>
                </Col>
            ))}
        </Row>
    );
}

export default Home;