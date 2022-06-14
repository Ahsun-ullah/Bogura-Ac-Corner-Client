import React from 'react';
import { useParams } from 'react-router';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);


    const handlePlaceholder = event => {
        event.preventDefault();
        const orders = {
            service: service.name,
            serviceId: serviceId,
            name: event.target.name.value,
            email: event.target.email.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://powerful-bastion-09933.herokuapp.com/orders', orders)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!');
                event.target.reset();
            }
        })
    }


    return (
        <div className='w-50 mx-auto'>
            <h2>Please order:{service.name}</h2>
            <form onSubmit={handlePlaceholder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled/>
                <input className='w-100 mb-2' type="text" name="service" placeholder='service' value={service.name} required readOnly disabled/>
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required/>
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required/>
                <input className='btn-btn-primary' type="submit" value="place Order" autoComplete='off' />
            </form>
        </div>
    );
};

export default Checkout;