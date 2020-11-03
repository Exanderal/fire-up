import React, { FC } from "react";
import { BoxWrapper, BoxIcon, BoxTitle } from "./style";

type Props = {
  icon: string;
  title: string;
  color: string;
};

const HeaderBox: FC<Props> = ({ icon, title, color }) => {
  return (
    <BoxWrapper>
      <BoxIcon src={icon} color={color} />
      <BoxTitle color={color}>{title}</BoxTitle>
    </BoxWrapper>
  );
};

export default HeaderBox;
