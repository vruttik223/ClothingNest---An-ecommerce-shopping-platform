import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../Sections/Sections.css';
import "./step3.css"
const StepThree = () => {
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
    { src: 'https://blackberrys.com/cdn/shop/files/textured-casual-shirt-in-olive-franklin-blackberrys-clothing-1.jpg?v=1685950036', alt: 'Textured Casual Shirt in Olive' },
    { src: 'https://img3.junaroad.com/uiproducts/19172718/zoom_0-1673611843.jpg', alt: 'Product Image 2' },
    { src: 'https://i.ebayimg.com/images/g/VNAAAOSw8BZk0LjE/s-l960.jpg', alt: 'Product Image 3' },
    { src: 'https://blackberrys.com/cdn/shop/products/Solid_Casual_Shirt_In_White_Bowen-ESCC0801W1NA22FN-image1.jpg?v=1687870143', alt: 'Solid Casual Shirt in White' },
    { src: 'https://m.media-amazon.com/images/I/71GcSyTmw+L._SY741_.jpg', alt: 'Product Image 5' },
    { src: 'https://i.ebayimg.com/images/g/jeMAAOSwDW1iqCpw/s-l960.jpg', alt: 'Product Image 6' }
  ];


 
  return (
    <>
    <div  className="step-three-container">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase. Your payment has been processed successfully.</p>
      <Link to="/"> 
      <button className="home-buttonroute" >Go to Home</button>
      </Link>
    </div>
    <section id="best-picks">
        <h2>SHOP NOW TRENDING PRODUCTS</h2>
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.src} alt={image.alt} className="slider_img" />
            </div>
            
          ))}

        </Slider>
        <Link to="/Mens">           

        <button className="shopnow">Shop Now</button>
</Link>
      </section>
    </>
    
  );
}

export default StepThree;
