import { CourseType } from "@/src/services/couseService";
import styles from "./styles.module.scss";
import { Button, Container, Row } from "reactstrap";
import SlideComponent from "../../common/SlideComponent";
import Link from "next/link";
interface props {
  newestCourses: CourseType[];
}

const SlideSection = ({ newestCourses }: props) => {
  return (
    <>
      <Container className="py-5">
        <Row className="text-center">
          <p className={styles.sectionTitle}>CURSOS JÁ DISPONÍVEIS</p>
        </Row>
        <Row className="d-flex justify-content-center">
          <SlideComponent course={newestCourses} />
        </Row>
        <div className="d-flex justify-content-center">
          <Link href="/register">
            <Button outline className={styles.slideSectionBtn}>
              Cadastre-se agora!
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default SlideSection;
