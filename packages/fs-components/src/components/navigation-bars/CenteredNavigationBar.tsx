import { PropsWithChildren } from "react";
import { FiMenu } from "react-icons/fi";

interface Props {
    logoRender: JSX.Element;
    links: JSX.Element;
    _onMenuClick: () => void;
}

function CenteredNavigationBar({ logoRender, links, _onMenuClick }: Props) {

    return (
        <nav className="navbar navbar-centered">
            <div className="navbar-left">
                { logoRender }
            </div>
            <div className="navbar-center navbar-links">
               { links } 
            </div>
            <div className="navbar-right">
                <FiMenu onClick={ _onMenuClick } className="navbar-menu-icon" size={26} />
            </div>
        </nav>
    )
}

export default CenteredNavigationBar;