import React, { FC } from "react";

import { BoxImage, Image, FeatureIcon } from "./style";

import featureIconLeft from "../../../images/featureIconLeft.png";

type Props = {
  image: string;
  link?: string;
  leftSide?: boolean;
};

const FeatureBox: FC<Props> = ({ image, leftSide = false }) => {
  return (
    <BoxImage leftSide={leftSide}>
      <Image src={image} />;
      <FeatureIcon src={featureIconLeft} leftSide={leftSide} />
    </BoxImage>
  );
};

export default FeatureBox;
