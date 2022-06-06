import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5'>
            <p><small>copyright @ {year} </small></p>
        </div>
    );
};

export default Footer;