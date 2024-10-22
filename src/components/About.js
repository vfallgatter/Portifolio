import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import minhaFoto from '../pic.jpg';

const About = ({ isEnglish }) => (
  <Container id="about" className="my-5">
    <Row className="align-items-center">
      <Col md={6}>
        <Image src={minhaFoto} roundedCircle fluid />
      </Col>
      <Col md={6}>
        <h2>{isEnglish ? 'About Me' : 'Sobre Mim'}</h2>
        <p>
          {isEnglish
            ? 'Student of Systems Analysis and Development, focusing on front-end development using technologies such as HTML, CSS, JavaScript, and Node.js. Currently, I am expanding my knowledge into mobile development with Flutter. My projects aim to create practical and efficient solutions, always seeking to implement good coding practices and scalable architecture. I have an advanced level of English, with a fluency certificate obtained in 2019, and since then, I have been working to enhance my language skills through self-study. Here you will find projects focused on front-end development and API integrations, as well as experiments in Flutter. Feel free to explore and collaborate!'
            : 'Estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento front-end utilizando tecnologias como HTML, CSS, JavaScript e Node.js. Atualmente, estou expandindo meus conhecimentos para o desenvolvimento mobile com Flutter. Meus projetos visam a criação de soluções práticas e eficientes, sempre buscando implementar boas práticas de código e uma arquitetura escalável. Tenho Inglês de nível avançado, com certificado de fluência conquistado em 2019 e desde então, busco ampliar meus conhecimentos na língua através de estudos próprios. Aqui você encontrará projetos voltados para o front-end e integrações com APIs, assim como experimentos em Flutter. Sinta-se à vontade para explorar e colaborar!'}
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
