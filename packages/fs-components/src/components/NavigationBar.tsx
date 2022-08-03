import { Path } from "../types";
import { PropsWithChildren } from "react";
import CenteredNavigationBar from "./navigation-bars/CenteredNavigationBar";

type NavigationBarType = "centered";

interface BaseProps {
    type?: NavigationBarType; 
    logo?: Path;
}

function NavigationBar({ type = "centered", ...props }: PropsWithChildren<BaseProps>) {
    let renderNavigationBar: JSX.Element;
    
    switch(type) {
        case "centered":
            renderNavigationBar = <CenteredNavigationBar { ...props } />;    
            break;
        default:
            renderNavigationBar = <CenteredNavigationBar { ...props } />;
            console.warn("Invalid navigation bar type provided.")
            break;
    }

    return renderNavigationBar;
}

export default NavigationBar;