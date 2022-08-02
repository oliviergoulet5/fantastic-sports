import React from "react";
import NavigationBar from "../../components/NavigationBar";
import "../../sass/base/_index.scss"

export default {
    title: "Components/NavigationBar",
    component: NavigationBar
}

const pageLinks = [
    {
        text: "Home",
        slug: "/home"
    },
    {
        text: "About Us",
        slug: "/about"
    },
    {
        text: "Community",
        slug: "/community"
    },
    {
        text: "Donate",
        slug: "/donate"
    }
]

export const NavigationBarComponent = () => <NavigationBar links={ pageLinks } />