import React from 'react';
import { Image, Container } from 'react-bootstrap';
import './style.css';

function Header(props) {
    return (
        <div>
            <Container>
                    <Image className='header' src={props.background} />
            </Container>
        </div>
    )
};

export default Header;