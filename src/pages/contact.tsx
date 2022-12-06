import { Header } from "@/components/organism/Header/Header";
import Footer from "@/components/organism/Footer/Footer";
import ContactForm from "@/components/organism/ContactForm/ContactForm";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import { useTranslation } from "react-i18next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [COMMON_TNS])),
      // Will be passed to the page component as props
    },
  };
};

const Contactpage: NextPage = () => {
  return (
    <div>
      {/* <div className={styles.imageWrapper}>
        <Image
          src="/assets/blurred-ellipses--top.svg"
          alt="top"
          layout="fill"
          className="w-screen "
        />
      </div> */}

      <Head>
        <title>ZigZag-Contact</title>
        <meta name="description" content="ZigZag Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};

export default Contactpage;
