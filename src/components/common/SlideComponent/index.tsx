import { CourseType } from "@/src/services/couseService";
import {
  Splide,
  SplideSlide,
} from "../../../../node_modules/@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../SlideCard";

interface props {
  course: CourseType[];
}

const SlideComponent = ({ course }: props) => {
  let slideCount = 0;

  if (course.length > 4) {
    slideCount = 4;
  } else if (course) {
    slideCount = course.length;
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center py-5 justify-content-center">
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            perPage: slideCount,
            perMove: 1,
            width: "100%",
            pagination: false,
            arrows: course.length > 4 ? true : false,
            drag: course.length > 4 ? true : false,
            breakpoints: {
              1180: {
                perPage: slideCount >= 3 ? 3 : slideCount,
              },
              991: {
                perPage: slideCount >= 2 ? 2 : slideCount,
              },
              575: {
                perPage: 1,
              },
            },
          }}
        >
          {course?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;
