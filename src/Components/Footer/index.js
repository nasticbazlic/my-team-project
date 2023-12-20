
import BlackLogo from '../../Assets/icons/Group 22.svg';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Button from '../Button';

import './Footer.scss';

const Footer = () => {
  const listIcons = [
    {icon: <Facebook />, title: 'Facebook'},
    {icon: <Instagram />, title: 'Instagram'},
    {icon: <Twitter />, title: 'Twitter'},
    {icon: <Facebook />, title: 'Facebook'},
    {icon: <Instagram />, title: 'Instagram'}
  ]
  return (
    <div className='footer'>
     <div className='footer__content'>
       <div className='footer__content_logo'>
       <Link to='/my-team-project'><img src={BlackLogo} alt='black_log' /> </Link>
       </div>
       <div className='footer__content_list'>
        <ul>
          {listIcons.map(({title, icon}, index) => {
            return (
              <li key={index}>{icon} {title}</li>
            )
          })}
        </ul>
        <Button variation='header__white_btn'>
						Get Access
				</Button>
       </div>
     </div>
    </div>
  )
}

export default Footer;