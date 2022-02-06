import React from 'react';

const Testimonial = ({ test }) => {
    const { name, address, description, img } = test;

    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} alt="" />
                <p>{description}</p>
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default Testimonial;