
import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import {
  MediaRenderer,
  useContract,
  useContractMetadata,
  Web3Button,
} from "@thirdweb-dev/react";

import img1 from '../../assets/images/slider/bg-slider.png'
import img2 from '../../assets/images/slider/slider-2.png'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'
import { Link } from 'react-router-dom';




Banner01.propTypes = {
    data : PropTypes.array,
};

function Banner01(props) {
    const {data} = props;
    
    
    
    
    return (
        <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home home1"
                            loop= {true}
                        >
                        {
                            data.slice(0,2).map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="tf-slider-item">
                                        <div className="content-inner">
                                            <h1 className="heading">
                                                #NEWS, #WORLD, #PEOPLE,<span></span> #ART, #SPORT...  
                                                <img src={img1} alt="Binasea" />  
                                            </h1>
                                            <p className="sub-heading">{idx.desc}</p>
                                            <div className="btn-slider ">
                                            <Web3Button
          contractAddress={"0x36a52a97655bB48D888758F554B1294c691f8688"}
          action={(contract) => contract.erc721.claim(1)}
          onSuccess={() => alert("Claimed!")}
          onError={(error) => alert(error.message)}
        >
          Mint NFT
        </Web3Button>
                                                
                                            </div>
                                        </div>
                                        <div className="image">
                                            <div className="img-slider-main ani5"><img src={idx.img} alt="Binasea"/></div>
                                            
                                            
                                            <div className="current-bid ">
                                                <div className="title">Price</div>
                                                <div className="price">{idx.price}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner01;