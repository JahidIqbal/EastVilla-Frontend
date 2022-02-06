import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import userPic from '../../Images/Banner 1.jpg';
import './Testimonials.css'
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const review = [
        {
            name: 'Rekob Ramya',
            description: 'They Provide Awesome Services.I also purchase Villa from them! They were Supported too.They never compromise with their quality.Hope They will provide more good services',
            address: 'USA',
            img: 'https://st.depositphotos.com/1003697/4971/i/600/depositphotos_49719803-stock-photo-business-man-working-on-laptop.jpg'
        },
        {
            name: 'Brandon Savage',
            description: 'They Provide Awesome Services.I also purchase Villa from them! They were Supported too.They never compromise with their quality.Hope They will provide more good services',
            address: 'Mexico',
            img: 'https://img.freepik.com/free-photo/pleased-handsome-businessman-pointing-person-making-good-point-nice-job-praising-employee-saying-well-done_176420-21751.jpg?size=626&ext=jpg'
        },
        {
            name: 'Steve Burns',
            description: 'They Provide Awesome Services.I also purchase Villa from them! They were Supported too.They never compromise with their quality.Hope They will provide more good services',
            address: 'New York',
            img: 'https://freedesignfile.com/upload/2017/05/Young-woman-holding-a-folder-businessman-Stock-Photo.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'They Provide Awesome Services.I also purchase Villa from them! They were Supported too.They never compromise with their quality.Hope They will provide more good services',
            address: 'Canada',
            img: 'https://cdn.pixabay.com/photo/2017/02/16/12/12/business-woman-2071342_960_720.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                <h4 className="fw-bolder display-4 text-uppercase w-100 mt-5 text-info">TESTIMONIALS</h4>
                <div className="text-center ">
                    <h4 className="fw-bolder  text-uppercase w-100">What Our Clients are Saying?</h4>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>

                            {
                                review.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} alt="" />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    review.map(test => {
                                        return (
                                            <Testimonial test={test} key={test._key} />

                                        )
                                    })
                            }


                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;