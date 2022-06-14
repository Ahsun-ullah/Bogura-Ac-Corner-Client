import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { Navigate } from 'react-router';
import axiosPrivate from '../../Api/AxiosPrivate';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect( () =>  {

        const getOrders = async() => {
            const email = user.email;
            const url = `https://powerful-bastion-09933.herokuapp.com/orders?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    Navigate('/login')
                }
            }
        }
            getOrders();
    }, [user])
    return (
        <div>
            <h2>
                Your Orders: {orders.length}
            </h2>
        </div>
    );
};

export default Orders; 