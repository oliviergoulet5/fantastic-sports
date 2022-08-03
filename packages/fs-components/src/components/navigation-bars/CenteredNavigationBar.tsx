import { Path } from "../../types";
import { PropsWithChildren } from "react";
import isString from "../../utils/isString";

interface Props {
    logoRender: JSX.Element;
}

function CenteredNavigationBar({ logoRender, children }: PropsWithChildren<Props>) {

    return (
        <nav className="navbar navbar-centered">
            <div className="navbar-left">
                { logoRender }
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