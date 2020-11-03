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
  order: number;
};

const GalleryBox: FC<BoxProps> = ({
  image,
  desc = "",
  color,
  alt,
  tabletImg = "",
  phoneImg = "",
  order,
}) => {
  const hasCaption = desc !== "" ? true : false;
  return (
    <BoxContainer order={order}>
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
            <BoxImg
              alt={alt}
              src={phoneImg}
              hasCaption={hasCaption}
              loading="lazy"
            />
          </picture>
        ) : (
          <picture>
            <BoxImg
              alt={alt}
              src={image}
              hasCaption={hasCaption}
              loading="lazy"
            />
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
