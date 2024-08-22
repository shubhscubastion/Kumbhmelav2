import React from "react";

function ListofTents({ imgsrc, tenttype, price, id, getTentid }) {
  function HandleButtonClick() {
    getTentid(id);
  }

  return (
    <div className="tentImage">
      <img src={imgsrc} alt={tenttype} />
      <h3>{tenttype}</h3>
      <p>{price}</p>
      <button onClick={HandleButtonClick}>Book Now</button>
    </div>
  );
}

export default ListofTents;
