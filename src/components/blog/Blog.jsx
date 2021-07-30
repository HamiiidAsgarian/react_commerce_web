import React from "react";
import "./Blog.css"
import News from "./News/News"
export default function Trendinding() {

    return (
        <section className="Blog">
            <div className="Blog-title">
                <div>
                    <p>آخرین اخبار وبلا</p>
                    <p>جدیدترین های دنیای مد و فشن</p>
                </div>
            </div>
            <div className="Blog-btns-holder">

            </div>

            <div className="Blog-Goods">
                < News />
                < News />
                < News />
            </div>
        </section>
    )
}