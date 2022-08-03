import React from "react";
import NavigationBar from "../../components/NavigationBar";
import "../../sass/style.scss";

export default {
    title: "Components/NavigationBar",
    component: NavigationBar
}

export const NavigationBarComponent = () => {
    return <NavigationBar type="centered">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Community</a>
        <a href="#">Donate</a>
    </NavigationBar>
};