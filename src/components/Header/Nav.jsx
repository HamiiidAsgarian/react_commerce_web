import React from "react";
import "./Header.css";
import Logo from "../../resources/images/Logo/logo2.png"

export default function Header() {
    return (
        <header className="navS">               
            <div className="header-nav">
                <nav className="nav flexS">
                    <div className="nav-left flex menu">
                        <div className="flex block "><i className="icon-i-menu" /></div>
                    </div>
                    <div className="nav-midd flex ">
                        <img src={Logo} alt="Log" />
                    </div>
                    <div className="nav-right flex">
                        <div className="flex block"><i className="icon-i-search" /></div>
                        <div className="flex block profile"><i className="icon-i-profile" />
                            <div className="language-options profile_options">
                                {/* <i className="icon-facebook" /> */}
                                <p>  حساب کاربری </p>
                                <p>  ورود </p>
                            </div>
                        </div>
                        <div className="flex block rel"><i className="icon-i-hearth" /><p className="abs block">99</p></div>
                        <div className="flex block rel"><i className="icon-i-bag" /><p className="abs block">99</p></div>
                    </div>
                </nav>
            </div>
        </header >
    )
}