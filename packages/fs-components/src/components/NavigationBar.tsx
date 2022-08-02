import { PropsWithChildren } from "react";
import CenteredNavigationBar from "./navigation-bars/CenteredNavigationBar";

type NavigationBarType = "centered";

interface Props {
    type?: NavigationBarType; 
}

function NavigationBar({ type = "centered", ...props }: PropsWithChildren<Props>) {
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