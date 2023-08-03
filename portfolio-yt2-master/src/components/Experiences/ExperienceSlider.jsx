import React from 'react'
import styled from 'styled-components'
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ClientSlider = (props) => {
    const { name, position, img_url, duration, honour,disc } = props.item;
    return (
        <Container>
            <Header>
                {/* <span className='quote'><IoIosQuote/></span>
            <div>
                {Array(stars).fill().map((_, i) => (
                    <span className='star' key={i}>
                        <AiOutlineStar/>
                    </span>
                ))}
            </div> */}
            </Header>
            <Body>

            </Body>
            <Footer>
               
                <div className="details">
                    <h3>{position}</h3>
                    <h5 className='position'>{name}</h5>
                    <h5>{duration}</h5>
                    <p>{disc}</p>
                </div>
            </Footer>
        </Container>
    )
}

export default ClientSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .quote{
        font-size: 3rem;
        color: #01be96;
        opacity: 0.7;
    }

    .star{
        color: #ffcd3c;
        font-size: 1.3rem;
    }
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    height: 500px;
    gap: 3rem;
    width: 100%;
    margin-left: 0 px;
    
    h3{
        font-size: 1.2rem;
        font-weight: 700;
        // color: Green;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }
h5{
    color: #01be96;
   font-size:1rem;
}
    p{
        font-size: 0.9rem;
        justify-content: center;
        opacity: 1.98;
        width: 300px;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`