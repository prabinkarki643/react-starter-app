import React, { useState, useEffect } from "react";
import { Outlet} from "react-router-dom";
import {
  Layout,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { observer } from "mobx-react";
import { useTheme } from "styled-components";
import SidebarProfile from "../../components/common/sidebarprofile.component";
import SideBarMenu from "../../components/common/sidebarmenu.component";

const {  Sider, Content } = Layout;

function DashboardLayout(props) {
  const [state, setState] = useState({
    collapsed: false,
  });
  const theme = useTheme();
  const toggle = () => {
    setState({
      ...state,
      collapsed: !state.collapsed,
    });
  };
  const fetchInitialDashboardData = () => {
    //Do initial fetch here
  };
  useEffect(() => {
    fetchInitialDashboardData();
  }, []);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={state.collapsed}
        theme="light"
        width={250}
        style={{ padding: 10 }}
      >
        <div style={{ textAlign: "right" ,marginTop:20}}>
          {React.createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              style: { marginRight: 10,fontSize:20 },
              onClick: toggle,
              size:30
            }
          )}
          {/* <MdSort style={{rotate:"180"}}/> */}
          

        </div>
        <SidebarProfile
          avatarStyle={{
            width: state.collapsed ? 50 : 150,
            height: state.collapsed ? 50 : 150,
          }}
          hideText={state.collapsed}
          containerStyle={{ marginTop: 40 }}
        />

        <SideBarMenu collapsed={state.collapsed}/>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "96vh",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      <style jsx="true">{`
        #components-layout-demo-custom-trigger .trigger {
          padding: 0 24px;
          font-size: 20px;
          line-height: 64px;
          cursor: pointer;
          transition: color 0.3s;
        }

        #components-layout-demo-custom-trigger .trigger:hover {
          color: #1890ff;
        }

        #components-layout-demo-custom-trigger {
          height: 32px;
          margin: 16px;
          background: rgba(255, 255, 255, 0.3);
        }

        .logo {
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${theme.palette.primary.main};
          color: ${theme.palette.text.primary};
          text-align: center;
        }

        .site-layout .site-layout-background {
          background: #fff;
        }
        .site-layout-header {
          display: flex;
        }

        .ant-menu-item {
          width: 80% !important;
          border-radius: 10px;
          padding-left: 10px !important;
          color: ${theme.palette.grey[500]};
        }
        .ant-menu > .ant-menu-item:hover {
          color: ${theme.palette.primary.main}
        }
        .ant-menu > .ant-menu-item-selected,
        ant-menu-item-selected:hover {
          background: ${theme.palette.primary.main} !important;
          color: ${theme.palette.primary.contrastText};
        }

        .ant-menu > .ant-menu-item-selected:hover {
          background: ${theme.palette.primary.main} !important;
          color: ${theme.palette.primary.contrastText};
        }
        .ant-menu-item::after {
          border: none !important;
        }
      `}</style>
    </Layout>
  );
}

export default observer(DashboardLayout);

// .ant-menu > .ant-menu-item:hover,
// .ant-menu > .ant-menu-submenu:hover,
// .ant-menu > .ant-menu-item-active,
// .ant-menu> .ant-menu-submenu-active,
// .ant-menu > .ant-menu-item-open,
// .ant-menu> .ant-menu-submenu-open,
// .ant-menu > .ant-menu-item-selected,
// .ant-menu > .ant-menu-submenu-selected {
//   color: red;
//   border-bottom: 2px solid red;
// }
