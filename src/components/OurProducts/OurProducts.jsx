import React from "react";
import "./OurProducts.css"
import Tgood from "./Tgood/Tgood"
export default function Trendinding() {

    return (
        <section className="OurProducts">
            <div className="OurProducts-title">
                <div>
                    <p>کالای پر طرفدار</p>
                    <p>بیشترین بازدید این هفته</p>
                </div>
            </div>
            <div className="OurProducts-btns-holder">
                <div className="OurProducts-btn">
                    <p>بهترین فروش ها</p>
                    <p>حراج</p>
                    <p>بالاترین امتازها</p>
                </div>
            </div>

            <div className="OurProducts-Goods">
                <Tgood />
                <Tgood />
                <Tgood />
                <Tgood />
                <Tgood />
                <Tgood />
                <Tgood />
                <Tgood />
            </div>
        </section>
    )
}