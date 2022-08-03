import { PropsWithChildren } from "react";

interface Props {

}

function CenteredNavigationBar({ children }: PropsWithChildren<Props>) {
    return (
        <nav className="navbar navbar-centered">
            <div className="navbar-left">

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