import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddToCart = () => {


    const { user } = useContext(AuthContext)
    const mongoUsers = useLoaderData();
    const mongoUser = mongoUsers.find(use => use.email == user?.email)
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (mongoUser && Array.isArray(mongoUser.Cart)) {
            setCart(mongoUser.Cart);
        }



    }, [mongoUser]);

    const handleDelete = (id, product) => {
        const updatedCart = cart.filter(pro => pro.name != product.name)
        setCart(updatedCart)
        
        const updatedUser = { updatedCart }
        
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount == 1) {
                    toast('Update successful')
                }
            })

    }
    return (
        <div>

            {
                cart.map(product => <div key={product._id} className="flex">
                    <figure><img src={product.photo} alt="" /></figure>
                    <div><p>Name:{product.name}</p>
                    <p>Brand:{product.brand}</p>
                    <p>Price:{product.price}</p>
                    <button onClick={() => handleDelete(mongoUser._id,product)} className="btn btn-outline btn-error">Delete</button></div>
                    <ToastContainer />
                </div>)
            }
        </div>
    );
};

export default AddToCart;