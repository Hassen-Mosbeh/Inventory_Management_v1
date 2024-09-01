import { Layout } from "antd";
import './SideBar.css';
import Logo from '../Componets/Logo';
import MenuList from "../Componets/MenuList";

const { Header, Sider } = Layout;

function App(){
    return(
      <Layout>
        <Sider className="sidebar">
          <Logo />
          <MenuList/>
        </Sider>
      </Layout>
       
    );

}
export default App;

