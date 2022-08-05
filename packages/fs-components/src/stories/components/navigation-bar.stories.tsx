import React from "react";
import NavigationBar from "../../components/NavigationBar";
import "../../sass/style.scss";

export default {
    title: "Components/NavigationBar",
    component: NavigationBar
}

export const CenteredNavigationBar = () => {
    const navlinks = <>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Community</a>
        <a href="#">Donate</a>
    
    </>
    return (
        <NavigationBar type="centered" logo="/generic-logo.svg" links={ navlinks } _onMenuClick={ () => undefined } />
    )
};