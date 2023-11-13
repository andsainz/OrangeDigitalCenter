import { useState, useEffect } from 'react';
import CardWrapper from "./CardWrapper";
import Cards from "../Cards/Cards";
import './Home.css';

function Home() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
      
        const data = [
            {
                activity_image: "",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Los alumnos del bootcamp de ODC y Factoria F5 reciben una charla sobre como manejar la frustación en un entorno de desarrollo...",
                link: "activity url",
            },
            {
                activity_image: "",
                activity_title: "Charla motivacional",
                activity_date: "13-11-2023",
                start_time: "10:00",
                end_time: "12:00",
                act_description: "Los alumnos del bootcamp de ODC y Factoria F5 reciben una charla sobre como manejar la frustación en un entorno de desarrollo...",
                link: "activity url",
            },
            {
                activity_image: "",
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
        <CardWrapper cardsData={cardsData}>
            {cardsData.map((card, index) => (
                <Cards key={index} {...card} />
            ))}
        </CardWrapper>
    );
}

export default Home;
