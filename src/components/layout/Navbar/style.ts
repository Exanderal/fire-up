import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

type ItemProps = {
  active: boolean;
};

export const NavbarWrapper = styled("nav")`
  background-color: ${(props) => props.theme.color.white};
`;

export const NavbarContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.sm} 0;
  @media only screen and (max-width: 1000px) {
    padding: ${(props) => `.5rem ${props.theme.padding.sm}`};
  }
`;
export const NavbarLogo = styled.li`
  margin-right: auto;
  @media only screen and (max-width: 600px) {
    img {
      width: 70%;
    }
  }
`;
export const NavbarList = styled("ul")`
  display: flex;
  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`;
export const NavbarLink = styled(Link)`
  display: flex;
  :not(:first-child) {
    margin-left: 1rem;
  }
`;
export const NavbarItem = styled("li")<ItemProps>`
  display: flex;
  position: relative;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 400;
  text-transform: uppercase;
  padding: 0 ${(props) => props.theme.padding.sm};
  p {
    z-index: 100;
    transition: all 0.2s;
    color: ${(props) => (props.active ? "white" : "black")};
  }

  :hover {
    cursor: pointer;
    p {
      color: white;
    }
    ::before {
      width: 100%;
    }
  }
  ::before {
    left: 0;
    top: -25%;
    display: block;
    position: absolute;
    content: "";
    width: ${(props) => (props.active ? "100%" : "0")};
    transition: all 0.2s;
    height: 150%;
    background-color: ${(props) => props.theme.color.primary};
    transform-origin: center;
  }
  ::after {
    position: absolute;
    width: 100%;
    height: 138%;
    content: "";
    background-color: rgba(255, 255, 255, 0.4);
    left: 0;
    top: -19%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
