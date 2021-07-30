import React from "react";
import "./Catagories.css";
import Hat from "../../resources/images/Catagories/hat.jpg";
import watch from "../../resources/images/Catagories/watch.jpg";
import shoe from "../../resources/images/Catagories/shoe.jpg";
import set from "../../resources/images/Catagories/set.jpg";




export default function Catagories() {
    return (
        <section className="Catagories">
            <div className="Catagories-Holder">
                <div className="cata">
                    <img src={watch} alt="watch" />
                    <div className="cata-bottom"> <p>ساعت</p> </div>
                </div>
                <div className="cata">
                    <img src={shoe} alt="shoe" />
                    <div className="cata-bottom"> <p>کفش</p> </div>
                </div>
                <div className="cata">
                    <img src={set} alt="set" />
                    <div className="cata-bottom"> <p>هدست</p> </div>
                </div>
                <div className="cata">
                    <img src={Hat} alt="hat" />
                    <div className="cata-bottom"> <p>کلاه</p> </div>
                </div>
            </div>

        </section>
    )
}