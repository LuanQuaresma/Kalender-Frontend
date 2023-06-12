import React, { useState } from 'react';

const Produto = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [url, setURL] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode realizar as ações desejadas com os dados do formulário
    console.log(`Nome: ${nome}`);
    console.log(`Preço: ${preco}`);
    console.log(`URL: ${url}`);
    console.log(`Imagem: ${imagem}`);
  };

  return (
    <div>
      <h2>Formulário de Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            value={preco}
            onChange={(event) => setPreco(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="url">URL Produto:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(event) => setURL(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imagem">Url Imagem:</label>
          <input
            type="text"
            id="imagem"
            value={imagem}
            onChange={(event) => setImagem(event.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Produto;
