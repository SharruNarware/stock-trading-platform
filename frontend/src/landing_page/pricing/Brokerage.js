import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <hr className='mb-5 text-muted'/>
             <div className='row mt-5 mb-5'>
                <div className='col-9 -4'>
                    <h3 className='fs-4 text-center mt-5'>
                        <a href='#' style={{textDecoration:"none"}}>Brokerage calculator</a>
                    </h3>
                    <ul className='mt-5'>
                        <li className='mb-4 text-muted' style={{lineHeight:"l.5"}}>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li className='mb-4 text-muted' style={{lineHeight:"l.5"}}>Digital contract notes will be sent via e-mail.</li>
                        <li className='mb-4 text-muted' style={{lineHeight:"l.5"}}>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className='mb-4 text-muted' style={{lineHeight:"l.5"}}>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className='mb-4 text-muted' style={{lineHeight:"l.5"}}>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='mb-4 text-muted' style={{lineHeight:"l.5"}}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-3 text-center mt-5'>
                    <h3 className='fs-4'>
                        <a href='#' style={{textDecoration:"none"}}>List of charges</a>
                    </h3>
                </div>
             </div>
        </div>
     );
}

export default Brokerage;