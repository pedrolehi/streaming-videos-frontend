import HeaderGeneric from "@/src/components/HeaderGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Pedroflix - Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Pedroflix" key="title" />
        <meta
          name="description"
          content="Assista aos melhores videos produzidos pelos melhores filmakers do mundo! (Personal studies project only)"
        />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero fazer login"
        ></HeaderGeneric>
      </main>
    </>
  );
};

export default Register;
