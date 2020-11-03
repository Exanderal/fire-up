import React, { FC, useState } from "react";
import {
  AboutContainer,
  Box,
  GridWrapper,
  HiddenParagraph,
  TextBox,
  TextParagraph,
} from "./style";

const About: FC = () => {
  const [color, setColor] = useState("#7ec8ea");
  const [activeNumber, setActiveNumber] = useState(1);
  const changeBox = (color: string, num: number) => {
    setColor(color);
    setActiveNumber(num);
  };

  return (
    <AboutContainer maxWidth="md">
      <GridWrapper>
        {/* <Box1>Text Box</Box1> */}
        <Box
          gridArea="1 / 1 / 2 / 2"
          margin="0 -20px -20px 0"
          color="#7ec8ea"
          active={activeNumber === 1}
          index={1}
          onClick={() => {
            changeBox("#7ec8ea", 1);
          }}
        >
          <TextParagraph>Box Name 1</TextParagraph>
          <HiddenParagraph>1</HiddenParagraph>
        </Box>
        <Box
          gridArea="1 / 3 / 2 / 3"
          margin="0 0 -20px -20px"
          color="#c43434"
          index={2}
          onClick={() => {
            changeBox("#c43434", 2);
          }}
          active={activeNumber === 2}
        >
          <TextParagraph>Box Name 2</TextParagraph>
          <HiddenParagraph>2</HiddenParagraph>
        </Box>
        <TextBox color={color}>
          <h2>Text from box {activeNumber}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab
            deleniti nobis fugiat quas temporibus, laboriosam qui autem natus
            dicta, fuga minima dolorum dolorem. Tempora reprehenderit
            dignissimos earum soluta ratione rem iste asperiores! Perferendis
            veritatis earum corporis voluptas aliquid debitis eius dolorum
            blanditiis eaque iste, at velit omnis, ducimus rem. Autem enim
            obcaecati quos, a hic eos optio. Voluptas, cumque ipsum eaque sit
            earum similique eveniet, quam dolorem explicabo dolores deleniti
            quod, obcaecati vitae libero culpa repellendus. Nesciunt, autem
            amet!
          </p>
        </TextBox>
        <Box
          gridArea="3 / 1 / 3 / 2"
          margin="-20px -20px 0 0"
          color="#dfbb42"
          index={3}
          onClick={() => {
            changeBox("#dfbb42", 3);
          }}
          active={activeNumber === 3}
        >
          <TextParagraph>Box Name 3</TextParagraph>
          <HiddenParagraph>3</HiddenParagraph>
        </Box>
        <Box
          gridArea="3 / 3 / 3 / 3"
          margin="-20px 0 0 -20px"
          color="#508b61"
          index={4}
          onClick={() => {
            changeBox("#508b61", 4);
          }}
          active={activeNumber === 4}
        >
          <TextParagraph>Box Name 4</TextParagraph>
          <HiddenParagraph>4</HiddenParagraph>
        </Box>
      </GridWrapper>
    </AboutContainer>
  );
};

export default About;
