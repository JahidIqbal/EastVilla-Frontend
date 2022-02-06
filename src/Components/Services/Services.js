import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./properties.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=" mx-auto mt-5">
            {
                services.length === 0 ?
                    <div className="spinner-border text-info " role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    :
                    <div className=" mx-auto mt-5">
                        <h2 className=" fw-bolder display-4 text-uppercase w-100 mt-5 text-info"
                        >All luxurious Villa </h2>

                        <div className="row row-cols-1 row-cols-md-3 g-4" >

                            {
                                services.map(service => <Service key={service.id} service={service}></Service>)
                            }




                        </div>


                    </div>
            }

        </div>
    );
};

export default Services;