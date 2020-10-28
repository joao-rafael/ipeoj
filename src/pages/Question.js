import React, { useEffect } from 'react';
import QuestionLayout from '../layouts/QuestionLayout';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import Question1 from './../content/questions/Question-1.mdx';

const apiKey = `${process.env.API_KEY}`;

/**
 * lang ids:
 *  C - 75
 *  C++ - 76
 *  Java - 62
 *  JavaScript - 63
 *  Python 3 - 71
 */
const Question = () => {
    let resData = '';
    const [lang, setLang] = React.useState('71');
    const [code, setCode] = React.useState('');
    const [token, setToken] = React.useState('');
    const [results, setResults] = React.useState('');

    useEffect(() => {         
        if (token.length) {
            console.log(token);
            setTimeout(() => getResult(),10000);
        }
    },[token]);

    const submission = {
        method: 'POST',
        url: 'https://rapidapi.p.rapidapi.com/submissions',
        headers: {
            'x-rapidapi-host': 'judge0.p.rapidapi.com',
            'x-rapidapi-key': apiKey,
            'content-type': 'application/json',
            'accept' : 'application/json'
        },
        data: {
            'language_id': `${lang}`,
            'source_code': `${code}`,
        }
    };

    const request = {
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/languages',
        headers: {
          'x-rapidapi-host': 'judge0.p.rapidapi.com',
          'x-rapidapi-key': apiKey
        }
    };

    const getSubmission =  {
        method: 'GET',
        url: `https://judge0.p.rapidapi.com/submissions/${token}`,
        headers: {
            'x-rapidapi-host': 'judge0.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        },
    }

    const submit = () => {
        axios.request(submission).then(response => {
            setToken(response.data.token);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const getResult = () => {
        axios.request(getSubmission).then(response => {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    const test = () => {
        console.log('sent');
    }

    const handleChange = e => {
        setLang(e.target.value);
        console.log(lang);
    }

    const updateCode= e => {
        setCode(e.target.value);
        console.log(code);
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
                           <Link to='/dashboard'> Voltar</Link>
                            
                        </Col>
                        <Col lg={5} className='offset-1'>
                            <select name="lang" id="lang" onChange={handleChange}>
                                <option value="71">Python</option>
                                <option value="75">C Lang</option>
                                <option value="76">C++</option>
                                <option value="62">Java</option>
                                <option value="63">JavaScript</option>
                            </select>
                            <div className='sendzone'>
                                <h2 className='s-title'>
                                    Área de envio:
                                </h2>
                                <div className='s-box'>
                                    <textarea className='s-input' onChange={updateCode}>

                                    </textarea>
                                </div>
                                <button onClick={submit}>
                                    Submeter
                                </button>
                            </div>
                            <div className='results'>
                                <h2>
                                    Resultados:
                                </h2>
                                <p className='r-status'>
                                    {
                                        results.length ?   results : 'Aguardando por envio'
                                    }
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