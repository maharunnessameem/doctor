import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, address, time } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Time: {time}</p>
            <p><small>{address}</small></p>
            {/* <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button> */}
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Appoinment</button>
        </div>
    );
};

export default Service;