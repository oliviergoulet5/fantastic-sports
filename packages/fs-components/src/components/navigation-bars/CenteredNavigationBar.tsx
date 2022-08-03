import { Path } from "../../types";
import { PropsWithChildren } from "react";

interface Props {
    logo?: Path;
}

function CenteredNavigationBar({ logo, children }: PropsWithChildren<Props>) {
    return (
        <nav className="navbar navbar-centered">
            <div className="navbar-left">
                { logo && <p>Img</p> }
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