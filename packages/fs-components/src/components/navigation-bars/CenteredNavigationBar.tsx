import { PropsWithChildren } from "react";

interface Props {

}

function CenteredNavigationBar({ children }: PropsWithChildren<Props>) {
    return (
        <nav className="navbar navbar-centered">
            <div className="navbar-links">
               { children } 
            </div>
        </nav>
    )
}

export default CenteredNavigationBar;