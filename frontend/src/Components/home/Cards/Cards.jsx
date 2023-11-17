import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import { propTypes } from "react-bootstrap/esm/Image";

function Cards({ activity_image, activity_title, activity_description, activity_date, start_time, end_time, activity_link }) {
    const handleClickBtn = () => {
        window.location.href = link;
    };
    return (
        <Card className="card-section" aria-label="Card">
            <Card.Img variant="top" src={activity_image} alt="Activity Image" />
            <Card.Body className="card-body">
                <h5>
                    <Card.Text>{activity_title}</Card.Text>
                </h5>
                <Card.Text>{activity_description}</Card.Text>
                <Card.Text>{activity_date}</Card.Text>
                <Card.Text>{start_time}</Card.Text>
                <Card.Text>{end_time}</Card.Text>
                <Card.Text>{activity_link}</Card.Text>
            </Card.Body>
        </Card>
    );
}
Cards.propTypes = {
    activity_image: PropTypes.string.isRequired,
    activity_title: PropTypes.string.isRequired,
    activity_description: PropTypes.string.isRequired,
    activity_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    activity_link: PropTypes.string.isRequired
};
export default Cards;