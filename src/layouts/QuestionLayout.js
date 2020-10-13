import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Question = ({ children }) => {
    return (
        <div>
            <Header/>
            <main>
                <Container>
                    <Row>
                        <Col>
                            {children}
                        </Col>
                    </Row>
                </Container>

                
            </main>
            <Footer/>
        </div>
    );
}

export default Question;