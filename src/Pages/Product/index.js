import Header from '../../Components/Header';

import Author from '../../Assets/icons/Ellipse-3.svg';
import Client from '../../Assets/icons/Ellipse-2.svg';
import ProductImg from '../../Assets/images/Rectangle.png';

import './Product.scss';
import ProductForm from '../../Components/Form/product-form';

const Product = () => {
  return (
    <div className='product'>
      <Header />
      <div className='product__content'>
        <div className='product__content_title '>
          10 Secrets for managing a <br />remote team 
        </div>
        <div className='product__content_author prod_padding'>
          <div><img src={Author} alt ='Author' /></div>
          <div>
            Shedrack eze <span>|</span> 2nd January,2022
          </div>
        </div>
        <div className='product__content_img'>
          <img src={ProductImg} alt='ProductImg'></img>
        </div>
        <div className='product__content_text '>
        <p>If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not!</p>
        <p>
          In this article, I have included a whole load of blog examples from a wide variety 
          of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.
        </p>
        <p>
          Since the beginning of the internet, millions and millions
          and millions of blogs have been created. Many have died due to lost interest or their owners giving 
          up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. 
          It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly 
          resourceful material that people find useful and interesting.
        </p>
        <p>
          Each example listed in this blog post are all different in some way and all 
          bring something unique to their readers & subscribers. I want to show you what is possible and how you can take 
          inspiration from them and create an awesome blog of your own.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby for their owners,
          all have the same purpose at their core… the love of writing and sharing information.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby for their owners,
          all have the same purpose at their core… the love of writing and sharing information.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby for their owners,
          all have the same purpose at their core… the love of writing and sharing information.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby for their owners,
          all have the same purpose at their core… the love of writing and sharing information.
        </p>
        </div>
        <div className='product__content_info '>
          <div>
          <div><img src={Author} alt='Author' /></div>
          </div>
          <div className='product__content_info_name'>
            <span>Written by</span>
            <h3>Shedrack Eze</h3>
            <span>CEO Team App</span>
          </div>
        </div>
        <div className='product__content_line '>
          <hr/>
        </div>
        <div className='product__content_form '>
          <div className='product__content_form_info'>
            <div className='product__content_form_info_title'> 
              Join the conversation
            </div>
            <div className='product__content_form_info_comments'>
            <img src={Client} alt='Client' />
            <ProductForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;