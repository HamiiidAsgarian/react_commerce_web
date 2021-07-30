import React from "react";
import "./Vitrin.css";
// import Hat from "../../resources/images/Vitrin/v1.jpg";
import v1 from "../../resources/images/Vitrin/v2.jpg";
import v2 from "../../resources/images/Vitrin/v3.jpg";
import Good from "./Good/Good.jsx";




export default function Vitrin() {

    // Set the date we're counting down to

    return (
        <section className="Vitrin">
            <div className="Vitrin-Holder">
                <div className="Vit">
                    <img src={v2} alt="watch" />
                    <div className="Vit-bottom">
                        <h4>باز دید از مجموعه</h4>
                        <h1> تی شرت های فشن</h1>
                        <p>دنیایی از مدل های روز</p>
                    </div>
                </div>
                <Good />
                <div className="Vit">
                    <img src={v1} alt="set" />
                    <div className="v3">
                        <p>فروش تابستانه</p>
                        <h1> تخفیف تا مرز 70%</h1>
                        <p className="buy">خرید </p>
                    </div>
                </div>
            </div>

        </section>
    )
}