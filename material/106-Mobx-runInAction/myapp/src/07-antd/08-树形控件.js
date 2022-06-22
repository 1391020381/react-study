/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import { Layout, Menu,Tree } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './css/03-layout.css'
const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
        //   disabled: true,
          children: [
            {
              title: 'leaf111',
              key: '0-0-0-0',
            //   disableCheckbox: true,
            },
            {
              title: 'leaf222',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ title: <span style={{ color: 'red' }}>sss111</span>, key: '0-0-1-0' },
          { title: <span style={{ color: 'red' }}>sss222</span>, key: '0-0-1-1' }
        ],
        },
      ],
    },
  ];

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
              {/* Reac.createElement("div") */}
              {/* <div></div> */}
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
               <Tree
      checkable
    //   defaultExpandedKeys={['0-0-0', '0-0-1']}
    //   defaultSelectedKeys={['0-0-0', '0-0-1']}
    //   defaultCheckedKeys={['0-0-0', '0-0-1']}
    //   onSelect={onSelect}
      onCheck={(value)=>{
        console.log(value)
      }}
      treeData={this.treeData}
    />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App
