import React from 'react'
import {Layout, Icon, Menu, Badge} from 'antd';
import '../static/css/app.css'
import logo_img from "../static/img/logo.svg";

const {Sider, Content, Header, Footer} = Layout;
const SubMenu = Menu.SubMenu;
const SiderWidth = 210;

class App extends React.Component {
    state = {
        collapsed: false,
        layoutLeft: {marginLeft: SiderWidth}
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            layoutLeft: !this.state.collapsed ? {marginLeft: 80} : {marginLeft: SiderWidth}
        });
    };

    render() {
        return (
            <Layout>

                <Sider id='sider' trigger={null} width={SiderWidth}
                       collapsible collapsed={this.state.collapsed}>
                    <div id='trigger'>
                        <Icon onClick={this.toggle} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </div>
                    <div className="logo">
                        <img style={{height: '100%'}} src={logo_img} alt=""/>
                        Codeforyou
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span className="nav-text">仪表盘</span>
                        </Menu.Item>
                        <Menu.SubMenu key="2" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                            <Menu.Item key="21">Tom</Menu.Item>
                            <Menu.Item key="22">Bill</Menu.Item>
                            <Menu.Item key="23">Alex</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="3" title={<span><Icon type="bars"/><span>导航管理</span></span>}>
                            <Menu.Item key="31">Tom</Menu.Item>
                            <Menu.Item key="32">Bill</Menu.Item>
                            <Menu.Item key="33">Alex</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="4" title={<span><Icon type="profile"/><span>页面管理</span></span>}>
                            <Menu.Item key="41">Team 1</Menu.Item>
                            <Menu.Item key="42">Team 2</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="5" title={<span><Icon type="folder"/><span>文件管理</span></span>}>
                            <Menu.Item key="51">Team 1</Menu.Item>
                            <Menu.Item key="52">Team 2</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="6" title={<span><Icon type="team"/><span>运营管理</span></span>}>
                            <Menu.Item key="61">Team 1</Menu.Item>
                            <Menu.Item key="62">Team 2</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="7" title={<span><Icon type="message"/><span>消息通知</span></span>}>
                            <Menu.Item key="71">Team 1</Menu.Item>
                            <Menu.Item key="72">Team 2</Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="8" title={<span><Icon type="setting"/><span>系统管理</span></span>}>
                            <Menu.Item key="81">Team 1</Menu.Item>
                            <Menu.Item key="82">Team 2</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>

                <Header id='header'>
                    <Menu mode='horizontal' className='header-menu'>
                        <Menu.Item>
                            <a>
                                <Icon type="bell"/>
                                <Badge count={0}/>
                            </a>
                        </Menu.Item>
                        <SubMenu title={<span><Icon type="user"/>admin</span>}>
                            <Menu.Item>退出</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>

                <Layout style={this.state.layoutLeft}>
                    <Content id='content'>
                        {this.props.children}
                    </Content>
                    <Footer id='footer'>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>

            </Layout>
        );
    }
}

export default App