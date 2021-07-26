import React from "react";
import Header from './Header';
import Footer from './Footer';

type Props = {
    children: JSX.Element | JSX.Element[],
};

export default function Layout({children}: Props) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}
