import React from 'react';
import './styles/carousel.css';
import 'bulma/css/bulma.css';
import 'glider-js/glider';
import 'glider-js/glider.css';
import GliderComponent from 'react-glider-carousel';
import Image1 from './carousel-images/image1.jpg';
import Image2 from './carousel-images/image2.jpg';
import Image3 from './carousel-images/image3.jpg';


class Carousel extends React.Component {
    

    componentDidMount(){
        this.handleCarousel();
    }

    handleCarousel(){
        console.log("I'm Here");
    }

    render() {


        return(
            <section className="section__carousel">

                <GliderComponent className="slider"
                    hasArrows={false}
                    hasDots={true}
                >
                    <div className="carousel__item">
                        <img src={Image1} alt=""/>
                    </div>
                    <div className="carousel__item">
                        <img src={Image2} alt=""/>
                    </div>
                    <div className="carousel__item">
                        <img src={Image3} alt=""/>
                    </div>
                </GliderComponent>

                <div className="carousel__indicator" role="tablist">

                </div>
            </section>
        )
    }
}

export default Carousel;