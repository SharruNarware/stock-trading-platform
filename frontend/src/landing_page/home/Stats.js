import React from 'react';
 
function Stats() {
    return ( 
        <div className='container mt-5 p-3 mb-5'>
            <div className='row mt-5 mb-5'>
                <div className='col-6 mt-5'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h2 className='mb-2 fs-4'>Customer-first always</h2>
                    <p className='mb-4 text-muted'>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='mb-2 fs-4'>No spam or gimmicks</h2>
                    <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h2 className='mb-2 fs-4'>The Zerodha universe</h2>
                    <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='mb-2 fs-4'>Do better with money</h2>
                    <p className='mb-4 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width: "95%", margin: "0 auto"}}/>
                    <div className='text-center'>
                        <a className='mx-4 fs-5 mt-2' href='#' style={{textDecoration: "none"}}>Explore our Products <i class="fa-solid fa-arrow-right"></i></a>
                        <a className='mx-4 fs-5 mt-2' href='#' style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;