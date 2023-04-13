import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    getData();
  },);
  const getData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
      console.log(data);
      setState(data);
    
  };
  return (
      <div className="productDetails">
          <h2 style={{color:"green"}}>{state.category}</h2>
          <img src={state.image} alt="img" width={200} height={200} />
          <h3>{state.title}</h3>
          <p>$ { state.price}</p>
    </div>
  );
};

export default ProductDetails;
