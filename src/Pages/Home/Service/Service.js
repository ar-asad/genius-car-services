import React from 'react';
import './Service.css';
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetails = () => {
        navigate(`/service/${id}`);
    }

    return (
        <div id='service' className=' service-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;