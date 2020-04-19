import React, { Fragment } from 'react';
import { HeaderStyle, IconEdit } from '../../Assets/StylesSavedComponent';
import logo from '../../Assets/Icons/Logo1V - Web.svg'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Header() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Fragment>
			<HeaderStyle>
				<img src={logo} alt={"logo"}></img>
				<ul>
					<Link to='/' style={{ textDecoration: 'none', color: 'white' }}><li>Histórico</li></Link>
					<Link to='/savedReports' style={{ textDecoration: 'none', color: 'white' }}><li>Relatórios</li></Link>
					<Link to='/savedGraphics' style={{ textDecoration: 'none', color: 'white' }}><li>Gráficos</li></Link>
				</ul>
				<IconEdit>
					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					</Button>
				</IconEdit>

				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
					color="primary"
				>
					<MenuItem onClick={handleClose}>Empresa Tal</MenuItem>
					<MenuItem onClick={handleClose}>21212121221</MenuItem>
				<Link to = '/editCupons' style = {{ textDecoration: 'none', color: 'black'}}>
					<MenuItem onClick={handleClose}>Editar Cupons</MenuItem>
				</Link>	
					<MenuItem onClick={handleClose}>Sair</MenuItem>
				</Menu>
			</HeaderStyle>
		</Fragment>
	);

}

export default Header;