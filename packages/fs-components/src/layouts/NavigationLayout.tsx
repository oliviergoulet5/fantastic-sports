import { PropsWithChildren } from "react";

interface Props {
    navigationBar: JSX.Element;
}

function NavigationLayout({ navigationBar, children }: PropsWithChildren<Props>) {
    return (
        <>
            { navigationBar }
            <main>
                { children }
            </main>
        </>
    )
}

export default NavigationLayout;