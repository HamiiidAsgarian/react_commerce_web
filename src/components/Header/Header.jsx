import React from "react";
import "./Header.css";

import Nav from "./Nav"
import Info from "./Info"

export default function Header() {
    return (
        <header>
            <Info />
            <Nav />
        </header >
    )
}