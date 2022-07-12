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

const Header = () => {
  const [current, setCurrent] = useState("login");

  const handleClick = (e) => {
    setCurrent(e.key);
    console.log(e.key);
  };
  return (
    <div>
      <Menu mode="horizontal" selectedKeys={[current]} onClick={handleClick}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.SubMenu
          key="SubMenu"
          title="Navigation Two - Submenu"
          icon={<SettingOutlined />}
        >
          <Menu.Item key="user" icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          key="register"
          icon={<UserAddOutlined />}
          style={{ marginLeft: "55%" }}
        >
          Register
        </Menu.Item>
        <Menu.Item
          key="login"
          icon={<Icon icon="heroicons-outline:login" />}
          className="float-end"
        >
          Login
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
