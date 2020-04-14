import React, { Fragment } from 'react';
import { HeaderStyle, IconEdit } from '../../Assets/StylesSavedComponent';
import logo from '../../Assets/Icons/Logo1V - Web.svg'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<Fragment>
			<HeaderStyle>
				<img src={logo} alt = {"logo"}></img>
				<ul>
					<Link to='/' style={{ textDecoration: 'none', color: 'white' }}><li>Histórico</li></Link>
					<Link to='/savedReports' style={{ textDecoration: 'none', color: 'white' }}><li>Relatórios</li></Link>
					<Link to='/savedGraphics' style = {{textDecoration: 'none', color: 'white'}}><li>Gráficos</li></Link>
				</ul>
				<IconEdit />
			</HeaderStyle>
		</Fragment>
	);

}

export default Header;