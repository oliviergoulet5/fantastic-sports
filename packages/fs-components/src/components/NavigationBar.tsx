import { PropsWithChildren } from "react";

interface PageLink {
    text: string;
    slug: string;
}

interface Props {}

function NavigationBar({ children }: PropsWithChildren<Props>) {

    return (
        <nav className="navbar">
           <div>
            </div>
            <div className="navbar-links">
                { children }
            </div>
        </nav>
    )
}

export default NavigationBar;