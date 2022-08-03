import { Path } from "../types";
import { PropsWithChildren } from "react";
import CenteredNavigationBar from "./navigation-bars/CenteredNavigationBar";
import isString from "../utils/isString";

type NavigationBarType = "centered";

interface BaseProps {
    type?: NavigationBarType; 
    logo?: Path | JSX.Element;
}

function NavigationBar({ type = "centered", logo, ...props }: PropsWithChildren<BaseProps>) {
    let renderNavigationBar: JSX.Element;
    
    const renderLogo = () => {
        // If path it is a path then render an image. Otherwise it is JSX.
        let render: JSX.Element;

        if (!logo) {
            render = <></>;
        } else if (isString(logo)) {
            render = <img src={logo as string} alt="Logo" className="navbar-logo" />;
        } else {
            render = logo as JSX.Element;
        }

        return render;
    }
    
    switch(type) {
        case "centered":
            renderNavigationBar = <CenteredNavigationBar logoRender={ renderLogo() } { ...props } />;    
            break;
        default:
            renderNavigationBar = <CenteredNavigationBar logoRender={ renderLogo() } { ...props } />;
            console.warn("Invalid navigation bar type provided.")
            break;
    }

    return renderNavigationBar;
}

export default NavigationBar;