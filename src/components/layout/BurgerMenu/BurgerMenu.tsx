import React, { FC, useState } from "react";
import BurgerIcon from "../../../images/menu.svg";
import { MenuIcon, MenuLink, MenuList, MenuOverlay } from "./style";

type MenuProps = {
  active: string;
};

const BurgerMenu: FC<MenuProps> = ({ active }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <MenuIcon
        onClick={() => {
          setVisible(true);
        }}
        src={BurgerIcon}
      ></MenuIcon>
      <MenuOverlay
        visible={visible}
        onClick={() => {
          setVisible(false);
        }}
      >
        <MenuList visible={visible}>
          <MenuLink to="/" className={active === "main" ? "active" : ""}>
            <li>Home</li>
          </MenuLink>
          <MenuLink to="/" className={active === "menu2" ? "active" : ""}>
            <li>Menu 2</li>
          </MenuLink>
          <MenuLink to="/" className={active === "menu3" ? "active" : ""}>
            <li>Menu 3</li>
          </MenuLink>
          <MenuLink
            to="/weather"
            className={active === "weather" ? "active" : ""}
          >
            <li>Weather</li>
          </MenuLink>
        </MenuList>
      </MenuOverlay>
    </>
  );
};

export default BurgerMenu;
