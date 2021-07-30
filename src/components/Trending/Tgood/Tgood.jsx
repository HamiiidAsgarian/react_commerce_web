import React from "react";
import "./Tgood.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';

import v3 from "../../../resources/images/Vitrin/v1.jpg";




export default function Tgood() {

    return (
        <div className="Sale-Tgood">
            <div className="Sale-Tgood_cover">
                <div className="Tgood-icons"><i className="icon-heart-empty" /><i className="icon-i-search" /></div>
                <div className="Good-btn"> <span> اضافه کردن به سبد</span> </div>
            </div>
            <div className="off-Good"> <span > 20 %</span></div>
            <img src={v3} alt="shoe" />
            <div className="Tgood">
                <div className="title">
                    <p>دامن های زنانه هاکو</p>
                </div>
                <div className="off">
                    <p>80 هزار تومان</p>
                    <p>60 هزار تومان</p>
                </div>
            </div>
        </div>
    )
}