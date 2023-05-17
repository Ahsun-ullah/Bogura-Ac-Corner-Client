import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://bogura-ac-corner-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div id="products" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5">Products</h1>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} service={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
