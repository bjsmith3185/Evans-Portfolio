import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Burger from './assets/icons/burger_icon.jpg';
import Fit from './assets/icons/fit-track-img.jpg';
import EDB from './assets/icons/icon_eDB.jpg';
import Pass from './assets/icons/pass-gen-img.jpg';
import Quiz from './assets/icons/quiz-img.jpg';
import './style.css';

function HomeComp(props) {
    return (
        <div>
            <Container >
                <Jumbotron className='jumbotron'>

                    <Row>
                        <Col> <Image id='icon' src={Burger} /></Col>
                        <Col><Image id='icon' src={Fit} /></Col>
                        <Col><Image id='icon' src={EDB} /> </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><Image id='icon' src={Pass} /></Col>
                        <Col><Image id='icon' src={Quiz} /></Col>
                        <Col><Image id='icon'/></Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>
    )
};

export default HomeComp;