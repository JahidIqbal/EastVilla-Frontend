import React from 'react';
import banner1 from '../../Images/Banner 1.jpg'
import banner2 from '../../Images/Banner 2.jpg'
import banner3 from '../../Images/Banner 3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img src={banner2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption " >
                        <p className="text-white"> <em>EastVilla helps you to get your dream land!</em></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption " >
                        <p className="text-dark"> <em>EastVilla never compromises with their Quality!</em></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption " >
                        <p className="text-white"> <em>EastVilla makes your Villa more beautiful!</em></p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;