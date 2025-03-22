import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import Sidebar from "./components/sidebar";
import AddObject from "./components/add-object";

const { Header, Content } = Layout;

const App: React.FC = () => {
  const localStorageCollapsed = localStorage.getItem("sidebarCollapsed");

  const [collapsed, setCollapsed] = useState(localStorageCollapsed === "true");

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", String(collapsed));
  }, [collapsed]);

  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <AddObject />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
