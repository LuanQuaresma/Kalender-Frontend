import React, { useEffect, useState } from 'react';

const ApiComponent: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3003/api/produto');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao obter os dados da API:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Nome: {product.nome}</p>
            <p>Imagem: {product.imagem}</p>
            <p>Url: {product.url}</p>
            <p>Preço: {product.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;