import React from "react";

import owner1 from "../../../images/owners/owner1.jpg";
import owner2 from "../../../images/owners/owner2.jpg";

import Owner from "../Owner/Owner";

const owners = [
  { id: 1, name: "Mohammad Ali", img: owner1 },
  { id: 2, name: "Mahim Hossain", img: owner2 },
];

const Owners = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center mt-5">Owner Of This Workshop</h2>
      <div className="row mt-5">
        {owners.map((owner) => (
          <Owner key={owners.id} owner={owner}></Owner>
        ))}
      </div>
    </div>
  );
};

export default Owners;
