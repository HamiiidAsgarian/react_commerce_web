import Info from "../components/Header/Info";
import Nav from "../components/Header/Nav";

import React from "react"
import SlideShow from "../components/SlideShow/SlideShow";
import Catagories from "../components/Catagories/Catagories"
import Vitrin from "../components/Vitrin/Vitrin";
import Trending from "../components/Trending/Trending";
import OurProducts from "../components/OurProducts/OurProducts";
import Blog from '../components/blog/Blog';
import Fallow from "../components/Fallow/Fallow";
import Footer from "../components/Footer/Footer"
export default function Home() {
    return (
        <>
            <Info />
            <Nav />
            <SlideShow />
            <Catagories />
            <Vitrin />
            <Trending />
            <OurProducts />
            <Blog />
            <Fallow />
            <Footer/>
        </>
    )

}