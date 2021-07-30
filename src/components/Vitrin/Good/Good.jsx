import React from "react";
import "./Good.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';

import v3 from "../../../resources/images/Vitrin/v1.jpg";




export default function Good() {
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days;
        document.getElementById("demo2").innerHTML = hours;
        document.getElementById("demo3").innerHTML = minutes;
        document.getElementById("demo4").innerHTML = seconds;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    return (
        <div className="Sale-good">
            <div className="Sale-good_cover">
                <div className="good-icons"><i className="icon-heart-empty" /><i className="icon-i-search" /></div>
                <div className="bag-btn"> <span> اضافه کردن به سبد</span> </div>
            </div>
            <div className="off-bag"> <span > 20 %</span></div>
            <img src={v3} alt="shoe" />
            <div className="timer">

                <div className="timer-inside">
                    <p className="time" >
                        <span id="demo"></span>
                        <span className="unit">روز</span>
                    </p>
                    {/* ///////////////////// */}
                    <p className="time" >
                        <span id="demo2"></span>
                        <span className="unit">ساعت</span>
                    </p>
                    {/* /////////////////////// */}
                    <p className="time" >
                        <span id="demo3"></span>
                        <span className="unit">دقیقه</span>
                    </p>
                    {/* /////////////////////////////// */}
                    <p className="time" >
                        <span id="demo4"></span>
                        <span className="unit">ثانیه</span>
                    </p>
                </div>
            </div>

            <div className="Good">
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