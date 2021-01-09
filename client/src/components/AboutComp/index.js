import React from 'react';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Photo from './assets/black_tie_smile.jpeg';
import './style.css';

function AboutComp() {
    // add 1 row and 2 columns
    return (
        <div>
            <Container>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Image className="photo" src={Photo} alt='Photo of Evan Bero' />
                            </Col>
                            <Col>
                            <h1 className='welcome'>Welcome to the evanDev React portfolio</h1>
                            <p className='para1'>
                                I am a full-stack developer and graduate of the UNC Charlotte Coding Bootcamp (full-stack web development program) currently seeking new opportunities.
                            <br></br>
                            <br></br>
                            My top skills include, React.js, Javascript, Node.js, Bootstrap libraries, HTML, CSS, and graphic design as well as REST API (Express, Sequelize, mySQL).
                            <br></br>
                            <br></br>
                            I have a strong working knowledge of client and server-side integration, and enjoy collaboration as part of a team in an agile environment.
                            <br></br>
                            <br></br>
                            Please check out some of my applications on my portfolio page and feel free to message me via the contact page or contact me via LinkedIn.
                            <br></br>
                            <br></br>
                            Thanks for stopping by and have a great day!
                            <br></br>
                            <br></br>
                            -Evan Bero
                            </p>
                            </Col>
                    </Row>
                </Container>
            </Jumbotron>
            </Container>
        </div>
    )
};

export default AboutComp;