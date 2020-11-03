import React, { FC } from "react";

import GalleryBox from "../GalleryBox";

import { GalleryContainer } from "./style";

import figure_1 from "../../../images/figure_1.png";
import figure_2 from "../../../images/figure_2.png";
import figure_3 from "../../../images/figure_3.png";
import figure_4 from "../../../images/figure_4.png";
import figureTablet_1 from "../../../images/figure_tablet_1.png";
import figureTablet_2 from "../../../images/figure_tablet_2.png";
import figurePhone_1 from "../../../images/figure_phone_1.png";
import figurePhone_2 from "../../../images/figure_phone_2.png";
import figurePhone_3 from "../../../images/figure_phone_3.png";
import figurePhone_4 from "../../../images/figure_phone_4.png";

const Gallery: FC = () => {
  return (
    <GalleryContainer maxWidth="md">
      <GalleryBox
        image={figure_1}
        tabletImg={figureTablet_1}
        phoneImg={figurePhone_1}
        alt="img"
        color="#8393ca"
        order={1}
      />
      <GalleryBox
        image={figure_2}
        tabletImg={figureTablet_2}
        phoneImg={figurePhone_2}
        alt="img"
        color="#b9a497"
        order={3}
      />
      <GalleryBox
        image={figure_3}
        tabletImg={figure_3}
        phoneImg={figurePhone_3}
        alt="img"
        desc="Box caption"
        color="#a3d49c"
        order={2}
      />
      <GalleryBox
        image={figure_4}
        tabletImg={figure_4}
        phoneImg={figurePhone_4}
        alt="img"
        desc="Box caption"
        color="#e5b6e7"
        order={4}
      />
    </GalleryContainer>
  );
};

// const GalleryBoxes = styled.div`
/* @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  } */
// `;

export default Gallery;
