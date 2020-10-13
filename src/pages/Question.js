import React from 'react';
import QuestionLayout from '../layouts/QuestionLayout';
import { Container, Row, Col } from 'react-bootstrap';
//import Question1 from './../content/questions/Question-1.mdx';

const Home = () => {
    return (
        <QuestionLayout>

            <section className='section -question'>
                <Container>
                    <Row>
                        <Col lg={12} className='s-col'>
                           <h2 className='title -sub'>
                                Questão 1
                           </h2>
                           <h1 className='title -question'>
                               FizzBuzz
                           </h1>
                           <p className='s-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec eget sem id felis egestas ullamcorper. 
                                Proin eu eros quis arcu vestibulum posuere. 
                                Maecenas pellentesque odio turpis, non varius 
                                ligula efficitur pellentesque. Maecenas molestie 
                                felis at dui pulvinar sodales. 
                                Integer sagittis tellus a sem elementum, 
                                et semper nisi sollicitudin. Etiam pretium ante 
                                et scelerisque ornare. Vestibulum rhoncus justo in 
                                ligula porta porttitor. 
                           </p>
                           <pre className='s-code'>
                                lorem 
                            </pre> 
                            <p className='s-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Donec eget sem id felis egestas ullamcorper. 
                                Proin eu eros quis arcu vestibulum posuere. 
                                Maecenas pellentesque odio turpis, non varius 
                                ligula efficitur pellentesque. Maecenas molestie 
                                felis at dui pulvinar sodales. 
                                Integer sagittis tellus a sem elementum, 
                                et semper nisi sollicitudin. Etiam pretium ante 
                                et scelerisque ornare. Vestibulum rhoncus justo in 
                                ligula porta porttitor. 
                           </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='sendzone'>
                                <h2 className='s-title'>
                                    Área de envio:
                                </h2>
                                <div className='s-box'>
                                    <p>
                                        arraste sua submissão aqui
                                    </p>
                                </div>
                                <a>
                                    voltar
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </QuestionLayout>
    );
}

export default Home;