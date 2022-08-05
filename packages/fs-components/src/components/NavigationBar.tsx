import { Path } from "../types";
import CenteredNavigationBar from "./navigation-bars/CenteredNavigationBar";
import isString from "../utils/isString";

type NavigationBarType = "centered";

interface Props {
    type?: NavigationBarType; 
    logo?: Path | JSX.Element;
    links: JSX.Element;
    _onMenuClick: () => void;
}

function NavigationBar({ type = "centered", logo, ...props }: Props) {
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