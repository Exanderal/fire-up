import React, { FC } from "react";

import HeaderBox from "../HeaderBox";

import Icon1 from "../../../images/headerIcon_1.png";
import Icon2 from "../../../images/headerIcon_2.png";
import Icon3 from "../../../images/headerIcon_3.png";

import {
  BackgroundImage,
  BoxWrapper,
  HeaderContainer,
  HeaderHeading,
} from "./style";

type ItemProps = {
  image: string;
  text: string;
};

const HeaderItem: FC<ItemProps> = ({ image, text }) => {
  return (
    <BackgroundImage image={image}>
      <HeaderContainer maxWidth="md">
        <HeaderHeading>{text}</HeaderHeading>
        <BoxWrapper>
          <HeaderBox title="Typography" icon={Icon1} color="#c43434" />
          <HeaderBox
            title="Responsive Web Design"
            icon={Icon2}
            color="#1883b4"
          />
          <HeaderBox title="UX Design" icon={Icon3} color="#508b61" />
        </BoxWrapper>
      </HeaderContainer>
    </BackgroundImage>
  );
};

export default HeaderItem;
