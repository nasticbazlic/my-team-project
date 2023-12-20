
import { Link } from 'react-router-dom';
import './homepage-item.scss';

const HomePageItem = ({title}) => {
  return (
    <div className='homepage-item padding_left'>
      <div className='homepage-item__title'>
        {title}
      </div>
      <div className='homepage-item__info'>
        Give everyone you work with—inside and outside your company—a more productive way to stay in sync. 
        Respond faster with emoji, keep conversations focused in channels,
        and simplify all your communication into one place.
      </div>
      <div className='homepage-item__more'>
        <Link to='/foo'>Learn more &#8594;</Link>
      </div>
    </div>
  )
}

export default HomePageItem;