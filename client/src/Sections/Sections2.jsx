import React from 'react'
import './Sections2.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
function Sections2() {
    const navigate = useNavigate()

    function top(){
        scrollTo({ top: 0 });
        navigate("/Mens")
    }
  return (
    <div>
     <section id="collection">
        <div className="collections container">
            <div className="content">
                <div className="img">
                <img src="https://blackberrys.com/cdn/shop/files/textured-casual-shirt-in-olive-franklin-blackberrys-clothing-1.jpg?v=1685950036" alt="img" />
                </div>
                <div className="img-content">
                    <p>Mens's Collections</p>
                    <button onClick={top}>SHOP NOW</button>
                </div>
            </div>
            <div className="content2">
                <div className="img">
                <img src="https://img3.junaroad.com/uiproducts/20448904/zoom_0-1698246311.jpg" alt="img" />
                </div>
                <div className="img-content2">
                    <p>Women's Collections</p>
                    <button><a href="#sellers">SHOP NOW</a></button>
                </div>
            </div>
            <div className="content3">
                <div className="img">
                <img src="https://i.ebayimg.com/images/g/VNAAAOSw8BZk0LjE/s-l960.jpg" alt="img" />
                </div>
                <div className="img-content3">
                    <p>Kids Collections</p>
                    <button><a href="#sellers">SHOP NOW</a></button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Sections2