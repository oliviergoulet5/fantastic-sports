import { PropsWithChildren } from "react";
import { FiMenu } from "react-icons/fi";

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
                <FiMenu className="navbar-menu-icon" size={26} />
            </div>
        </nav>
    )
}

export default CenteredNavigationBar;