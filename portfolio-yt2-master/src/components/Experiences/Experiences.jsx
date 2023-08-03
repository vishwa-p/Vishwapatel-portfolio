import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ExperienceSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name: "Junior Developer",
        position: "N-Micro IT Solutions Inc",

        duration: "Sep 2022 - Dec 2022",
        disc: "- Developed and maintained SQL database systems, ensuring data integrity and optimizing database performance. - Collaborated with a team of developers to integrate the database layer with web applications using RESTful APIs.- Participated in code reviews, providing valuable insights to improve the efficiency and readability of SQL queries.- Actively contributed to team discussions and brainstorming sessions, proposing innovative solutions to complex technical challenges."
    },
    {
        name: "Software Developer",
        position: "Equator Techsolutions",

        duration: "Jan 2020-Dec 2021",
        disc: ` 	Project – “Workpod Port-links India”
        • Creating and implementing React class components according to client’s design requirements.
• Responsible for maintaining and making changes on pre-existing codes and components. 
• Make front-end design responsive and user friendly.
• Making Stored procedures to optimize code and get correct data from database according to client’s needs.
• Database and APIs connection.
• Collaboration with backend and UI/UX team to coordinate entire website flow.
• Join Daily meetings with senior developers to review my work.
• Code review and contribution to make weekly work report to submit to client.
        `
    },
    {
        name: "Web Developer",
        position: "Exposys Data Labs",

        duration: "Jan 2019-Dec 2019",
        disc: ` 	Project – Website “Online education system”. [HTML, CSS, JavaScript]
        • Worked with top developers to create and build responsive web designs utilizing HTML, CSS, and JavaScript.
        • Created responsive web pages by referencing client’s design requirements.
        • Used to have regular meetings with senior team to review my work and submit work reports weekly.
        • Developing new features or functionality to website as clients needs change with time.
        • Code testing and debugging before pushing to GitHub.
        • worked with cross-functional teams to identify and solve problems
        `
    },
    


]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
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
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))
    return (
        <Container id='client'>
            <Slide direction="left">
                {/* <span className="green">testimonials</span> */}
                <h1>Experiences</h1>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                {/* <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons> */}
            </Testimonials>
        </Container>
    )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        color:#01be96;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`