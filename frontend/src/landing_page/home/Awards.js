import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-3'>
            <div className='row mb-5'>
                <div className='col-6 mt-5 mb-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 mt-5 mb-5'>
                    <h1>Largest Stock broker in india</h1>
                    <p className='mb-3 mt-2'>2+ million zerodha clients contribute to cover 15% od all retail order  Volumes in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 p-3'>
                            <ul className='mb-2'>
                                <li className='mb-3'>Futures and options</li>
                                <li className='mb-3'>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 p-3'>
                            <ul>
                                <li className='mb-3'>Stocks & IPOS</li>
                                <li className='mb-3'>Direct mutual funds</li>
                                <li>Bonds and Govt. securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/presslogos.png' style={{width: "85%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;