import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Menu
} from "antd";
import { useTheme } from "styled-components";
import { IoPeopleOutline, IoGrid } from "react-icons/io5";

function SideBarMenu({collapsed}) {
  let navigate = useNavigate();
  let location = useLocation();
  const theme = useTheme();

  const onClickSideBarMenu = ({ key }) => {
    navigate(key);
  };
  return (
    <Menu
    theme="light"
    mode="inline"
    selectedKeys={[location.pathname || "/dashboard/app"]}
    defaultSelectedKeys={[location.pathname || "/dashboard/app"]}
    onClick={onClickSideBarMenu}
    style={{
      backgroundColor: theme.palette.primary.light,
      borderRadius: 15,
      marginTop: 60,
      padding: "40px 5px 40px 5px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Menu.Item key="/dashboard/app" icon={<IoGrid size={20} />}>
      Dashboard
    </Menu.Item>
    <Menu.Item
      key="/dashboard/tasks"
      icon={<i className="fa fa-folder-o" style={{ fontSize: 20 }} />}
    >
      Task
    </Menu.Item>
    <Menu.Item
      key="/dashboard/contacts"
      icon={<i className="fa fa-user-circle" style={{ fontSize: 20 }} />}
    >
      Contacts
    </Menu.Item>

    <Menu.Item
      key="/dashboard/clients"
      icon={<i className="fa fa-users" style={{ fontSize: 20 }} />}
    >
      Clients
    </Menu.Item>
    <Menu.Item
      key="/dashboard/employees"
      icon={<IoPeopleOutline size={30} />}
    >
      Employee
    </Menu.Item>
    <Menu.Item
      key="/dashboard/moderators"
      icon={<i className="fa fa-users" style={{ fontSize: 20 }} />}
    >
      Moderator
    </Menu.Item>
    <Menu.Item
      key="/dashboard/histories"
      icon={<i className="fa fa-file-text-o" style={{ fontSize: 20 }} />}
    >
      History
    </Menu.Item>
  </Menu>
  )
}

export default SideBarMenu