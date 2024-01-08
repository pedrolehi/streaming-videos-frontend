import Head from "next/head";
import HeaderNoAuth from "@/src/components/HomeNoAuth/HeaderNoAuth";
import PresentationSection from "@/src/components/PresentationSection";
import styles from "../styles/HomeNoAuth.module.scss";
import CardsSection from "@/src/components/HomeNoAuth/CardsSection";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Pedroflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Pedroflix" key="title" />
        <meta
          name="description"
          content="Assista aos melhores videos produzidos pelos melhores filmakers do mundo! (Personal studies project only)"
        />
      </Head>

      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth></HeaderNoAuth>
          <PresentationSection></PresentationSection>
        </div>
        <CardsSection />
        <br />
        <br />
      </main>
    </>
  );
};

export default HomeNoAuth;
