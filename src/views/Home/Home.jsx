import React from 'react';
import './home.css';
import './responsive-home.css';
import tenisNike from '../../assets/airmax.jpg';

const Home = () => {
  return (
    <div>
      <section className="section-cards">
        <div className="container">
          <div className="content-flex">
            <div className="header-1">
              <h1>Lançamentos</h1>
            </div>
          </div>


          <div className="content-flex-cards">
            <div className="card">
                <a className="link-product" href="https://www.maze.com.br/produto/tenis-nike-air-max-97-og-prata/5295442">
                    <div className="card-img">
                    <img src={tenisNike} alt="" />
                    </div>
                    <div className="content-card">
                    <div className="part-one">
                        <h2>Airmax 97</h2>
                    </div>
                    <div className="content-price">
                        <h4>
                            R$<span> <span className="maior">1.019,</span> 94</span>
                        </h4>
                        <br />
                        
                    </div>
                    </div>
                </a>
            </div>
            
          </div>
          {/* content-flex */}
        </div>
        {/* container */}
      </section>
      {/* -section-cards */}
      <section className="novidades">
        <div className="container">
          <div className="banner-fundo"></div>
          {/* banner-fundo */}
        </div>
        {/* container */}
      </section>
      </div>
  );
};

export default Home;
