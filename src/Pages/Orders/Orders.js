import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import axiosPrivate from "../../Api/AxiosPrivate";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/orders?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [navigate, user?.email]);
  return (
    <div>
      <div className="w-50 mx-auto">
        <h2 className="text-center">Your orders: {orders.length}</h2>
        <div className="">
          {orders.map((orders) => (
            <div key={orders._id}>
              <p>
                {orders.email} : {orders.service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
