import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetails = () => {
    let { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch('/properties.json')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                const foundService = data.filter(detail => detail.id == id)
                console.log(foundService);
                setServiceDetails(foundService);
            })
    }, [id])


    const { name, description, image, price, Beds, Baths, sqft } = serviceDetails[0] || {}
    return (
        <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className=" col-md-4">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >{name} <i className="fas fa-home text-primary "></i></strong></p>
                            <p className="card-text">{description} </p>

                            <p className="text-nowrap"><strong >Price:</strong>{price} <i className="fas fa-money-check-alt text-success"></i></p>

                            <p className="text-nowrap"><strong >Beds:</strong>{Beds}  <i className="fas fa-bed text-secondary"></i></p>

                            <p className="text-nowrap"><strong >Baths:</strong>{Baths} <i className="fas fa-bath text-info"></i></p>

                            <p className="text-nowrap"><strong >Sqft:</strong>{sqft} <i className="fas fa-ruler-horizontal text-warning "></i> </p>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default ServiceDetails;
