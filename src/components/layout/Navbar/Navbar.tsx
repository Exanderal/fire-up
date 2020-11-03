import React, { FC } from "react";
import fireUpLogo from "../../../images/fireUpLogo.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {
  NavbarContainer,
  NavbarItem,
  NavbarLink,
  NavbarList,
  NavbarLogo,
  NavbarWrapper,
} from "./style";

type NavbarProps = {
  active: string;
};

const Navbar: FC<NavbarProps> = ({ active }) => {
  return (
    <NavbarWrapper>
      <NavbarContainer maxWidth="md">
        <NavbarList>
          <NavbarLogo>
            <img src={fireUpLogo} alt="FireUp logo" />
          </NavbarLogo>
          <NavbarLink to="/">
            <NavbarItem active={active === "main"}>
              <p>Home</p>
            </NavbarItem>
          </NavbarLink>
          <NavbarLink to="/">
            <NavbarItem active={active === "menu2"}>
              <p>Menu 2</p>
            </NavbarItem>
          </NavbarLink>
          <NavbarLink to="/">
            <NavbarItem active={active === "menu3"}>
              <p>Menu 3</p>
            </NavbarItem>
          </NavbarLink>
          <NavbarLink to="/weather">
            <NavbarItem active={active === "weather"}>
              <p>Weather</p>
            </NavbarItem>
          </NavbarLink>
          <BurgerMenu active={active} />
        </NavbarList>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
