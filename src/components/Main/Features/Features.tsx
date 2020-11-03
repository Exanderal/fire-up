import React, { FC } from "react";

import FeatureBox from "../FeatureBox";
import FeatureList from "../FeatureList";

import { FeaturesContainer } from "./style";

import EiffelTower from "../../../images/eiffelTower.png";
import LibertyStatue from "../../../images/libertyStatue.png";

const Features: FC = () => {
  return (
    <FeaturesContainer maxWidth="md">
      <FeatureBox image={EiffelTower} leftSide />
      <FeatureBox image={LibertyStatue} />
      <FeatureList />
    </FeaturesContainer>
  );
};

export default Features;
