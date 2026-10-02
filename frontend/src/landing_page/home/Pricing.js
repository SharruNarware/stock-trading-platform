import React from 'react';
 function Pricing() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mt-5 mb-5'>
                <div className='col-4 mt-5 mb-5'>
                    <h1 className='mb-4 mt-3'>Unbeatable pricing</h1>
                    <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='mt-2' href='#' style={{textDecoration: "none"}}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2 mb-5'></div>
                <div className='col-6 mt-5 mb-5'>
                <div className='row text-center mb-5'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i> 0</h1>
                            <p className='fs-5'>Free equity delivery and<br/>direct mutual funds</p>
                        </div>
                         <div className='col p-3 border'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign"></i> 20</h1>
                            <p className='fs-5'>intraday and F&O</p>
                         </div>
                </div>
                </div>
            </div>
        </div>
    );
 }
 
 export default Pricing;