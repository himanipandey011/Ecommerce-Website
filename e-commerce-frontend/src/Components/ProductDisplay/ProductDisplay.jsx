import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  const [selected, setSelected] = useState('');
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">M.R.P {product.old_price}</div>
          <div className="productdisplay-right-price-new">M.R.P {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div style = {{backgroundColor: selected === 'M'?'red':'white',color: selected === 'M'?'white':'black'}} onClick={()=> setSelected('M')}>M</div>
            <div style = {{backgroundColor: selected === 'L'?'red':'white',color: selected === 'L'?'white':'black'}} onClick={()=> setSelected('L')}>L</div>
            <div style = {{backgroundColor: selected === 'XL'?'red':'white',color: selected === 'XL'?'white':'black'}} onClick={()=> setSelected('XL')}>XL</div>
            <div style = {{backgroundColor: selected === 'XXL'?'red':'white',color: selected === 'XXL'?'white':'black'}} onClick={()=> setSelected('XXL')}>XXL</div>
          </div>
        </div>
        <button onClick={()=>{
          const productData = {...product, selected}
          addToCart(productData)
        }}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
