import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Content from "../components/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../components/Card";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Content className={styles.section_main} innerClassName={styles.wrap}>
        <div className={styles.text1}>안녕하세요</div>
        <div className={styles.title}>저의 이름은 황산호 입니다.</div>
        <div className={styles.text2}>저는 SoftwareDevloper 입니다.</div>
        <div className={styles.arrows}>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </Content>
      <Content className={styles.section_common}>
        <div className={styles.title}>할수 있는일</div>
        <div className={styles.card_container}>
          <Card
            title="크로스 플래폼 c++ 개발"
            description="CMake/Boost를 이용한 C++ 라이브러리를 개발 할수 있습니다."
          />
          <Card
            title="Web 개발"
            description="React 를 이용하여 멋진 웹 개발을 할 수 있습니다."
          />
          <Card
            title="ShellScript작성"
            description="ShellScript를 작성하여 devops 를 구성할 수 있습니다."
          />
        </div>
      </Content>

      <Content className={styles.section_common}>
        <div className={styles.title}>Technology Stack</div>
        <div className={styles.base_text}>
          WEB: TYPESCRIPT/JAVASCRIPT, SCSS, CSS, HTML
        </div>
        <div className={styles.base_text}>Server: Node, MONGODB, AWS </div>
        <div className={styles.base_text}>Game: C/C++, cmake, SDL, opengl</div>
        <div className={styles.base_text}>ETC: ShellScript, GIT</div>
      </Content>

      <Content className={`${styles.section_common} ${styles.section_feature}`}>
        <div className={styles.title}>Feature</div>
        <div className={styles.base_text}> 항상 새로운 기술에 민감합니다.</div>
        <div className={styles.base_text}>
          자신이 배운 기술들을 정리하여 문서화 합니다.
        </div>
        <div className={styles.base_text}>
          전문적인 디자이너는 아니지만 그래도 나쁘지 않은 디자인 성능을 가지고
          있습니다.
        </div>
      </Content>
    </Layout>
  );
}
