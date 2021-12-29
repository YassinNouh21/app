import React from "react";
import {Categories} from '../data/products';
import './category.css'

function Category(props) {
  const [ShowHover, setShowHover] = React.useState(false);
  function handleMouseEnter(e){
    setShowHover(true);
  }
  return (
    <div id="make-3D-space">
      <div id="product-card" onMouseEnter={handleMouseEnter}>
        <div id="product-front">
          <div className="shadow"></div>
          <img
            src={props.img}
            alt=""
          />
          <div className="image_overlay"></div>
          <div id="explore" >Explore</div>
          <div className="stats">
            <div className="stats-container">{props.title}</div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Category;
