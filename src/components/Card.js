import React, { useState } from "react";


export default function Card({id, info, price, name, image , removeTourHandler}) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....  `;

  function readmoreHandler (){
    setReadmore(!readmore);
  }


  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
      <div className="tour-details">
        <h4 className="tour-price">$ {price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>

      <div className="descripation">{description}
      <span onClick={readmoreHandler} className="read-more">
        {readmore ? 'Show less ': `Read More`}
        </span>
        </div>
      </div>
      

        <button className="btn-red" onClick={()=> removeTourHandler(id)}> Not Intrested</button>

    </div>
   
  );
}
