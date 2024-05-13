import React from "react";
import Navbar from "../../components/Navbar/NavbarElements";
import Home from "../../components/Home";
import Space from "../../components/Space";
import Favourite from "../../components/Favorite";
import Workspace from "../../components/Workspace";
import Community from "../../components/Community";
import SubNews from "../../components/SubNews";
import Footer from "../../components/Footer";



function LandingPage () {
    return(
        <div>
            <Navbar/>
            <Home/>
            <Space/>
            <Favourite/>
            <Workspace/>
            <Community/>
            <SubNews/>
            <Footer/>
        </div>
    )
}

export default LandingPage;