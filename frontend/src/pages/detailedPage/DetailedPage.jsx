import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { activitiesService } from "../../services/ActivitiesService";
import './DetailedPage.css'
import QRCode from 'qrcode.react';

function DetailedPage() {
    const [activity, setActivity] = useState(null);
    const { activity_id } = useParams();
    const url = 'http://localhost:5173/registerform';
    const handleClickBtn = () => {
        window.location.href = url;
    };
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
            <img src={activity.activity_image} alt="Activity image" />
            <div className="detailed-card">
                <div className="detailed-date-time-container">
                    <p>{activity.activity_date}</p>
                    <div className="space-between-date-time"></div>
                    <p>  {activity.start_time} - {activity.end_time}</p>
                </div>

                <h1 className="detailed-title">{activity.activity_title}</h1>
                <p className="activity-long-description-txt">{activity.activity_description_long}</p>

                <div className="bottom-detailed-card-container">
                    <div className="detailed-card-left">
                        <ul>{activityContentList}</ul>
                        <p className="detailed-available-places"><span className="span-available-places">Plazas disponibles:</span> {activity.available_places}</p>
                    </div>

                    <div className="qr-sign-up-btn-container">
                        <QRCode value={url} />
                        <button className="sign-up-activity-btn" onClick={handleClickBtn}>Inscribirme en esta actividad</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedPage;
