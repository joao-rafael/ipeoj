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
    const rProps = ['Memória:', 'Mensagem:', 'Status:', 'Stderr:', 'Saída:', 'Tempo de Execução:'];
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
            'stdin': '4',
            'expected_output': '4 ao quadrado é: 16',
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
            setResults(response.data);
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
                                Questão 3
                           </h2>
                           <h1 className='title -question'>
                               Ao Quadrado
                           </h1>
                           <p className='s-paragraph'>
                                Nessa questão, seu programa deverá receber um número qualquer X
                                e deverá retornar a mensagem: 'X ao quadrado é igual a: Y', em que Y
                                deverá ser o quadrado do número X.
                           </p>
                           <pre className='s-code'>
                                // Entrada: <br></br>
                                4 <br></br>
                                // Saída esperada: <br></br>
                                4 ao quadrado é: 16
                            </pre> 
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
                                {
                                    results.length === 0 ?  
                                        <p className='r-advice'>
                                            Aguardando submissão
                                        </p>
                                    :   
                                        <div>
                                            <ul>
                                                <li >
                                                    Memória: {results.memory}
                                                </li>
                                                <li >
                                                    Tempo de Execução: {results.time}
                                                </li>
                                                <li >
                                                    Saída: {results.stdout}
                                                </li>
                                                <li >
                                                    Status: {results.status.description}
                                                </li>
                                                <li>
                                                    Mensagem: {results.message}
                                                </li>
                                            </ul>
                                        </div>
                                        /**
                                            memory: 3408
                                            message: null
                                            status: {id: 3, description: "Accepted"}
                                            stderr: null
                                            stdout: "hello world↵"
                                            time: "0.021"
                                            token: "02db66c0-4aee-401c-ba32-a8f96366b47d"
                                            __proto__: Object
                                        */
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </QuestionLayout>
    );
}

export default Question;