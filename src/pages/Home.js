import React from 'react';
import DefaultLayout from './../layouts/DefaultLayout';
import { Container, Row, Col } from 'react-bootstrap';

import indexImg from '../assets/img/index.svg';

const Home = () => {
    return (
        <DefaultLayout>

            <section className='section -home'>
                <Container>
                    <Row>
                        <Col lg={6} className='s-col'>
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
                            <button className='link -primary'>
                                Acesse a versão de testes
                            </button>
                        </Col>
                        <Col lg={6} className='s-col'>
                            <picture className='picture'>
                                <img className='img -index' src={indexImg} alt='Computador com balões'></img>
                            </picture>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </DefaultLayout>
    );
}

export default Home;
