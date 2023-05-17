import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState([]);

  const handelAddProduct = (event) => {
    event.preventDefault();
    const url = `https://bogura-ac-corner-server.vercel.app/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  };

  return (
    <div>
      <div className="w-50 mx-auto border border-3 rounded-3 p-5 my-5">
        <h2 className="text-center text-danger mb-5 ">Add New Product</h2>
        <form
          method="post"
          encType="multipart/form-data"
          className="d-flex flex-column"
          onSubmit={handelAddProduct}
        >
          <input
            type="text"
            name="productName"
            className="mb-3"
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="productDesc"
            className="mb-3"
            placeholder="Description"
            required
          />
          <input
            name="productPrice"
            className="mb-3"
            placeholder="Price"
            type="number"
            required
          />
          <input name="productPicture" className="pb-4" type="file" required />

          <input
            className="align-self-center mb-2 mt-4 rounded-pill w-50"
            type="Submit"
            value={"Add Product"}
            readOnly
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
