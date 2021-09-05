import React, { Fragment, useContext } from 'react';
import { HeaderStyle, IconEdit, HamburgerIcon } from '../../Assets/styled-components/StylesSavedComponent';
import logo from '../../Assets/Icons/Logo1V.svg'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AppContext } from '../../ContextApi/Context';
import { LogOut } from '../../Auth/authGuard';

function Header() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const {setShowDetails } = useContext(AppContext);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		LogOut()
	};

	const destroyPage = () => {
		setShowDetails(false)
	}

	return (
		<Fragment>
			<HeaderStyle>
				<img src={logo} alt={"logo"}></img>
				<ul>
					<Link  onClick = {destroyPage} to='/home' style={{ textDecoration: 'none', color: 'white' }}><li id="historic">Histórico</li></Link>
					<Link to='/savedReports' style={{ textDecoration: 'none', color: 'white' }}><li id="report">Relatórios</li></Link>
					<Link to='/savedGraphics' style={{ textDecoration: 'none', color: 'white' }}><li id="graphic">Gráficos</li></Link>
					<Link to='/editCupons' style={{ textDecoration: 'none', color: 'white' }}><li id="graphic">Cupons</li></Link>
				</ul>
				<IconEdit>
					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
						<HamburgerIcon />
						<HamburgerIcon />
						<HamburgerIcon />
					</Button>
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
					<Link to = '/editPerfil' style = {{ textDecoration: 'none', color: 'black'}}>
						<MenuItem onClick={handleClose}>Editar Perfil</MenuItem>
					</Link>	
					<Link to = '/' style = {{textDecoration: 'none', color: 'black'}}>
						<MenuItem onClick={handleClose}>Sair</MenuItem>
					</Link>
				</Menu>
				</IconEdit>

				
			</HeaderStyle>
		</Fragment>
	);

}

export default Header;