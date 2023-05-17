import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const Proceed = window.confirm("Are you sure");
    if (Proceed) {
      const url = `https://bogura-ac-corner-server.vercel.app/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div>
      <div className="w-50 mx-auto">
        <h2 className="text-center"> Manage Your Products</h2>
        <div className="flex">
          {services.map((service) => (
            <div key={service._id}>
              <h4>
                {service.name}{" "}
                <button
                  className="btn-info"
                  onClick={() => handleDelete(service._id)}
                >
                  X
                </button>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
