/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import { activitiesService } from "../../../services/ActivitiesService";
function Cards({
    activity_image,
    activity_title,
    activity_description_short,
    activity_description_long,
    activity_date,
    start_time,
    end_time,
    link,
}) {
    const handleClickBtn = () => {
        window.location.href = link;
    };
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const allActivities = await activitiesService.getActivities();
                setActivities(allActivities);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        };

        fetchActivities();
    }, []);
    return (
        <Card className="card-section" aria-label="Card">
            <Card.Img variant="top" src={activity_image} alt="Activity Image" />
            <Card.Body className="card-body">
                <div className="date-time-container">
                    <Card.Text>{activity_date}</Card.Text>
                    <div className="space-between-date-time"></div>
                    <Card.Text>{start_time}</Card.Text> -{" "}
                    <Card.Text>{end_time}</Card.Text>
                </div>
                <h5>
                    <Card.Text>{activity_title}</Card.Text>
                </h5>
                <Card.Text>{activity_description_short}</Card.Text>
                <button className="read-more-btn" onClick={handleClickBtn}>
                    LEER MÁS
                </button>
            </Card.Body>
        </Card>
    );
}
Cards.propTypes = {
    activity_image: PropTypes.any.isRequired,
    activity_title: PropTypes.string.isRequired,
    activity_description_short: PropTypes.string.isRequired,
    activity_description_long: PropTypes.string.isRequired,
    activity_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
export default Cards;
