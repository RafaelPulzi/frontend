import React from 'react';
import axios from 'axios';

function register() {
  const [userData] = ({
    nm_usuario: 'Henrique',
    data_nascimento: null,
    tel_usuario: '5511976360119',
    email_usuario: 'henriquess@teste.com',
    senha_usuario: 'henrique'
  });

  const handleButtonClick = async () => {
    try {
      const response = await axios.post('http://localhost:8000/register', userData);
      console.log('Response:', response.data);
      // Tratar a resposta da API aqui, se necessário
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      // Tratar erros aqui, se necessário
    }
  };

  return (
    <div>
      <h1>Enviar Dados</h1>
      <button onClick={handleButtonClick}>Enviar Dados</button>
    </div>
  );
}

export default register;