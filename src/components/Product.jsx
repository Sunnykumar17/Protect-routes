import { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
   
    setProduct(data);
  };
  return (
    <div style={{ margin: "50px" }}>
      <h2 style={{ color: "yellow" }}>Product Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet ad
        suscipit natus voluptas quae aperiam, hic necessitatibus soluta sequi
        unde excepturi, commodi optio ex a neque quo perspiciatis modi
        perferendis voluptatum laudantium vel consectetur? Officia, aliquid iste
        debitis deserunt ipsum commodi est a, maiores consequatur necessitatibus
        illum enim quibusdam voluptas. Quae, animi provident, laborum tenetur a
        reiciendis ipsam, quod ex tempore unde tempora.
      </p>
      {
        product.length > 0 ? <div className="container">
          {
            product.map((ele, idx) => {
              return <div className="cardstyle" key={idx }>
                <h2 > { ele.category}</h2>
                <img src={ ele.image} alt="img" width={200} height={200} />
                <h3 >{ele.title}</h3>
                <p >${ele.price}</p>
                <Link to={`/productdetails/${ele.id}`}><button>ProductDetails</button></Link>
              </div>
            })
          }
        </div>:<h2>No Data Found</h2>
      }
    </div>
  );
};

export default Product;
