

import Slider from 'react-slick'

import Stars from '../../Assets/icons/Stars.svg';
import Client1 from '../../Assets/icons/Ellipse.svg';
import Client2 from '../../Assets/icons/Ellipse-2.svg';
import Client3 from '../../Assets/icons/Ellipse-3.svg';
import Client4 from '../../Assets/icons/Ellipse-4.svg';

import './Slider.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Example() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    className: 'slider',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
    ]
  }
  const items = [
    {
      coment: 'Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.',
      name: 'Amy Klassen',
      img: Client1
    },
    {
      coment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      name: "Jane Cooper",
      img: Client2
    },
    {
      coment: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      name: "Eleanor Pena",
      img: Client3
    },
    {
      coment: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
      name: "Elena Rena",
      img: Client4
    }
  ]

  return (
    <div >
      <Slider {...sliderSettings}>
      {items.map((item, index) => {
        return (
          <div key={index} className='slider-home'>
            <div className='slider-home__content'>
              <div className='slider-home__content_star'>
                <img src={Stars} alt='star'></img>
              </div>
              <div className='slider-home__content_coment'>
                {item.coment}
              </div>
              <div className='slider-home__content_client'>
                <div><img src={item.img} alt='item_img' /></div>
                <div>{item.name}</div>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
    </div>
  )

}
