import styled from "styled-components";

type ImageProps = {
  image: string;
};

export const ImageBackground = styled.div<ImageProps>`
  width: 100%;
  display: flex;
  min-height: 75vh;
  background: url(${(props) => props.image});
  background-position: center bottom;
  background-size: cover;
`;
