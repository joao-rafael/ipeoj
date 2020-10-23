import React, { useEffect } from 'react';
import QuestionLayout from '../layouts/QuestionLayout';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
//import Question1 from './../content/questions/Question-1.mdx';

const apiKey = `${process.env.API_KEY}`;

const request = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/languages',
    headers: {
      'x-rapidapi-host': 'judge0.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    }
};



const Question = () => {
    const [submission, setSubmission] = React.useState('');
    const [response, setResponse] = React.useState('');

    const submit = () => {
        axios.request(request).then(response => {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    return (
        <QuestionLayout>

            <section className='section -question'>
                <Container>
                    <Row >
                        <Col lg={6} className='s-col'>
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
                            <a>
                                voltar
                            </a>
                        </Col>
                        <Col lg={5} className='offset-1'>
                            <div className='sendzone'>
                                <h2 className='s-title'>
                                    Área de envio:
                                </h2>
                                <div className='s-box'>
                                    <p>
                                        arraste sua submissão aqui
                                    </p>
                                </div>
                                <button>
                                    Submeter
                                </button>
                            </div>
                            <div className='results'>
                                <h2>
                                    Resultados:
                                </h2>
                                <p className='r-status'>
                                    Aguardando Submissão
                                </p>    
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </QuestionLayout>
    );
}

export default Question;