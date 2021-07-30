import React from "react";
import "./Service.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';

// import v3 from "../../../resources/images/Vitrin/v1.jpg";




export default function Service(pr) {

    return (
        <div className="Service">
            <div className="Service-image">
                <i className={pr.icon} />
            </div>
            <div className="Service-info">
                <div className="justifier">
                    <h5>ارسال رایگان</h5>
                    <p> ارسال رایگان به نقاط کشور برای خرید بالای 60 هزار </p>
                </div>
            </div>

        </div>
    )
}