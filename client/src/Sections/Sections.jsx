import React from 'react';
import Slider from "react-slick";
import './Sections.css';
import { Link } from 'react-router-dom';

function Sections() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Duration for each slide
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderImages = [
    { src: 'https://blackberrys.com/cdn/shop/files/textured-casual-shirt-in-olive-franklin-blackberrys-clothing-1.jpg?v=1685950036', alt: 'Textured Casual Shirt in Olive', link: '/Mens' },
    { src: 'https://img3.junaroad.com/uiproducts/19172718/zoom_0-1673611843.jpg', alt: 'Product Image 2', link: '/Womens' },
    { src: 'https://i.ebayimg.com/images/g/VNAAAOSw8BZk0LjE/s-l960.jpg', alt: 'Product Image 3', link: '/Kids' },
    { src: 'https://blackberrys.com/cdn/shop/products/Solid_Casual_Shirt_In_White_Bowen-ESCC0801W1NA22FN-image1.jpg?v=1687870143', alt: 'Solid Casual Shirt in White', link: '/Mens' },
    { src: 'https://m.media-amazon.com/images/I/71GcSyTmw+L._SY741_.jpg', alt: 'Product Image 5', link: '/Womens' },
    { src: 'https://i.ebayimg.com/images/g/jeMAAOSwDW1iqCpw/s-l960.jpg', alt: 'Product Image 6', link: '/Kids' }
  ];

  return (
    <div>
      <section id="home">
        <div className="home_page">
          <div className="home_img"></div>
          <div className="home_txt">
            <p className="collectio">SUMMER COLLECTION</p>
            <h2>FALL - WINTER<br />Collection 2024</h2>
            <div className="home_label">
              <p>A specialist label creating luxury essentials. Ethically crafted<br />with an unwavering commitment to exceptional quality.</p>
            </div>
            <Link to="/Mens">
              <button>
                <a href="#sellers">SHOP NOW</a>
                <i className='bx bx-right-arrow-alt'></i>
              </button>
            </Link>
            <div className="home_social_icons">
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-pinterest'></i></a>
              <a href="#"><i className='bx bxl-instagram'></i></a>
            </div>
          </div>
        </div>
      </section>
      <section id="best-picks">
        <h2>Best Picks</h2>
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.src} alt={image.alt} className="slider_img" />
              <Link to={image.link}>
                <button className="shopnow">Shop Now</button>
              </Link>
              <br />
            </div>
          ))}
          <br />

        </Slider>
      </section>
    </div>
  );
}

export default Sections;
