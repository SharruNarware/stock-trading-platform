import React from "react";

function RightSec({
  imageURL,
  productName,
  ProductDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-4" style={{marginTop:"10%"}}>
                <h1 className="fs-2 mt-5 mb-4" style={{ color: "#534f4f" }}>
                {productName}
                </h1>
                <p style={{ fontSize: "1.35rem", color: "#555353", lineHeight: "2" }}>
                {ProductDescription}
                </p>
                <a href={learnMore} className="fs-4" style={{ textDecoration: "none" }}>
                Learn more <i class="fa-solid fa-arrow-right"></i>
                </a> 
            </div>
            <div className="col-1"></div>
            <div className="col-7">
                <img src={imageURL} style={{ width: "105%" }} />
            </div>
        </div>
    </div>
  );
}

export default RightSec;
