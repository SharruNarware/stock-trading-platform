import React from "react";

function LeftSec({
  imageURL,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <div className="col-8 mt-5">
            <img src={imageURL} style={{width:"80%"}}/>
        </div>
        <div className="col-4 mt-5">
            <h1 className="mb-4 mt-5 fs-2" style={{color:"#534f4f"}}>{productName}</h1>
            <p style={{fontSize:"1.35rem", color:"#555353", lineHeight:"2"}}>{ProductDescription}</p>
            <div className="row mb-4 mt-3">
                <div className="col fs-4"><a href={tryDemo}  style={{textDecoration:"none"}}>Try demo <i class="fa-solid fa-arrow-right"></i></a></div>
                <div className="col fs-4"><a href={learnMore}  style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a></div>
            </div>
            <div className="row mt-4">
                <div className="col"><a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a></div>
                <div className="col"><a href={appStore}><img src="media/images/appStoreBadge.svg"/></a></div>
            </div>
        </div>
      </div> 
    </div>
  );
}

export default LeftSec;
