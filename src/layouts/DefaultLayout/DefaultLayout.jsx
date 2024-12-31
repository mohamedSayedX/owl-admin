import React, {useEffect, useState} from "react";
import "./style.css";
import {FlagIcon, Notification, NotificationIcon} from "../../assets/svgicons";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Layout, Button, theme} from "antd";
import Logo from "../Sidebar/components/Logo/Logo";
import MenuList from "../Sidebar/components/MenuList/MenuList";
import ToggleThemeButton from "../Sidebar/components/ToggleThemeButton/ToggleThemeButton";
import SideBar from "../Sidebar/SideBar";
import LoginPage from "../../pages/LoginPage/LoginPage";

const {Header, Sider, Content} = Layout;

const DefaultLayout = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapced, setCollapced] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const location = useLocation();

  return (
    <div>
      {location.pathname == "/login" ? (
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      ) : (
        <Layout>
          <SideBar
            collapced={collapced}
            toggleTheme={toggleTheme}
            darkTheme={darkTheme}
          />
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <Button
                type='text'
                className='toggle'
                onClick={() => setCollapced(!collapced)}
                icon={collapced ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
            </Header>
            <Content className='app-content rounded-lg'>
              {children}
            </Content>
          </Layout>
        </Layout>
      )}

      {/**/}
    </div>
  );
};

export default DefaultLayout;
