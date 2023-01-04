import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 header"
          src="/images/banner.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 header"
          src="/images/banner2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 header"
          src="/images/banner3.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Header
