import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = () => {
  return (
    <>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>Lorem ipsum dolor</p>
          <p className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ut
            repellat, consequatur quia rem sed quis officiis doloribus porro,
            similique quaerat eligendi, nobis dolore quae consectetur rerum
            asperiores et. Soluta.
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>Lorem ipsum dolor</p>
          <p className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ut
            repellat, consequatur quia rem sed quis officiis doloribus porro,
            similique quaerat eligendi, nobis dolore quae consectetur rerum
            asperiores et. Soluta.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>Lorem ipsum dolor</p>
          <p className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ut
            repellat, consequatur quia rem sed quis officiis doloribus porro,
            similique quaerat eligendi, nobis dolore quae consectetur rerum
            asperiores et. Soluta.
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>Lorem ipsum dolor</p>
          <p className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ut
            repellat, consequatur quia rem sed quis officiis doloribus porro,
            similique quaerat eligendi, nobis dolore quae consectetur rerum
            asperiores et. Soluta.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>Lorem ipsum dolor</p>
          <p className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ut
            repellat, consequatur quia rem sed quis officiis doloribus porro,
            similique quaerat eligendi, nobis dolore quae consectetur rerum
            asperiores et. Soluta.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>Lorem ipsum dolor</p>
          <p className={styles.cardContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ut
            repellat, consequatur quia rem sed quis officiis doloribus porro,
            similique quaerat eligendi, nobis dolore quae consectetur rerum
            asperiores et. Soluta.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CardsSection;
