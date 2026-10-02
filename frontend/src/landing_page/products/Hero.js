import React from 'react';

function Hero() {
    return ( 
        <div className='container p-2'>
            <div className='row text-center mt-5 mb-5'>
                <h1 className='mt-5 mb-3' style={{color:"#4e4b4b", fontSize:"2.3rem"}}>Zerodha Products</h1>
                <p className='fs-3' style={{color:"#656060"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-4 text-muted mb-5'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
            <hr style={{marginTop:"8%", color:"#b4abab"}}/>
        </div>
     );
}

export default Hero;