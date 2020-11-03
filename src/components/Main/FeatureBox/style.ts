import styled from "styled-components";

type BoxImageProps = {
  leftSide: boolean;
};
type IconProps = {
  leftSide: boolean;
};
export const BoxImage = styled.div<BoxImageProps>`
  position: relative;
  cursor: pointer;
  width: calc(30% - 1rem);
  transition: all 0.2s;
  transform: scale(1);
  @media only screen and (max-width: 1000px) {
    width: calc(50% - 0.5rem);
    margin-bottom: ${(props) => props.theme.padding.hg};
  }
  :hover::after {
    background-color: rgba(255, 255, 255, 1);
  }
  ::after {
    position: absolute;
    display: block;
    content: "";
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
    width: 100%;
    top: 0;
    transition: all 0.2s;
    bottom: 0;
    clip-path: ${(props) =>
      props.leftSide
        ? `polygon(100% 0, 0% 100%, 100% 100%)`
        : `polygon(0 0, 0% 100%, 100% 100%);`};
  }
  @media only screen and (max-width: 1000px) {
    ::after {
      clip-path: ${(props) =>
        props.leftSide
          ? `polygon(100% 0, 0 0, 100% 100%);`
          : `polygon(0 100%, 0 0, 100% 0);`};
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    ::after {
      clip-path: ${(props) =>
        props.leftSide
          ? `polygon(0 100%, 100% 100%, 0 63%);`
          : `polygon(0 37%, 100% 0, 0 0);`};
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const FeatureIcon = styled.img<IconProps>`
  position: absolute;
  bottom: 30px;
  left: ${(props) => (props.leftSide ? "" : "25px")};
  right: ${(props) => (props.leftSide ? "25px" : "")};
  z-index: 5;
  width: 2rem;
  height: 3rem;
  transform: ${(props) => (props.leftSide ? "rotateY(180deg)" : "")};
  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    top: 30px;
  }
  @media only screen and (max-width: 600px) {
    left: 25px;
    bottom: ${(props) => (props.leftSide ? "30px" : "")};
    top: ${(props) => (props.leftSide ? "" : "30px")};
  }
`;
