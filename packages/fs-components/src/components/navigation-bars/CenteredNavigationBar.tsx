import { Path } from "../../types";
import { PropsWithChildren } from "react";
import isString from "../../utils/isString";

interface Props {
    logo?: Path | JSX.Element;
}

function CenteredNavigationBar({ logo, children }: PropsWithChildren<Props>) {
    const renderLogo = () => {
        // If path it is a path then render an image. Otherwise it is JSX.
        let render: JSX.Element;

        if (!logo) {
            render = <></>;
        } else if (isString(logo)) {
            render = <img src={logo as string} alt="Logo" />;
        } else {
            render = logo as JSX.Element;
        }

        return render;
    }

    return (
        <nav className="navbar navbar-centered">
            <div className="navbar-left">
                { logo && renderLogo() }
            </div>
            <div className="navbar-center navbar-links">
               { children } 
            </div>
            <div className="navbar-right">
            
            </div>
        </nav>
    )
}

export default CenteredNavigationBar;