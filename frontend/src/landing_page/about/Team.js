import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return ( 
        <div className='conttainer p-5'>
            <div className='row p-5'>
                <hr className='mb-5'/>
                <h1 className='mt-3 mb-5 text-center'>People</h1>
                <div className='col-2'></div>
                <div className='col-3 text-center mt-3'>
                     <img src='media/images/nithinKamath.jpg' style={{borderRadius:"50%", width:"90%"}}/>
                     <h4 className='mt-4'>Nithin Kamath</h4>
                     <h5 className='mt-4 text-muted'>Founder, CEO</h5>
                </div>
                <div className='col-5 p-5' style={{lineHeight:"1.8", fontSize:"1.29rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>                   
                    <p>ing basketball is his zen.</p>
                    <p>Connect on <Link style={{textDecoration:"none"}}>Homepage</Link> / <Link style={{textDecoration:"none"}}>TradingQnA</Link> / <Link style={{textDecoration:"none"}}>Twitter</Link></p>
                </div>
                <div className='col-2'></div>
                </div>
            </div>
     );
}

export default Team;