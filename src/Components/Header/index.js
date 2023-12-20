import { Link } from 'react-router-dom';
import WhiteLogo from '../../Assets/icons/Group 22.svg';
import BlackLogo from '../../Assets/icons/team..svg';
import Button from '../Button';
import './Header.scss'

const Header = () => {
	const list = [
		{value: 'Products', to:'/products'},
		{value: 'Blog', to:'/blog'},
		{value: 'Contact', to:'/#'},
		{value: 'Log in', to:'/#'},
	]
	return (
		<div className='header'>
			<div className='header__white'>
				<div className='header__white_logo'>
					<Link to='/'><img src={WhiteLogo} alt='WhiteLogo'></img></Link>
				</div>
				<div className='header__white_content'>
					<ul className='header__white_content_list'>
						{list.map(({value, to}, index) => {
							return (
								<li key={index}> <Link to={to}>{value}</Link> </li>
							)
						})}
					</ul>
					<Button variation='header__white_btn'>
						Get Access
					</Button>
				</div>
			</div>
			{/* /////// */}
			<div className='header__black'>
				<div className='header__black_logo'>
					<Link to='/'><img src={BlackLogo} alt='black_logo'></img></Link>
				</div>
				<div className='header__black_content'>
					<ul className='header__black_content_list'>
						{list.map(({value, to}, index) => {
							return (
								<li key={index}> <Link to={to}>{value}</Link> </li>
							)
						})}
					</ul>
					<Button variation='header__black_btn'>
						Get Access
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Header;