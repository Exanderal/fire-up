import React, { FC } from "react";
import {
  BoxWrapper,
  BoxCaption,
  BoxContainer,
  BoxHeader,
  BoxImg,
} from "./style";

type BoxProps = {
  image: string;
  tabletImg?: string;
  phoneImg?: string;
  desc?: string;
  color: string;
  alt: string;
};

const GalleryBox: FC<BoxProps> = ({
  image,
  desc = "",
  color,
  alt,
  tabletImg = "",
  phoneImg = "",
}) => {
  const hasCaption = desc !== "" ? true : false;
  return (
    <BoxContainer>
      <BoxHeader color={color} />
      <BoxWrapper hasCaption={hasCaption}>
        {tabletImg !== "" ? (
          <picture>
            <source
              srcSet={image}
              media="only screen and (min-width: 1000px)"
            />
            <source
              srcSet={tabletImg}
              media="only screen and (max-width: 1000px) and (min-width: 600px)"
            />
            <BoxImg alt={alt} src={phoneImg} hasCaption={hasCaption} />
          </picture>
        ) : (
          <picture>
            <BoxImg alt={alt} src={image} hasCaption={hasCaption} />
          </picture>
        )}
        <BoxCaption color={color} hasCaption={hasCaption}>
          <p>{desc}</p>
        </BoxCaption>
      </BoxWrapper>
    </BoxContainer>
  );
};

export default GalleryBox;
