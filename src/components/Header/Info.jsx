import React from "react";
import "./Header.css";
import Fa from "./../../resources/images/flags/ir.jpg"
import En from "./../../resources/images/flags/en.jpg"

export default function Header() {
    return (
            <div className="header-info">
                <div className="info flexS">
                    <div className="info-left flex">
                        <div className="flex block phone"><i className="icon-phone" /><p>+98 936 9790 967</p></div>
                        <div className="flex block mail"><i className="icon-mail" /><p>hamiiid.asgarian@Gmail.com</p></div>
                    </div>
                    <div className="info-midd flex">
                        <p>خرید تابستانی با <span style={{ color: "red" }}>50%</span>  تخفیف! <a href="*"> همین حالا</a> خرید کنید !</p>
                    </div>
                    <div className="info-right flex">
                        <div className="flex block login">
                            <div className="login-options flexSa">
                                <i className="icon-facebook" />
                                <i className="icon-twitter" />
                            </div>
                            <i className="icon-down-open" /><p>وارد شوید</p></div>
                        <div className="flex block language">
                            <div className="language-options ">
                                <p> <img src={Fa} alt="" /> فارسی</p>
                                <p> <img src={En} alt="" /> English</p>
                            </div>
                            <i className="icon-down-open" /><p>زبان </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}