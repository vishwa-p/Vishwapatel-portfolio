import React from "react";
import { MdDesignServices } from "react-icons/md";
import { MdStorefront} from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"FrontEnd Technologies"}
            disc={`HTML, CSS, SASS, JavaScript, `}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"Back-End Technologies"}
            disc={`Node JS, C#, PHP, Python, JAVA`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Web Developing Libraries"}
            disc={` React, Jquery, Vue js`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={MdStorefront}
            title={"Web Application Framework"}
            disc={` Bootstrap,ASP.NET MVC, Laravel`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FiCodesandbox}
            title={"Database"}
            disc={` SQL, MYSQL, MongoDB`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={FiCodesandbox}
            title={"APIS"}
            disc={` JSON, XML, RESTful API interface`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"Version Control"}
            disc={`Git, GItHub`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdDesignServices}
            title={"Concepts"}
            disc={`SDLC`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
