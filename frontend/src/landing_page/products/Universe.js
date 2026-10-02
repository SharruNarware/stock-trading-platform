import React from "react";

function Universe() {
  return (
    <div className="container text-center p-5" style={{ marginTop: "8%" }}>
      <p className="fs-3 text-center text-muted mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <div className="row mt-5 p-5 text-center" >
        <h1>The Zerodha Universe</h1>
        <p className="fs-4 mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col p-5 text-muted">
          <div>
            <img src="media/images/smallcaseLogo.png" style={{width:"80%"}}/>
            <p className="mb-5 mt-2 p-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div>
            <img src="media\images\streakLogo.png" className="mt-5" style={{width:"70%"}}/>
            <p className="mb-2 mt-2 p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col p-5 text-muted">
          <div>
            <img src="media/images/sensibullLogo.svg" style={{width:"80%"}} />
            <p className="mb-5 mt-2 p-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div>
            <img src="media/images/zerodhaFundhouse.png" className="mt-5" style={{width:"80%"}}/>
            <p className="mb-2 mt-2 p-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col p-5 text-muted">
          <div>
            <img src="media\images\goldenpiLogo.png" style={{width:"80%"}}/>
            <p className="mb-5 mt-2 p-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div>
            <img src="media\images\dittoLogo.png" className="mt-5" style={{width:"60%"}}/>
            <p className="mb-2 mt-2 p-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
      <button className='p-2 btn btn-primary fs-4 mb-5' style={{width:"30%", margin:"0 auto", color:"white"}}>sign up for free</button>
    </div>
  );
}

export default Universe;
