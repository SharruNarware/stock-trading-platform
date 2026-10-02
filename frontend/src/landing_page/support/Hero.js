import React from 'react';

function Hero() {
    return ( 
        <div className='container' style={{margin:"0"}} >
            <div className='row p-5 text-center' style={{backgroundColor:"#006cc4", width:"100vw"}}>
                <div className='col'>
                    <h4 className='mt-3' style={{color:"whitesmoke"}}>Support portal</h4>
                </div>
                <div className='col'>
                    <h1></h1><a href='#' className='mt-5' style={{color:"whitesmoke", fontSize:"1.2rem"}} >Track Tickets</a>
                </div>
            </div>

            <div className='row mb-5' style={{backgroundColor:"#006cc4", width:"100vw"}}>
                    <div className='col-2'></div>
                    <div className='col-4' style={{marginBottom:"5%"}}>
                        <p className='mb-4' style={{paddingTop:"10%", color:"whitesmoke", fontSize:"1.6rem"}}>Search For an answer or browse help topics to create a ticket</p>
                        <p className='text-muted p-4 fs-5' style={{backgroundColor:"whitesmoke", borderRadius:"10px"}}>Eg: how do i activate F&Q, why is my order getting rejected..</p>
                        <a href='#' style={{color:"whitesmoke", fontSize:"1.2rem"}}>Track account opening</a> &nbsp; <a href='#' style={{color:"whitesmoke", fontSize:"1.2rem"}}>Track segment activation</a> &nbsp; <a href='#' style={{color:"whitesmoke", fontSize:"1.2rem"}}>Intraday</a> &nbsp; <a href='#' style={{color:"whitesmoke", fontSize:"1.2rem"}}>margins</a> &nbsp; <a href='#' style={{color:"whitesmoke", fontSize:"1.2rem"}}>Kite user manual</a>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-5 mt-2'>
                        <h1 className='mt-5 fs-2' style={{color:"whitesmoke"}}>Featured</h1>
                        <ol className='fs-5 mt-3' style={{color:"whitesmoke"}}>
                            <li><a href='#' className='fs-5' style={{color:"whitesmoke"}}>Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href='#' className='fs-5' style={{color:"whitesmoke"}}>Latest intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
            </div>
        </div>
     );
}

export default Hero;