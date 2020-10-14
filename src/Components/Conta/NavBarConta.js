import React from 'react';
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
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
    const [collapsed] = React.useState(false);



    const handleToggleSidebar = (value) => {
        setToggled(value);
      };
    

    return (
        <div>
        <div style={{height: '55px'}} className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars className='iconFabar' />
        </div>
      <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        onKeyPress={handleToggleSidebar}
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
            Painel Amafresp RH
          </div>
        </SidebarHeader>
        <SidebarContent style={{height:'100vh'}}>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              <Link to='/Conta' > <p>Dashboard</p></Link>
            </MenuItem>

            <MenuItem icon={<FaUserCog />}> 
            <Link to='Perfil' ><p>Meu Perfil</p></Link></MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              title= 'Consultas'
              icon={<FaRegLaughWink />}
            >
              <MenuItem><Link to='CarteirinhaVirtual'>Carteirinha Virtual</Link></MenuItem>
              <MenuItem>Dados cadastrais(PIN-SS)</MenuItem>
              <MenuItem><Link to='RedeCredenciada'>Rede Credênciada</Link></MenuItem>
            </SubMenu>
            <SubMenu
              title='Demonstrativos'
              icon={<FaFileInvoice />}
            >
              <MenuItem>Extrato de uso e coparticipação</MenuItem>

            </SubMenu>
          </Menu>
        </SidebarContent>

      </ProSidebar>
      </div>
    );
  };

export default NavbarConta;