import React from 'react';
import cat from '../../../images/sleeping cat.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center p-4'>Thats you search is not found</h1>
            <h1 className='text-center '>404</h1>
            <img className='w-100 ' src={cat} alt="" />
        </div>
    );
};

export default NotFound;