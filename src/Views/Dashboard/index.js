import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './dashboard.css'

import {FaChevronRight} from 'react-icons/fa'
import {RiHome5Line} from 'react-icons/ri'
import {IoSettingsOutline} from 'react-icons/io5'
import DashboardLayout from '../../Components/dashboardLayout'

const { Header, Sider, Content } = Layout;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (<DashboardLayout>
   <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'96vh', padding:"25px 0px", margin:"20px", borderRadius:collapsed ? '25px' : "25px", backgroundColor:"#2a2690"}}>
        <div  onClick={ () => setCollapsed(!collapsed)} style={{backgroundColor:'white', width:'30px', height:"30px", borderRadius:'50px', position:'absolute', right:-15, top:50, boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", zIndex:5, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <FaChevronRight/>
          </div>
        <div className="logo" style={{minHeight:'50px'}} />
        <br/>
        <Menu
        style={{backgroundColor:"#2a2690", color:"white", border:'none'}}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <RiHome5Line style={{fontSize:'20px', marginRight:0, color:'white'}} />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <RiHome5Line style={{fontSize:'20px', marginRight:0, color:'white'}} />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <RiHome5Line style={{fontSize:'20px', marginRight:0, color:'white'}} />,
              label: 'nav 3',
            },
          ]}
        />
         <Menu
        style={{backgroundColor:"#2a2690", color:"white", border:'none', position:'absolute', bottom:50}}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '6',
              icon: <IoSettingsOutline style={{fontSize:'20px', marginRight:0, color:'white'}} />,
              label: 'Settings',
            },
           
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{height:'100vh', background:'#f8fafb'}}>
        {/* <Header
        
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          
        
        </Header> */}
        {/* <MenuUnfoldOutlined   /> */}
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </DashboardLayout>
  )
}

export default Dashboard