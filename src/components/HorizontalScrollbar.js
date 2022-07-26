import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


let HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Splide
      options={{
        perPage: 1,
        arrows: false,
        pagination: false,
        drag: "free",
        gap: "1.5rem",
        autoWidth: true,
      }}
    >
      {data.map((item) => (
        <SplideSlide key={item.id || item}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </SplideSlide>
      ))}
    </Splide>
  );
};
export default HorizontalScrollbar;
