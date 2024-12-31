import React, {useEffect} from "react";
import {Layout} from "antd";
import Logo from "./components/Logo/Logo";
import MenuList from "./components/MenuList/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton/ToggleThemeButton";
import "./style.css";
const {Sider} = Layout;
const SideBar = ({collapced, darkTheme, toggleTheme}) => {
  return (
    <Sider
      collapsed={collapced}
      trigger={null}
      theme={darkTheme ? "dark" : "light"}
      className='sidebar'
    >
      <Logo />
      <MenuList darkTheme={darkTheme} />
      <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </Sider>
  );
};

export default SideBar;
