import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <Container className={styles.nav}>
          <img
            src="/netflixLogo.svg"
            alt="logoNetflixEducationPurposesOnly"
            className={styles.imgLogoNav}
          />
          <div>
            <Link href="/login">
              <Button className={styles.navBtn} outline>
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button className={styles.navBtn} outline>
                Cadastre-se
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderNoAuth;
