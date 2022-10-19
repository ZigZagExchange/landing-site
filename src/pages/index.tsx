import { useRef } from "react";

import Benefits from "@/components/organism/Benefits/Benefits";
import FAQ from "@/components/organism/FAQ/FAQ";
import AOS from "aos";
import GetStarted from "@/components/organism/GetStarted/GetStarted";
import RoadMap from "@/components/organism/RoadMap/RoadMap";
import News from "@/components/organism/News/News";
import { Header } from "@/components/organism/Header/Header";
import Footer from "@/components/organism/Footer/Footer";
import Hello from "@/components/organism/Hello/Hello";
import {
  COMMON_TNS,
  GLOSSARY_TNS,
  PAGES_TNS,
  HELLO_TNS,
  FAQ_TNS,
  GETSTARTED_TNS,
  NEWS_TNS,
} from "@/lib/i18n/consts";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        GETSTARTED_TNS,
        HELLO_TNS,
        COMMON_TNS,
        HELLO_TNS,
        FAQ_TNS,
        NEWS_TNS,
      ])),
      // Will be passed to the page component as props
    },
  };
};

const Homepage: NextPage = () => {
  // const { t } = useTranslation([PAGES_TNS], { keyPrefix: "index" });
  // const { t: gt } = useTranslation([GLOSSARY_TNS]);
  const ref = useRef<null | HTMLDivElement>(null);
  const [rollup, setRollUp] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 2000,
      once: true,
      easing: "ease-out-cubic",
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const onRollupOpen = () => {
    setRollUp(!rollup);
  };

  const onClickRollupBtn = () => {
    setRollUp(true);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={
        "dark:bg-[#0B1120] bg-slate-50 bg-80% bg-no-repeat bg-top" +
        " " +
        styles.root
      }
    >
      <Head>
        <title>ZigZag</title>
        <meta name="description" content="ZigZag website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <Header />
      <main className="container mx-auto">
        <Hello onClickRollupBtn={onClickRollupBtn} />
        <Benefits />
        <GetStarted />
        <FAQ
          ref={ref}
          setRollupOpen={() => onRollupOpen()}
          rollupOpen={rollup}
        />
        <News />
        {/* <RoadMap /> */}
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;
