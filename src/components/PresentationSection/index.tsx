import { Button, Col, Container, Row } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const PresentationSection = () => {
  return (
    <>
      <Container className={styles.presentationContainer}>
        <Row>
          <Col
            md
            className="d-flex flex-column justify-content-center align-items-start"
          >
            {/* <p className={styles.subtitle}>ACESSO ILIMITADO</p> */}
            <p className={styles.title}>
              Tenha acesso aos melhores cursos dos melhores criadores!
            </p>
            <p className={styles.description}>
              Assine hoje e tenha acesso na hora aos melhores cursos dos
              melhores produtores.
            </p>
            <Link href="/register" className={styles.linkCta}>
              {" "}
              <Button outline className={styles.btnCta}>
                ACESSE AGORA{" "}
                <img
                  src="/buttonPlay.svg"
                  alt="buttonImg"
                  className={styles.btnImg}
                />
              </Button>
            </Link>
          </Col>
          <Col md>
            <img
              src="/homeNoAuth/imgPresentation.png"
              alt="imgPresentation"
              className={styles.imgPresentation}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center pt-5">
            <img
              src="/homeNoAuth/iconArrowDown.svg"
              alt="arrowDown"
              className={styles.arrowDown}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;
