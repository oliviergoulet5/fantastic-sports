import React, { cloneElement, ComponentProps, ReactElement, Component } from "react";
import { PropsWithChildren, useState } from "react";
import NavigationBar from "../components/NavigationBar";

// Do this: https://stackoverflow.com/questions/41881912/typing-a-react-component-that-clones-its-children-to-add-extra-props-in-typescri

type NavigationBarProps = ComponentProps<typeof NavigationBar>

interface Props {
    navigationBarProps: Omit<NavigationBarProps, "_onMenuClick">;
} 

function NavigationLayout({ navigationBarProps, children }: PropsWithChildren<Props>) {
    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

    const handleMenuClick = () => {
        setHamburgerMenuVisible(!hamburgerMenuVisible);
    }

    return (
        <>
            <NavigationBar _onMenuClick={ handleMenuClick } { ...navigationBarProps } />
            <main>
                { children }
            </main>
        </>
    )
}

export default NavigationLayout;