import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './CadastroValidation';
import axios from 'axios'
import register from './reqCadastro';

function Cadastro() {

    const [values, setvalues] = useState({
        name_login_ternaryChart: '',
        email_login_ternaryChart: '',
        senha_login_ternaryChart: ''
    })

    const navegar = useNavigate();

    const[errors, setErrors] = useState({})

    const handleInput = (event) => {
        setvalues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.nome === "" && errors.email === "" && errors.senha === "") {
            axios.post('http://127.0.0.1:3000/cadastro', values)
            .then(res => {
                navegar('/');
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rouded w-25'>
                <form action='' onSubmit={handleSubmit}>
                    <h3>Cadastro</h3>
                    <div className='mb-3'>
                        <label htmlFor='Nome'>Name</label>
                        <input type='text' placeholder='Escreva o seu nome' name='nome'
                        onChange={handleInput} className='form-control rouded-0'/>
                        {errors.nome && <span className='text-danger'>{errors.nome}</span>} 
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Nome'>Phone Number</label>
                        <input type='text' placeholder='Escreva o seu nome' name='phoneNumber'
                        onChange={handleInput} className='form-control rouded-0'/>
                        {errors.nome && <span className='text-danger'>{errors.nome}</span>} 
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' placeholder='Entre com o seu e-mail' name='email'
                        onChange={handleInput} className='form-control rouded-0'/> 
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Confirm E-mail</label>
                        <input type='email' placeholder='Entre com o seu e-mail' name='confirmEmail'
                        onChange={handleInput} className='form-control rouded-0'/> 
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='senha'>Password</label>
                        <input type='password' placeholder='Entre com sua senha' name='senha'
                        onChange={handleInput} className='form-control rouded-0'/> 
                        {errors.senha && <span className='text-danger'>{errors.senha}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='senha'>Confirm password</label>
                        <input type='password' placeholder='Entre com sua senha' name='confirmPassword'
                        onChange={handleInput} className='form-control rouded-0'/> 
                        {errors.senha && <span className='text-danger'>{errors.senha}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100' onClick={sendDataToAPI}>Cadastrar</button>
                    <p></p>
                    <Link to="/Login" className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

const sendDataToAPI = async () => {
    const userData = {
      nm_usuario: 'Henrique',
      data_nascimento: null,
      tel_usuario: '5511976360119',
      email_usuario: 'henriquess@teste.com',
      senha_usuario: 'henrique'
    };

    try {
      const response = await axios.post('http://localhost:8000/register', userData);
      console.log('Response:', response.data);
      // Tratar a resposta da API aqui, se necessário
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      // Tratar erros aqui, se necessário
    }
  };

export default Cadastro
