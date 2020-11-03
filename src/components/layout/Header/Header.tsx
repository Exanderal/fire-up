import React, { FC } from "react";
import HeaderItem from "../HeaderItem";

import { Carousel } from "./style";

import backgroundHeader from "../../../images/headerImage.png";
import backgroundHeader_2 from "../../../images/headerImage_2.png";
import backgroundHeader_3 from "../../../images/headerImage_3.png";

const Header: FC = () => {
  return (
    <Carousel dots>
      <HeaderItem
        image={backgroundHeader}
        text="Feel the power of Typography"
      />
      <HeaderItem image={backgroundHeader_2} text="Feel the power of RWD" />
      <HeaderItem
        image={backgroundHeader_3}
        text="Feel the power of UX Design"
      />
    </Carousel>
  );
};

export default Header;
