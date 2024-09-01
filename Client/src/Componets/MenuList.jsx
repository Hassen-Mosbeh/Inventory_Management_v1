import {Menu} from 'antd';
import { HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined,
    BarsOutlined} from '@ant-design/icons';


const MenuList = () => {
  return (
    <Menu theme='dark' mode="inline" className='menu-bar'>
      <Menu.Item key="Home" icon={<HomeOutlined />}>
      Home
      </Menu.Item>
      <Menu.Item key="Activity" icon={<AppstoreOutlined />}>
      Activity
      </Menu.Item>
      <Menu.SubMenu Key="subtasks" icon={<BarsOutlined />} title="Tasks">
      <Menu.Item key="task-1">Task 1</Menu.Item>
      <Menu.Item key="task-2">Task 2</Menu.Item>
      <Menu.Item key="task-3">Task 3</Menu.Item>
      <Menu.SubMenu Key="subtasks" title="subtasks" > 
        <Menu.Item Key="subtask-1">SubTask 1</Menu.Item>
        <Menu.Item Key="subtask-2">Subtask 2</Menu.Item>
      </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="Progress" icon={<AreaChartOutlined />}>
      Progress
      </Menu.Item>
      <Menu.Item key="Payment" icon={<PayCircleOutlined />}>
      Payment
      </Menu.Item>
      <Menu.Item key="Setting" icon={<SettingOutlined />}>
      Setting
      </Menu.Item>
      
    </Menu>
  )
}

export default MenuList