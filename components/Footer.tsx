import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/components/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrap}>
                <div className={styles.nav}>
                    <div className={styles.section}>
                        <div className={styles.title}>HOME</div>
                        <div className={styles.item}>Home</div>
                        <div className={styles.item}>Tech stack</div>
                        <div className={styles.item}>Feature</div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.title}>PROJECT</div>
                        <div className={styles.item}>SanLang</div>
                        <div className={styles.item}>Personal Portfolio</div>
                        <div className={styles.item}>TODO APP</div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.title}>ABOUT ME</div>
                        <div className={styles.item}>Profile</div>
                        <div className={styles.item}>Contact</div>
                        <div className={styles.item}>History</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.icons}>
                    <FontAwesomeIcon icon={faEnvelope} href="https://www.naver.com"/>
                    <FontAwesomeIcon icon={faGithub}/>
                    </div>
                    <div>(C) Hwang Sanho</div>
                </div>
            </div>
        </footer>
    );
}
