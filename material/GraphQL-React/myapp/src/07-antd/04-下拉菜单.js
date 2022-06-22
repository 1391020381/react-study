/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import { Layout, Menu ,Dropdown} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DownOutlined
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

    render() {
        const menu = (
            <Menu onClick={(value)=>{
                console.log(value)
            }}>
              <Menu.Item key="1">
                11111
              </Menu.Item>
              <Menu.Item icon={<DownOutlined  />} disabled key="2">
               22222
              </Menu.Item>
              <Menu.Item disabled key="3">
               3333
              </Menu.Item>
              <Menu.Item danger key="4">444444</Menu.Item>
            </Menu>
          );
          
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

                        <Dropdown overlay={menu} trigger={['click']}>
                           <div>hover me</div>
                        </Dropdown>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App
