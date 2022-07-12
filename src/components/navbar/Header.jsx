import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("login");

  const handleClick = (e) => {
    setCurrent(e.key);
    console.log(e.key);
  };
  return (
    <div>
      <Menu mode="horizontal" selectedKeys={[current]} onClick={handleClick}>
        <Item key="home" icon={<HomeOutlined />}>
          <NavLink to="/home">Home</NavLink>
        </Item>
        <SubMenu
          key="SubMenu"
          title="Navigation Two - Submenu"
          icon={<SettingOutlined />}
        >
          <Item key="user" icon={<AppstoreOutlined />}>
            Navigation Two
          </Item>
        </SubMenu>
        <Item
          key="register"
          icon={<UserAddOutlined />}
          style={{ marginLeft: "55%" }}
        >
          <NavLink to="/login">Register</NavLink>
        </Item>
        <Item
          key="login"
          icon={<Icon icon="heroicons-outline:login" />}
          className="float-end"
        >
          <NavLink to="/login">Login</NavLink>
        </Item>
      </Menu>
    </div>
  );
};

export default Header;
