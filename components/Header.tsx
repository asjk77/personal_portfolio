import React, { useRef } from "react";
import Link from "next/link";
import styles from "../styles/components/Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  var navElementRef = useRef<HTMLDivElement>(null);

  /*
   * 네비게이션 바를 토글 합니다.
   * ! media Query 인해 NavBar를 비활성화 할시
   * 비활성화 상태에서 mobile => desktop 로 이동시 문제 발생
   */
  const ToggleNavElement = function (): void {
    var nav_element = navElementRef.current;

    if (!nav_element) return;

    const _display = nav_element.style.display;

    if (_display == "" || _display == "none") {
      nav_element.style.setProperty("display", "flex");
    } else {
      nav_element.style.setProperty("display", "none");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <FontAwesomeIcon icon={faCopy} className={styles.icon} />
          <div className={styles.name}>Personal Portfolio</div>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.bar}
            onClick={ToggleNavElement}
          />
        </div>
        <div className={styles.nav} ref={navElementRef}>
            {/* TODO Navigation Bar 수정 필요*/}
          <div className={styles.item}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.item}>
            <Link href="/">Projects</Link>
          </div>
          <div className={styles.item}>
            <Link href="/">AboutMe</Link>
          </div>
        </div>
        <div className={styles.test}></div>
      </div>
    </header>
  );
}
