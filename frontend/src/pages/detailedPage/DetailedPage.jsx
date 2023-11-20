import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { activitiesService } from "../../services/ActivitiesService";
import './DetailedPage.css'
import QRCode from 'qrcode.react';

function DetailedPage() {
    const [activity, setActivity] = useState(null);
    const { activity_id } = useParams();
    const url = 'https://http://localhost:5173/registerform';

    useEffect(() => {
        const fetchActivity = async () => {
            try {
                const fetchedActivity = await activitiesService.getActivity(activity_id);
                setActivity(fetchedActivity);
            } catch (error) {
                console.error("Error fetching activity", error);
            }
        };
        fetchActivity();
    }, [activity_id]);
    if (!activity) {
        return <div>Loading...</div>;
    }

    const activityContentList = activity.activity_content.split('.').map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return (
        <div className="detailed-container">
            <div className="detailed-card">
                <p className="detailed-date-time-container">{activity.activity_date}   {activity.start_time} - {activity.end_time}</p>
                <h1 className="detailed-title">{activity.activity_title}</h1>

                <div className="detailed-card-body-container">
                    <div className="detailed-img-description-container">
                        <img src={activity.activity_image} alt="Activity image" />
                        <p>{activity.activity_description}</p>
                    </div>

                    <div className="content-places-container">
                        <h2 className="detailed-content-title">Contenidos</h2>
                        <ul>{activityContentList}</ul>
                        <p className="detailed-available-places"><span className="span-available-places">Plazas disponibles:</span> {activity.available_places}</p>
                        <div className="qr-sign-up-btn-container">
                        <QRCode value={url} />
                        <button className="sign-up-activity-btn">Inscribirme en esta actividad</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedPage;
