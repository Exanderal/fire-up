import styled from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  position: relative;
  .slick-dots {
    bottom: 15px;
    li {
      button {
        ::before {
          color: ${(props) => props.theme.color.primary};
          opacity: 0.5;
        }
      }
    }
  }
  .slick-active {
    button {
      ::before {
        opacity: 1 !important;
      }
    }
  }
  .slick-next {
    right: 25px;
  }
  .slick-prev {
    left: 25px;
    z-index: 1;
  }
`;
