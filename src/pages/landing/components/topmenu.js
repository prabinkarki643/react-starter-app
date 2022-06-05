import React from "react";
import { Menu } from "antd";

function TopMenu() {
  return (
    <Menu mode="horizontal" >
      <Menu.Item key="home"><a className="topMenuItem" href="#home">Home</a></Menu.Item>
      <Menu.Item key="about" ><a className="topMenuItem" href="#about">About</a></Menu.Item>
      <Menu.Item key="pricing"><a className="topMenuItem" href="#pricing">Pricing</a></Menu.Item>
      <Menu.Item key="services"><a className="topMenuItem" href="#services">Services</a></Menu.Item>
      <style jsx="true">{`
        .ant-menu {
          background-color: transparent;
          border: none !important;
        }
        .ant-menu-item {
          color: white !important;
          padding: 0px;
          height: 50px;
        }
        .ant-menu > .ant-menu-item:hover {
          color: white !important;
        }
        .ant-menu > .ant-menu-item:hover:after {
          color: white !important;
          border-bottom: 2px solid white !important;
        }
        .ant-menu > .ant-menu-item-selected,
        ant-menu-item-selected:hover {
          color: white !important;
        }
        .ant-menu-item-selected::after {
          border-bottom: 2px solid white !important;
        }
        .topMenuItem{
          color:white !important;
        }
      `}</style>
    </Menu>
  );
}

export default TopMenu;
