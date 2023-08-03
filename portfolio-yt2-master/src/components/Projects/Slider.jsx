import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://i.ibb.co/px19pJs/Screenshot-2023-06-20-153450.png",
        disc : "Created a web page using HTML,CSS,JavaScrit which has feature to change pet's outfit by clicking TOP and BOTTOM buttons.",
        demo:"http://getyourpetoutfit.rf.gd/Index.html",
        sourceLink:"https://github.com/vishwa-p/Pet-Project-outfit-selection"

    },
    {
        img : "https://i.ibb.co/tz0ZYGr/searchbar.png",
        disc : "This is a web application to make searchbar where data is being searched from API. If entered value matches with any results of API, it will be showed to front-end side. on click of search results list will show an alert message.",
        demo:"https://search-bar-pearl.vercel.app/",
        sourceLink:"https://github.com/vishwa-p/SearchBar"
    },
    {
      img : "https://i.ibb.co/TYnmXkK/users.png",
      disc : "This is a web application to generate random users by calling API in React JS.",
      demo:"https://generate-random-user-nine.vercel.app/",
      sourceLink:"https://github.com/vishwa-p/GenerateRandomUser"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc : "4",
        demo:"http://happybirthdayraviadi.000.pe/Weather/JS-Assign-5-APIs.html",
        sourceLink:""
    },
    {
        img : "https://i.ibb.co/k0s65f2/weather.png",
        disc : "Weather application which fetch data from API results and show current weather in celsius and conditions. ",
        demo:"https://generate-random-user-nine.vercel.app/",
        sourceLink:"https://github.com/vishwa-p/weather-Information"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`