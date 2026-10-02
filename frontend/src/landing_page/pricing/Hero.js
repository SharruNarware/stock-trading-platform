import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1 className='fs-1 mt-5' style={{color:"#504e4e"}}>Charges</h1>
                <p className='fs-3 text-muted mb-5 mt-3'>List of all charges and taxes</p>
                <hr className='mt-5 mb-5 text-muted'/>
                <div className='col-4 mt-5 p-5 text-center'>
                    <img src='media\images\pricingEquity.svg'/>
                    <h1 style={{color:"#504e4e"}} className='mt-4'>
                        Free equity delivery
                    </h1 >
                    <p className='mt-4 text-muted fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 mt-5 text-center p-5'>
                    <img src='media\images\intradayTrades.svg'/>
                    <h1 style={{color:"#504e4e"}} className='mt-4'>
                        Intraday and F&O trades
                    </h1>
                    <p className='mt-4 text-muted fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mt-5 text-center p-5'>
                     <img src='media\images\pricing0.svg'/>
                    <h1 style={{color:"#504e4e"}} className='mt-4'>
                        Free direct MF
                    </h1>
                    <p className='mt-4 text-muted fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;