import {Menu} from "antd";
import React from "react";
import {
  HomeOutlined,
  PayCircleOutlined,
  BarsOutlined,
  AppstoreOutlined,
  SettingOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

import "./style.css";
import {useLocation, useNavigate} from "react-router-dom";
import {routes} from "../../../../Routes/routesData";

const MenuList = ({darkTheme}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode='inline'
      className='menu-bar'
      defaultSelectedKeys={[location.pathname]}
    >
      {routes.map((item) => {
        if (!item.hidden)
          return (
            <Menu.Item
              className='capitalize'
              onClick={() => navigate(item?.path)}
              key={item.path}
              icon={item.icon}
            >
              {item.name}
            </Menu.Item>
          );
      })}

      {/* <Menu.Item
        onClick={() => navigate("/activity")}
        key='activity'
        icon={<AppstoreOutlined />}
      >
        Activity
      </Menu.Item>
      <Menu.SubMenu key='subtasks' icon={<BarsOutlined />} title={"Tasks"}>
        <Menu.Item key='task-1'>Task 1</Menu.Item>
        <Menu.Item key='task-2'>Task 2</Menu.Item>
        <Menu.Item key='task-3'>Task 3</Menu.Item>
        <Menu.SubMenu
          key='subtasks_'
          icon={<BarsOutlined />}
          title={"Subtasks"}
        >
          <Menu.Item key='subtask-1'>Subtask 1</Menu.Item>
          <Menu.Item key='subtask-2'>Subtask 2</Menu.Item>
          <Menu.Item key='subtask-3'>Subtask 3</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key='progress' icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      <Menu.Item key='payment' icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key='settings' icon={<SettingOutlined />}>
        Settings
      </Menu.Item> */}
      
    </Menu>
  );
};

export default MenuList;

/*
<Menu defaultSelectedKeys="home" theme={darkTheme ? 'dark' : "light"} mode="inline" className="menu-bar">
      <Menu.Item  key='home' icon={<HomeOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item key='activity' icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      <Menu.SubMenu key='subtasks' icon={<BarsOutlined />} title={"Tasks"}>
        <Menu.Item key='task-1'>Task 1</Menu.Item>
        <Menu.Item key='task-2'>Task 2</Menu.Item>
        <Menu.Item key='task-3'>Task 3</Menu.Item>
        <Menu.SubMenu key='subtasks_' icon={<BarsOutlined />} title={"Subtasks"}>
          <Menu.Item key='subtask-1'>Subtask 1</Menu.Item>
          <Menu.Item key='subtask-2'>Subtask 2</Menu.Item>
          <Menu.Item key='subtask-3'>Subtask 3</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key='progress' icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      <Menu.Item key='payment' icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key='settings' icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
    */
