import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center mt-5'>
                <h1 className='mt-5 mb-4'>404 Page Not Found</h1>
                <p className='mb-5 fs-5'>sorry, the page you are looking for does not exist</p>
            </div>
        </div>
     );
}

export default NotFound;