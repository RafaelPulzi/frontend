import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';


function Login() {
        const [values, setvalues] = useState({
            email: '',
            senha: ''
        })

        const[errors, setErrors] = useState({})

        const handleInput = (event) => {
            setvalues(prev => ({...prev, [event.target.name]: [event.target.values]}))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            setErrors(Validation(values));
        }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rouded w-25'>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' placeholder='Entre com o seu e-mail' name='email' 
                        onChange={handleInput} className='form-control rouded-0'/> 
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='senha'>Senha</label>
                        <input type='password' placeholder='Entre com sua senha' name='senha'
                        onChange={handleInput} className='form-control rouded-0'/> 
                        {errors.senha && <span className='text-danger'>{errors.senha}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>entrar</button>
                    <p>Não tem uma conta? clique no link logo abaixo!</p>
                    <Link to="/Cadastro" className='btn btn-default border w-100 bg-light text-decoration-none'>Cadastrar</Link>
                </form>
            </div>
        </div>
    )
}

export default Login