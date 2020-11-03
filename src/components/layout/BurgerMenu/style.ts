import styled from "styled-components";
import { Link } from "react-router-dom";

type VisibleProps = {
  visible: boolean;
};

export const MenuOverlay = styled.div<VisibleProps>`
  display: flex;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  height: 100vh;
  width: 100vw;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 200;
`;
export const MenuList = styled.ul<VisibleProps>`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${(props) => `${props.theme.padding.md} ${props.theme.padding.lg}`};
  min-width: 15rem;
  transition-delay: 0.2s;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  .active {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.primary};
  }
`;
export const MenuLink = styled(Link)`
  color: ${(props) => props.theme.color.darkGrey};
  background-color: transparent;
  text-transform: uppercase;
`;
export const MenuIcon = styled.img`
  display: none;
  width: 3rem;
  align-self: center;
  @media (max-width: 900px) {
    display: block;
  }
`;
