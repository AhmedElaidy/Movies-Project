import React from "react"
import { Link } from "react-router-dom"
import Ucard from "./Ucard"
import Slider from "react-slick"


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
const Upcomming = ({ items, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className='arrow' />,
    prevArrow: <SamplePrevArrow className='arrow' />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <React.Fragment>
      <section id='upcomming' className='upcome'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link to='/'>View All</Link>
          </div>
          <div className='content'>
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <Ucard item={item} />
                  </React.Fragment>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Upcomming
