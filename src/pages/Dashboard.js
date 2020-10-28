import React from 'react';
import DefaultLayout from './../layouts/DefaultLayout';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <DefaultLayout>

            <section className='section -dashboard'>
                <Container>
                    <Row>
                        <Col lg={12} className='s-col'>
                            <h1 className='title -main'>
                                Dashboard - Em construção <span role='img' aria-label='under construction'>🚧</span>
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to='/question' className='link -default'>
                                <div className='card -item'>
                                    <h2>
                                        Prova Teste
                                    </h2>
                                    <p>
                                        Acesse a prova teste do sistema
                                    </p>
                                </div>
                            </Link> 
                            <div className='card -item'>
                                <h2>
                                    Questão Teste
                                </h2>
                                <p>
                                    Acesse a prova teste do sistema
                                </p>
                            </div>
                            <div className='card -item'>
                                <h2>
                                    Documentação
                                </h2>
                                <p>
                                    Acesse a prova teste do sistema
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </DefaultLayout>
    );
}

export default Dashboard;