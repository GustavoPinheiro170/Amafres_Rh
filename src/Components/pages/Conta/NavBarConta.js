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
         FaUserCog,
         FaFileInvoice,
         FaPhone
         } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import './Navbar.scss';
import { UserContext } from '../../../UserContext';
import Logo from '../../../Assets/amafresp.png';



const NavbarConta = () =>{
  const {toggled, handleToggleSidebar} = React.useContext(UserContext);

    const [collapsed] = React.useState(false);


    return (
        <div>
        <div className="btn-toggle" >
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
            <img src={Logo} alt='Amafresp RH'  width='120px' className='filterLogo' />
          </div>
        </SidebarHeader>
        <SidebarContent style={{height:'100vh'}}>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              <Link to='/Conta' onClick={() => handleToggleSidebar(false)}> <p>Dashboard</p></Link>
            </MenuItem>

            <MenuItem icon={<FaUserCog />}> 
            <Link to='Perfil' onClick={() => handleToggleSidebar(false)} ><p>Meu Perfil</p></Link></MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              title= 'Consultas'
              icon={<FaRegLaughWink />}
            >
              <MenuItem><Link to='CarteirinhaVirtual' onClick={() => handleToggleSidebar(false)}>Carteirinha Virtual</Link></MenuItem>
              <MenuItem><Link to='DadosCadastraisPinSS' onClick={() => handleToggleSidebar(false)} >Dados cadastrais(PIN-SS)</Link></MenuItem>
              <MenuItem><Link to='RedeCredenciada' onClick={() => handleToggleSidebar(false)}>Rede Credenciada</Link></MenuItem>
            </SubMenu>

            <SubMenu
              title='Demonstrativos'
              icon={<FaFileInvoice />}
            >
              <MenuItem>Extrato de uso e coparticipação</MenuItem>

            </SubMenu>

            <Menu iconShape="circle">
              <MenuItem icon={<FaPhone />} ><Link to='Contatos' onClick={() => handleToggleSidebar(false)}>Contatos</Link></MenuItem>
            </Menu>
          </Menu>
        </SidebarContent>

      </ProSidebar>
      </div>
    );
  };

export default NavbarConta;