import './Body.css';
import nike from '../../assets/nike-logo.jpg';
import adidas from '../../assets/adidas-logo.jpg';
import puma from '../../assets/puma-logo.jpg';
import tenisNike from '../../assets/tenis-nike.jpg';

const Body = () => {
  return (
    <main className="container">
      <h1 className="container__title">Lançamentos</h1>
      <hr className="linha__horizontal" />
      <div className="container__marcas">
        <div className="imagem_logos">
          <div className="imagem_logos__descricao">
            <a href=""><img src={nike} alt="Logo Nike" className="foto1" /></a>
            <p className="descricao">Nike</p>
          </div>
          <div className="imagem_logos__descricao">
            <img src={adidas} alt="Logo Adidas" className="foto1" />
            <p className="descricao">Adidas</p>
          </div>
          <div className="imagem_logos__descricao">
            <img src={puma} alt="Logo Puma" className="foto1" />
            <p className="descricao">Puma</p>
          </div>
        </div>
      </div>
      <br />
      <section className='produtos'>
        <div className='imagem_tenis'>
          <img src={tenisNike} alt="Tênis Nike"/>
        </div>
      </section>
    </main>
  );
};

export default Body;
