import HomePageItem from '../../Components/Common/homepage-item';
import HomePageForm from '../../Components/Form/homepage-form';
import Header from '../../Components/Header';

import Image2 from '../../Assets/images/image2.png';
import Image3 from '../../Assets/images/event 1.png';
import Image4 from '../../Assets/images/image4.png';
import Image5 from '../../Assets/images/event 2.png';
import Image6 from '../../Assets/images/image7.png';
import Image7 from '../../Assets/images/Group 18.png';

import './HomePage.scss';
import Example from '../../Components/Slider';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage__header'>
        <Header />
        <div className='homepage__header_content padding_left'>
          <div className='homepage__header_content_title'>
            Instant collaborations <br />for remote teams
          </div>
          <div className='homepage__header_content_subtitle'>
              All in one for your remote team chats, <br />
              collaboration and track projects
          </div>
          <HomePageForm />
        </div>
      </div>
      <div className='homepage__content'>
        <div className='homepage__content_first'>
          <HomePageItem title='Your Hub for teamwork' />
          <div className='homepage__content_first_img'>
            <img src={Image2} alt='Image2' />
            <div className='homepage__content_first_img_mini'>
              <img src={Image3} alt='Image3' />
            </div>
          </div>
        </div>
        <div className='homepage__content_second'>
          <div className='homepage__content_second_img'>
            <img src={Image4} alt='Image4'></img>
            <div className='homepage__content_second_img_mini'>
              <img src={Image3} alt='Image3' />
              <img src={Image5} alt='Image5'></img>
            </div>
          </div>
          <HomePageItem title='Simple task management' />
        </div>
        <div className='homepage__content_three'>
          <HomePageItem title='Scheduling that actually works' />
          <div className='homepage__content_three_img'>
            <img src={Image6} alt='Image6' />
            <div className='homepage__content_three_img_mini'>
              <img src={Image7} alt='Image7' />
            </div>
          </div>
        </div>
      </div>
      <div className='sslider'>
        <Example />
      </div>
    </div>
  )
}

export default HomePage;