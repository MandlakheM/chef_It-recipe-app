import React from "react";
import "./hero.css";

function hero() {
  return (
    <section className="gutter">
      <div className="bodyContainer">
        <div className="bodyText">
          <h2>Find recipes for your favourite food here</h2>
          <p>
            Choose from a diverse menu of our recipes featuring a delectable
            array of dishes crafted with the finest ingredients and culinary
            expertise. Our mission is to satisfy your cravings and elevate your
            dining experience, one delicious meal at a time.
          </p>
        </div>
      </div>
      <div className="explore">
        <h6>Explore our recipes</h6>
      </div>
    </section>
  );
}

export default hero;
