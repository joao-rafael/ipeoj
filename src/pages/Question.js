import React from 'react';
import QuestionLayout from '../layouts/QuestionLayout';
import { Container, Row, Col } from 'react-bootstrap';
//import Question1 from './../content/questions/Question-1.mdx';

const Home = () => {
    return (
        <QuestionLayout>

            <section className='section -home'>
                <Container>
                    <Row>
                        <Col lg={12} className='s-col'>
                           <h1 className='title -question'>
                               FizzBuzz
                           </h1>
                           <p>
                               
                           </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </QuestionLayout>
    );
}

export default Home;