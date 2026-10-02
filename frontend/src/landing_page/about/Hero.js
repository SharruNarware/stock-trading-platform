import React from "react";

function Hero() {
  return (
    <div className="container mt-3 p-5">
      <div className="row">
        <h1 className="fs-3 text-center p-5 mt-5 mb-3">
          We pioneered the discount broking model in India.<br/> Now, we are breaking
          ground with our technology.
        </h1>
        <hr className="text-muted mt-5 mb-5" />
        <div className="row mt-5" style={{margin: "0 auto"}}>
          <div className="col fs-5 text-muted p-5" style={{lineHeight:"1.8"}}>
            <p className="mb-4">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="mb-4">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.8+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col fs-5 text-muted p-5" style={{lineHeight:"1.8"}}>
            <p className="mb-4">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="mb-4">
              <a href="#" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our <a href="#" style={{textDecoration:"none"}}>Blog</a> or see what the media is <a href="#" style={{textDecoration:"none"}}>Saying about us</a> or learn more about our business and product
              <a href="#" style={{textDecoration:"none"}}>philosophies</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
