import React from 'react';
import Layout from '../components/layout';
import 'bulma/css/bulma.css';
import Carousel from '../components/carousel';
import './styles/index.css';


import InternetIcon from '../images/services-icons/internet.svg';

class Index extends React.Component {
  render(){
    return(
      <Layout>
        <Carousel />

        <section className="section services">
          <div className="container">
            <div className="section__title has-text-centered">
              <h1>SERVICIOS</h1>
            </div>
            <div className="columns is-multiline">
              <div className="column is-4">
                  <div className="services__item">
                    <div className="services__container-icon">
                      <img className="services__icon" src={InternetIcon} alt="Icon"/>
                    </div>
                    <div className="services__item-name has-text-centered">
                      <h1 className="title">SERVICE NAME</h1>
                    </div>
                    <div className="separator__container">
                      <hr className="separator"/>
                    </div>
                    <div className="services__item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos dolores ab vel labore enim at qui ipsum cum, alias reprehenderit natus distinctio quibusdam praesentium voluptatum velit impedit consectetur eveniet.
                    </div>
                  </div>
              </div>

              <div className="column is-4">
                  <div className="services__item">
                    <div className="services__container-icon">
                      <img className="services__icon" src={InternetIcon} alt="Icon"/>
                    </div>
                    <div className="services__item-name has-text-centered">
                      <h1 className="title">SERVICE NAME</h1>
                    </div>
                    <div className="separator__container">
                      <hr className="separator"/>
                    </div>
                    <div className="services__item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos dolores ab vel labore enim at qui ipsum cum, alias reprehenderit natus distinctio quibusdam praesentium voluptatum velit impedit consectetur eveniet.
                    </div>
                  </div>
              </div>
              <div className="column is-4">
                  <div className="services__item">
                    <div className="services__container-icon">
                      <img className="services__icon" src={InternetIcon} alt="Icon"/>
                    </div>
                    <div className="services__item-name has-text-centered">
                      <h1 className="title">SERVICE NAME</h1>
                    </div>
                    <div className="separator__container">
                      <hr className="separator"/>
                    </div>
                    <div className="services__item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos dolores ab vel labore enim at qui ipsum cum, alias reprehenderit natus distinctio quibusdam praesentium voluptatum velit impedit consectetur eveniet.
                    </div>
                  </div>
              </div>

              <div className="column is-4">
                  <div className="services__item">
                    <div className="services__container-icon">
                      <img className="services__icon" src={InternetIcon} alt="Icon"/>
                    </div>
                    <div className="services__item-name has-text-centered">
                      <h1 className="title">SERVICE NAME</h1>
                    </div>
                    <div className="separator__container">
                      <hr className="separator"/>
                    </div>
                    <div className="services__item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos dolores ab vel labore enim at qui ipsum cum, alias reprehenderit natus distinctio quibusdam praesentium voluptatum velit impedit consectetur eveniet.
                    </div>
                  </div>
              </div>

              <div className="column is-4">
                  <div className="services__item">
                    <div className="services__container-icon">
                      <img className="services__icon" src={InternetIcon} alt="Icon"/>
                    </div>
                    <div className="services__item-name has-text-centered">
                      <h1 className="title">SERVICE NAME</h1>
                    </div>
                    <div className="separator__container">
                      <hr className="separator"/>
                    </div>
                    <div className="services__item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos dolores ab vel labore enim at qui ipsum cum, alias reprehenderit natus distinctio quibusdam praesentium voluptatum velit impedit consectetur eveniet.
                    </div>
                  </div>
              </div>

              <div className="column is-4">
                  <div className="services__item">
                    <div className="services__container-icon">
                      <img className="services__icon" src={InternetIcon} alt="Icon"/>
                    </div>
                    <div className="services__item-name has-text-centered">
                      <h1 className="title">SERVICE NAME</h1>
                    </div>
                    <div className="separator__container">
                      <hr className="separator"/>
                    </div>
                    <div className="services__item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos dolores ab vel labore enim at qui ipsum cum, alias reprehenderit natus distinctio quibusdam praesentium voluptatum velit impedit consectetur eveniet.
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="About">

        </section>
      </Layout>
    )
  }
}

export default Index;
