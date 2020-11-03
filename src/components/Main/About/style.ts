import styled from "styled-components";
import { Container } from "@material-ui/core";
import pattern from "../../../images/Pattern.png";

type BoxProps = {
  gridArea: string;
  margin: string;
  color: string;
  active?: boolean;
  index: number;
};

type TextBoxProps = {
  color: string;
};

export const AboutContainer = styled(Container)`
  padding: ${(props) => `${props.theme.padding.hg} 0`};
  @media only screen and (max-width: 1000px) {
    padding: ${(props) =>
      `${props.theme.padding.hg} ${props.theme.padding.sm}`};
  }
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr 190px;
  grid-template-rows: 50px 1fr 50px;
  @media (max-width: 768px) {
    grid-template-columns: 210px 1fr 210px;
    grid-template-rows: 70px 1fr 70px;
  }
  @media (max-width: 480px) {
    grid-template-rows: 1fr 60px;
    grid-template-columns: repeat(3, 1fr 20px) 1fr;
  }
`;

export const TextBox = styled.div<TextBoxProps>`
  background: url(${pattern}) white;
  background-position: bottom;
  position: relative;
  padding: 1rem 2rem;
  grid-area: 2 / 2 / 3 / 3;
  z-index: 1;
  border: 1px solid ${(props) => props.color};
  h2 {
    color: ${(props) => props.color};
  }
  @media (max-width: 768px) {
    grid-area: 2 / 1 / 3 / 4;
    z-index: -1;
  }
  @media (max-width: 480px) {
    grid-area: 1 / 1 / 2 / -1;
  }
`;

export const Box = styled.div<BoxProps>`
  grid-area: ${(props) => props.gridArea};
  margin: ${(props) => props.margin};
  color: ${(props) => (props.active ? props.color : "white")};
  background-color: ${(props) => (props.active ? "white" : props.color)};
  border: ${(props) => (props.active ? `1px solid ${props.color}` : "none")};
  font-size: ${(props) => props.theme.fontSize.md};
  display: flex;
  align-items: center;
  z-index: ${(props) => (props.active ? 2 : 0)};
  justify-content: center;
  transition: all 0.2s;
  position: relative;
  text-transform: uppercase;

  ::after {
    display: ${(props) => (props.active ? "block" : "none")};
    transition: all 0.2s;
    position: absolute;
    top: ${(props) => (props.margin.split(" ")[0] !== "0" ? `-1px` : "")};
    right: ${(props) => (props.margin.split(" ")[1] !== "0" ? `-1px` : "")};
    bottom: ${(props) => (props.margin.split(" ")[2] !== "0" ? `-1px` : "")};
    left: ${(props) => (props.margin.split(" ")[3] !== "0" ? `-1px` : "")};
    z-index: 1;
    content: "";
    background-color: white;
    width: 19px;
    height: 19px;
    @media (max-width: 768px) {
      left: 0;
      right: 0;
      height: 5px;
      width: 100%;
      bottom: ${(props) => (props.margin.split(" ")[2] !== "0" ? `-3px` : "")};
      top: ${(props) => (props.margin.split(" ")[0] !== "0" ? `-3px` : "")};
    }
    @media (max-width: 480px) {
      top: -3px;
      bottom: 0;
      background-color: ${(props) => props.theme.color.backgroundGrey};
    }
  }
  :hover {
    cursor: pointer;
    color: ${(props) => props.color};
    background-color: white;
    border: ${(props) => `1px solid ${props.color}`};
    z-index: 2;
    ::after {
      display: block;
    }
    @media (max-width: 480px) {
      background-color: ${(props) => props.theme.color.backgroundGrey};
    }
  }
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 480px) {
    grid-area: ${(props) => (props.index === 1 ? "2 / 1 / 4 / 2" : "")};
    grid-area: ${(props) => (props.index === 2 ? "2 / 3 / 4 / 4" : "")};
    grid-area: ${(props) => (props.index === 3 ? "2 / 5 / 4 / 6" : "")};
    grid-area: ${(props) => (props.index === 4 ? "2 / 7 / 4 / 8" : "")};
    background-color: ${(props) =>
      props.active ? props.theme.color.backgroundGrey : props.color};
  }
`;
export const TextParagraph = styled.p`
  @media (max-width: 480px) {
    display: none;
  }
`;
export const HiddenParagraph = styled.p`
  @media (min-width: 480px) {
    display: none;
  }
`;
