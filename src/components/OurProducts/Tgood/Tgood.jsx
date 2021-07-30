import React from "react";
import "./Tgood.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';

import v3 from "../../../resources/images/Vitrin/v1.jpg";




export default function Tgood() {

    return (
        <div className="Product-Ggood">

            <div className="off-bag"> <span > 20 %</span></div>
            <div className="aaa">
                <img src={v3} alt="shoe" />
                <div className="Product-Ggood_cover">
                    <div className="Ggood-icons"><i className="icon-heart-empty" /><i className="icon-i-search" /></div>
                    <div className="bag-btn"> <span> اضافه کردن به سبد</span> </div>
                </div>
            </div>
            <div className="Ggood">
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