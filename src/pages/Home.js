import React from 'react';
import DefaultLayout from './../layouts/DefaultLayout';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <DefaultLayout>

            <section className='section -home'>
                <Container>

                    <Row>
                        <Col>
                            <h1 className='title -main'>
                                Um ambiente 
                                de provas de programação
                                interativo
                            </h1>
                            <p className='text -excerpt'>
                                Bem vindo à plataforma de Online Judge do 
                                Unipê, utulizado para realização de provas e, 
                                futuramente, competições de programação.
                            </p>
                        </Col>
                        <Col>
                            <picture>

                            </picture>
                        </Col>
                    </Row>

                </Container>
            </section>
            
        </DefaultLayout>
    );
}

export default Home;
