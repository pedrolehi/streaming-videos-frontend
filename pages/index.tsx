import Head from "next/head";
import HeaderNoAuth from "@/src/components/HomeNoAuth/HeaderNoAuth";
import PresentationSection from "@/src/components/PresentationSection";
import styles from "../styles/HomeNoAuth.module.scss";
import CardsSection from "@/src/components/HomeNoAuth/CardsSection";
import SlideSection from "@/src/components/HomeNoAuth/SlideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/services/couseService";
import { ReactNode, useEffect } from "react";
import Footer from "@/src/components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

const HomeNoAuth = ({ course }: IndexPageProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Pedroflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Pedroflix" key="title" />
        <meta
          name="description"
          content="Assista aos melhores videos produzidos pelos melhores filmakers do mundo! (Personal studies project only)"
        />
      </Head>

      <main>
        <div
          className={styles.sectionBackground}
          data-aos="fade-zoom-in"
          data-aos-duration="1600"
        >
          <HeaderNoAuth></HeaderNoAuth>
          <PresentationSection></PresentationSection>
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
          <SlideSection newestCourses={course} />
        </div>

        <Footer></Footer>
      </main>
    </>
  );
};

export default HomeNoAuth;
