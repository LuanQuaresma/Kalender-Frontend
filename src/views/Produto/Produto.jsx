import React, { useState } from 'react';
import axios from 'axios';
import './Produto.css';

const Produto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [url, setURL] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const produto = {
      nome,
      preco,
      url,
      imagem
    };

    axios.post('http://localhost:3003/api/produto', produto)
      .then(response => {
        console.log('Produto enviado com sucesso:', response.data);
        window.location.href = '/home'; // Redireciona para a rota "/home"
      })
      .catch(error => {
        console.error('Erro ao enviar o produto:', error);
        // Realize as ações desejadas em caso de erro no envio do produto
      });
  };

  return (
    <div>
      <h2>Formulário de Produto</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            value={preco}
            onChange={(event) => setPreco(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL Produto:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(event) => setURL(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagem">Url Imagem:</label>
          <input
            type="text"
            id="imagem"
            value={imagem}
            onChange={(event) => setImagem(event.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Produto;
