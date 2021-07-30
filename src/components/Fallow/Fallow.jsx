import React from "react";
import "./Fallow.css"
import Service from "./Service/Service"
export default function Fallow() {

    return (
        <section className="Fallow">
            <div className="Fallow-title">
                <div>
                    <p>آخرین اخبار وبلا</p>
                    <p>جدیدترین های دنیای مد و فشن</p>
                </div>
            </div>
            <div className="Fallow-btns-holder">

            </div>

            <div className="Fallow-Goods">
                < Service icon="icon-delivery-truck" />
                < Service icon=" icon-call-center" />
                < Service icon="icon-mobile" />
            </div>
        </section>
    )
}