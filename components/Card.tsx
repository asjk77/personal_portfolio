import React from "react";
import styles from '../styles/components/Card.module.scss';

type CardProps = {
    className? : string,
    url? : string,
    title? : string,
    description?: string,

}

export function Card({className, url, title = "title", description ="desc"}: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
}

type CardContainerProps = {
    children?: JSX.Element | JSX.Element[] | string;
    className: string 
}

export function CardContainer({children, className}: CardContainerProps) {
    return (
        <div className={className}>
        {children}
        </div>
    )
}

