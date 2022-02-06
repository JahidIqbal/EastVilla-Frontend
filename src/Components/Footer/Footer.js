import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="mt-4" >
            <div className="d-flex justify-content-center bd-highlight col-md-12 col-sm-12  px-5 bg-light w-100 " style={{ background: `linear-gradient(to right, #00d2ff, #3a7bd5)` }}>

                <div className="p-2  justify-content-center align-items-center bd-highlight ">
                    <div>

                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea type="text" className="form-control" placeholder="message" id="pwd" />
                            </div>
                            <br />
                            <button className="btn btn-light" >Send</button>
                        </form>
                    </div>

                    <div className="mt-4">
                        <p className='text-light'>Stay Connected with our social Networks</p>
                        <Link className="fa fa-facebook px-2 text-decoration-none text-light" to=""></Link>
                        <Link className="fa fa-linkedin px-2 text-decoration-none text-light" to=""></Link>
                        <Link className="fa fa-twitter  px-2 text-decoration-none text-light" to=""></Link>
                        <Link className="fa fa-instagram px-2 text-decoration-none text-light" to=""></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;