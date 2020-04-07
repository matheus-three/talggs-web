import React, { Fragment } from 'react';
import { HeaderStyle, IconEdit } from '../../Assets/StylesMainComponent';
import logo from '../../Assets/Logo.jpeg'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<Fragment>
			<HeaderStyle>
				<img src={logo} alt = {"logo"}></img>
				<ul>
					<li>Histórico</li>
					<Link to='/' style={{ textDecoration: 'none', color: 'white' }}><li>Relatórios</li></Link>
					<li>Gráficos</li>

				</ul>
				<IconEdit />
			</HeaderStyle>
		</Fragment>
	);

}

export default Header;