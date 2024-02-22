import HeaderGeneric from "@/src/components/HeaderGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { useEffect, useState } from "react";
import Script from "next/script";
import Footer from "@/src/components/common/Footer";

type InputType = "text" | "date";

const Register = () => {
  const [maxDate, setMaxDate] = useState("");

  const [inputType, setInputType] = useState<InputType>("text");

  const handleFocusType = () => {
    setInputType("date");
  };
  const handleBlurType = () => {
    setInputType("text");
  };

  const calculateMaxDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 13);
    const maxDateString = today.toISOString().split("T")[0];
    setMaxDate(maxDateString);
  };

  useEffect(() => {
    calculateMaxDate();
  }, []);

  return (
    <>
      <Head>
        <title>Pedroflix - Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Pedroflix" key="title" />
      </Head>
      <Script src="https://jsuites.net/v4/jsuites.js"></Script>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero fazer login"
        ></HeaderGeneric>
        <Container className="py-5">
          <p className={styles.formTitle}>
            <strong>Olá, seja bem vindo à Pedroflix!</strong>
          </p>
          <div className="col-lg-5 mx-auto py-5">
            <div className={styles.formContainer}>
              <p className="text-center pb-4">
                <strong>Crie sua conta</strong>
              </p>
              <Form className={styles.form}>
                <FormGroup floating>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Qual é o seu nome?"
                    required
                    maxLength={25}
                    className={styles.inputName}
                  ></Input>
                  <Label for="firstName" className={styles.Label}>
                    Nome
                  </Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Qual é o seu sobrenome?"
                    required
                    maxLength={25}
                    className={styles.inputName}
                  ></Input>
                  <Label for="lastName" className={styles.Label}>
                    Sobrenome
                  </Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(XX) XXXXX-XXXX"
                    data-mask="+55 (00) 00000-0000"
                    required
                    maxLength={25}
                    className={styles.input}
                  ></Input>
                  <Label for="phone" className={styles.Label}>
                    Telefone
                  </Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    required
                    className={styles.input}
                  ></Input>
                  <Label for="email" className={styles.Label}>
                    e-mail
                  </Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="birth"
                    name="birth"
                    min="1900-01-01"
                    type={inputType}
                    onFocus={handleFocusType}
                    onBlur={handleBlurType}
                    placeholder="Data de nascimento"
                    max={maxDate}
                    required
                    className={styles.input}
                  ></Input>
                  <Label for="birth" className={styles.Label}>
                    Data de Nascimento
                  </Label>
                </FormGroup>
                <FormGroup floating>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="mínimo 8 caracteres"
                    required
                    minLength={6}
                    className={styles.input}
                  ></Input>
                  <Label for="password" className={styles.Label}>
                    Senha
                  </Label>
                </FormGroup>
                <FormGroup floating className={styles.fixMargin}>
                  <Input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="confirme sua senha."
                    required
                    minLength={6}
                    className={styles.input}
                  ></Input>
                  <Label for="passwordConfirm" className={styles.Label}>
                    Confirmar senha
                  </Label>
                </FormGroup>
                <Button type="submit" outline className={styles.formBtn}>
                  Cadastrar
                </Button>
              </Form>
            </div>
          </div>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Register;
