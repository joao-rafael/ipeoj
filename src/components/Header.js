import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return(
        <header className='header'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='title -brand'>
                            IPÊ Online Judge
                        </h1>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;