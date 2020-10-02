import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';
import { 
         FaTachometerAlt,
         FaRegLaughWink,
         FaBars,
         FaUserCog,
         FaFileInvoice
         } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import './Navbar.scss';




const NavbarConta = () =>{
    const [toggled, setToggled] = React.useState(false);
    const [rtl, setRtl] = React.useState(false);
    const [collapsed, setCollapsed] = React.useState(false);

    const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
    };

    const handleRtlChange = (checked) => {
    setRtl(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
      };
    
    const intl = useIntl();
    return (
        <div>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
        </div>
      <ProSidebar
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',

            }}
          >
            {intl.formatMessage({ id: 'Painel Amafresp RH' })}
          </div>
        </SidebarHeader>
        <SidebarContent style={{height:'100vh'}}>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              <Link to='/Conta' >{intl.formatMessage({ id: 'Dashboard' })}</Link>
            </MenuItem>

            <MenuItem icon={<FaUserCog />}> 
            <Link to='Perfil' >{intl.formatMessage({ id: 'Meu Perfil' })}</Link></MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              title={intl.formatMessage({ id: 'Consultas' })}
              icon={<FaRegLaughWink />}
            >
              <MenuItem><Link to='CarteirinhaVirtual'>{intl.formatMessage({ id: 'Carteirinha Virtual' })}</Link></MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'Dados cadastrais(PIN-SS)' })} 2</MenuItem>
              <MenuItem><Link to='RedeCredenciada'>{intl.formatMessage({ id: 'Rede Credênciada' })}</Link></MenuItem>
            </SubMenu>
            <SubMenu
              title={intl.formatMessage({ id: 'Demonstrativos' })}
              icon={<FaFileInvoice />}
            >
              <MenuItem>{intl.formatMessage({ id: 'Extrato de uso e coparticipação' })} 1</MenuItem>

            </SubMenu>
          </Menu>
        </SidebarContent>
  
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="https://amafresp.org.br/"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >

              <span style={{color: 'white'}}> {intl.formatMessage({ id: 'Amafresp' })}</span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
      </div>
    );
  };

export default NavbarConta;