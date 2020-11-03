import React, { FC } from "react";

import {
  HiddenIndex,
  ItemDescription,
  ItemIndex,
  ListHeading,
  ListIcon,
  ListItem,
  ListWrapper,
  OrderedList,
} from "./style";

import Icon from "../../../images/ListIcon.png";

const FeatureList: FC = () => {
  const generateList = () => {
    const list = [];
    for (let i = 1; i <= 6; i++) {
      const randNum = Math.random();
      list.push(
        <ListItem key={`Feature-${randNum}`}>
          <ItemIndex>{i}</ItemIndex>
          <ItemDescription>
            <HiddenIndex>{i}. &nbsp;</HiddenIndex>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Incidunt veniam placeat facere porro
            alias, dolores assumenda.
          </ItemDescription>
        </ListItem>
      );
    }
    return list;
  };
  return (
    <ListWrapper>
      <ListHeading>
        <ListIcon src={Icon} alt="List Icon" />
        Title
      </ListHeading>
      <OrderedList>{generateList()}</OrderedList>
    </ListWrapper>
  );
};

export default FeatureList;
