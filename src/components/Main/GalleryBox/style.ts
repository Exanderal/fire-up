import styled from "styled-components";

type CaptionProps = {
  color: string;
  hasCaption?: boolean;
};

type HeaderProps = {
  color: string;
};

type WrapperProps = {
  hasCaption: boolean;
};

export const BoxContainer = styled.figure`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.white};
  margin: 0;
  padding: 0;
`;

export const BoxWrapper = styled.div<WrapperProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: ${(props) => (props.hasCaption ? "space-evenly" : "center")};
  @media only screen and (max-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    picture {
      margin-left: ${(props) => (props.hasCaption ? "0" : "2.5rem")};
    }
  }
  @media only screen and (max-width: 600px) {
    picture {
      margin-left: 0;
    }
  }
`;

export const BoxHeader = styled.div<HeaderProps>`
  background-color: ${(props) => props.color};
  height: 1rem;
  width: 100%;
`;
export const BoxImg = styled.img<WrapperProps>`
  padding: 1rem;
  max-width: 100%;
  height: auto;
  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    padding: ${(props) => (props.hasCaption ? "1rem" : "0")};
  }
`;

export const BoxCaption = styled.figcaption<CaptionProps>`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.md};
  padding: ${(props) => (props.hasCaption ? "0 2rem 2rem" : 0)};
  text-align: center;
  word-wrap: break-word;
  color: ${(props) => props.color};
  @media only screen and (max-width: 1000px) {
    padding: 5px 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    display: inline;
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 5px 0em;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 5px 0 0 rgba(255, 255, 255, 0.4),
      -5px 0 0 rgba(255, 255, 255, 0.4);
    box-decoration-break: clone;
    font-weight: 400;
  }
`;
