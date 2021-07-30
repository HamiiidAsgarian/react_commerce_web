import React from "react";
import "./News.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';

import v3 from "../../../resources/images/Vitrin/v1.jpg";




export default function News() {

    return (
        <div className="NEWS">
            <div className="news-image">
                <img src="" alt="" />
            </div>
            <div className="news-info">
                <h4>تازه های پوشاک</h4>
                <p><span>حمید اصغریان</span> در <span> 26/2/97</span></p>
                <p>سریال «بازی تاج و تخت» با اپیزودی که جایگاه این سریال را به‌عنوان دارنده‌ی شرم‌آورترین پایان‌بندی تاریخ تلویزیون تثبیت می‌کند، برای همیشه به پایان رسید. همراه نقد </p>
            </div>

        </div>
    )
}