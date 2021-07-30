import React, { useEffect, useState } from "react"
import s1 from "../../resources/images/SlideShow/1.jpg";
import s2 from "../../resources/images/SlideShow/2.jpg";
import s3 from "../../resources/images/SlideShow/3.jpg";

import "./SlideShow.css";
export default function SlideShow() {
    var [loadVal, setLoadVal] = useState(0);
    var [currentSlide, setCurrentSlide] = useState(0);
    var [screenLimitedSize, setscreenLimitedSize] = useState(0);
    const slides = [s1, s2, s3]
    // var [currentPoint, setCurrentPoint] = useState(0)
    //////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        var screenSize;
        window.addEventListener('resize', function (event) {
            console.log(
                document.body.clientWidth,
                window.innerWidth,
                window.outerWidth,
                window.screen.width
            )
            if (window.innerWidth > 1920) {
                screenSize = 1920
                setscreenLimitedSize(screenSize)
                // window.location.reload(false);
            }
            else if (window.innerWidth < 1920) {
                // screenSize = window.screen.width
                screenSize = document.body.clientWidth
                setscreenLimitedSize(screenSize)
                // window.location.reload(false);
            }
            
        });
        if (screenSize === undefined) {
            if (document.body.clientWidth > 1920) screenSize = 1920;
            else if (document.body.clientWidth < 1920) screenSize = document.body.clientWidth
        }
        setscreenLimitedSize(screenSize)
        // console.log(screenSize, screenLimitedSize)
        /////////////////////////////////////////////////////////
        // var widthWin = window.screen.width
        // var width = parseInt(document.getElementsByClassName("Frame")[0].style.width)
        const intervalId = setInterval(() => {
            // console.log(screenLimitedSize)
            if (currentSlide !== 2) {
                setLoadVal(loadVal - screenLimitedSize);
                setCurrentSlide(currentSlide + 1)
            } else if (currentSlide === 2) {
                setCurrentSlide(currentSlide - 2)
                setLoadVal(loadVal + screenLimitedSize * 2);
            }
        }, 3500);
        /////////////////////////////////////////////////////////////////////
        // setCurrentPoint(currentSlide)
        for (let i = 0; i < slides.length; i++) {
            if (currentSlide === i) {
                document.getElementById(i).style.backgroundColor = "#4a4a4ae3"
                document.getElementById(i).style.width = "25px";

            }
            else if (currentSlide !== i) {
                document.getElementById(i).style.backgroundColor = "#000000d4";
                document.getElementById(i).style.width = "12px";

            }
        }
        return () => clearInterval(intervalId);
    }, [screenLimitedSize, currentSlide, loadVal, slides.length]);
    //////////////////////////////////////////////////////////////////////////////////
    const slidePoints = (e, index) => {
        console.log(index)
        setCurrentSlide(index)
        setLoadVal(index * -screenLimitedSize);
    }
    //////////////////////////////////////////////////////////////////////////
    const SliderPoints = slides.map((e, index) => {
        return (<div className="points" id={index} key={index} defaultValue={index} onClick={(e) => slidePoints(e, index)}></div>)
    })
    /////////////////////////////////////////////////////////////////////////////
    switch (currentSlide) {
        case (0):
            //  console.log(document.getElementById(0).style.width="200px")
            break
        default:
            // console.log("non")
            break
    }
    return (
        <section className="SlideShow">
            <div className="Frame" style={{ maxWidth: "1920px", }}>
                <div className="load" id="load" style={{ left: loadVal + "px" }}>
                    <div className="brand">
                        785$
                    <div className="brandName">نیم بوت</div>
                    </div>
                    <div className="brand two">
                        85$
                    <div className="brandName">کت  lose</div>
                    </div>
                    <div className="brand three">
                        115 $
                    <div className="brandName">پیراهن Jot</div>
                    </div>
                    <div className="brand four">
                        36 $
                    <div className="brandName">پیراهن Jot</div>
                    </div>
                    <div className="brand five">
                        75 $
                    <div className="brandName">پیراهن Jot</div>
                    </div>

                    <img src={slides[0]} className="slide1" alt="Image1" />
                    <img src={slides[1]} className="slide2" alt="Image2" />
                    <img src={slides[2]} className="slide3" alt="Image3" />
                </div>
            </div>
            <div className="points-holder">
                    {SliderPoints}
                </div>
        </section>
    )
}