import React from "react";
import styles from '../styles/components/Content.module.scss';

type Props = {
    children? : JSX.Element | JSX.Element[] | string,
    className? : string,
    innerClassName? : string //inner className
};

export default function Content({children, className, innerClassName}: Props) {
    return (
        <div className={`${styles.section} ${className}`}>
            <div className={`${styles.wrap} ${innerClassName}`}>
            {children}
            </div>
        </div>
    )
}
