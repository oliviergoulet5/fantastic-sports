interface PageLink {
    text: string;
    slug: string;
}

interface Props {
    links: PageLink[];
}

function NavigationBar({ links }: Props) {

    const renderLinks = links.map(link => 
        <span>{ link.text }</span>
    );

    return (
        <nav className="navbar">
           <div>
            </div>
            <div className="navbar-links">
                { renderLinks }
            </div>
        </nav>
    )
}

export default NavigationBar;