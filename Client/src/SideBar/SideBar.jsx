import { Button, Layout, theme } from "antd";
import './SideBar.css';
import Logo from '../Componets/Logo';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { MenuFoldOutlined } from '@ant-design/icons';
import MenuList from "../Componets/MenuList";
import { useState } from "react";
import ToggleThemeButton from "../Componets/ToggleThemeButton";
//import { Color } from "antd/es/color-picker";

const { Header, Sider } = Layout;


function App(){
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }
  const [darkTheme, setDarkTheme]= useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer},

  } = theme.useToken();
    return(
      <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null}
         theme={darkTheme ? 'dark' : 'light'} className="sidebar" >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
          <Layout>
            <Header style={{padding: 0, background: colorBgContainer }}>
            <Button type="text" className="toggle" onClick={()=> setCollapsed(!collapsed)} 
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}/>
            </Header>
          </Layout>
      </Layout>
       
    );

}
export default App;

