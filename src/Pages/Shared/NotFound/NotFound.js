import React from 'react';
import sleeping from '../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div className='container justify-content-center'>
            <h2 className='text-primary text-center'>Doctor is sleeping</h2>
            <img className='w-50' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;