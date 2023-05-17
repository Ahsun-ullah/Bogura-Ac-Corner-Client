import React from "react";

const Owner = ({ owner }) => {
  const { name, img } = owner;
  return (
    <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-6 col-xxl-6 m-auto">
      <div
        className="card align-self-center mx-auto mb-4 "
        style={{ width: "16rem" }}
      >
        <img src={img} className="card-img-top p-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owner;
