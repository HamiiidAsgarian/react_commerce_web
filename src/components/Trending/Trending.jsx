import React, { useEffect, setstate } from "react"
import "./Trending.css"
import Tgood from "./Tgood/Tgood"
export default function Trendinding() {


    useEffect(() => {
        // const test = setInterval(() => {
        //     // var pos = document.getElementById("Trending-Goods").style.left;
        //     console.log(size)
        //     // document.getElementById("Trending-Goods").style.left = size+280+"px";

        // }, 1000)
        // return () => clearInterval(test);
        document.getElementById("Trending-Goods").style.left = "-600px";
    })

    const arrowHandlerLeft = () => {
        var size = parseInt(document.getElementById("Trending-Goods").style.left, 10);
        if (size <= -300)
        document.getElementById("Trending-Goods").style.left = size + 300 + "px";
    }
    const arrowHandlerRight = () => {
        var size = parseInt(document.getElementById("Trending-Goods").style.left, 10);
        if (size >= -400)
            document.getElementById("Trending-Goods").style.left = size - 300 + "px";
    }
    return (
        <section className="Trending">
            <div className="Trending-title">
                <div>
                    <p>کالای پر طرفدار</p>
                    <p>بیشترین بازدید این هفته</p>
                </div>
            </div>
            <div className="Trending-good_frame">
                <div className="LRarrow">
                    <i className="icon-left-open" onClick={(e) => arrowHandlerLeft(e)} />
                    <i className="icon-right-open" onClick={(e) => arrowHandlerRight(e)} />
                </div>
                <div className="Trending-Goods" id="Trending-Goods" style={{ width: "1800px", left: "-900px" }}>
                    <Tgood />
                    <Tgood />
                    <Tgood />
                    <Tgood />
                    <Tgood />
                    <Tgood />
                </div>
            </div>
        </section>
    )
}