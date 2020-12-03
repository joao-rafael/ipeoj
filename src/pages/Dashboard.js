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
                                        Questão 1
                                    </h2>
                                    <p>
                                        Acesse a prova teste do sistema
                                    </p>
                                </div>
                            </Link> 
                            <Link to='/question2' className='link -default'>
                                <div className='card -item'>
                                    <h2>
                                    Questão 2
                                    </h2>
                                    <p>
                                        Acesse a prova teste do sistema
                                    </p>
                                </div>
                            </Link> 
                            <Link to='/question3' className='link -default'>
                                <div className='card -item'>
                                    <h2>
                                    Questão 3
                                    </h2>
                                    <p>
                                        Acesse a prova teste do sistema
                                    </p>
                                </div>
                            </Link> 
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </DefaultLayout>
    );
}

export default Dashboard;