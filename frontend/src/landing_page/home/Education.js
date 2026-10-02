import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row mt-5 mb-5'>
                <div className='col-5 mt-5'>
                    <img src='media/images/education.svg' style={{width: "100%"}}/>
                </div>
 
                <div className='col-1'></div>
                <div className='col-6 mt-5 mb-5'>
                        <h2 className='mt-5 mb-4'>Free and open market education</h2>
                        <p className='fs-5 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a className='mt-2 fs-5 ' href='#' style={{textDecoration: "none"}}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                        <p className='mt-5 text-muted fs-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a className='mt-2 mb-5 fs-5' href='#' style={{textDecoration: "none"}}>Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;