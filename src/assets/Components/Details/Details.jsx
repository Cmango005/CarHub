
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../providers/AuthProvider";


const Details = () => {

    const details = useLoaderData();
    const { _id } = useParams();
    const detail = details.find(detail => detail._id === _id);
    const { user } = useContext(AuthContext)
    const [mongoUser, setMongoUsers] = useState()
    const [CartProduct, setCartProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                const mongoUser = data.find(u => u.email == user?.email)
                console.log(mongoUser);
                setMongoUsers(mongoUser);
            })

    }, [user])
    useEffect(() => {
        if (mongoUser && Array.isArray(mongoUser.Cart)) {
            setCartProduct(mongoUser.Cart);
        }

    }, [mongoUser, CartProduct]);
    const handleCart = () => {
        const updatedCart = [...CartProduct, detail];
        const newUser = {
            Cart: updatedCart
        };

        fetch(`http://localhost:5000/user/${mongoUser._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    setCartProduct(updatedCart);
                    toast('Added to Cart');
                }
            });
    };
    return (

        <div className="flex flex-col justify-center items-center p-6">
            <div className="flex  justify-center items-center p-6 gap-4" >
                <div className="w-5/12 "><img className="rounded-2xl " src={detail.photo} alt="" /></div>
                <div className=" w-6/12 space-y-3">
                    <p className="font-bold text-2xl">Product Name: {detail.name}</p>
                    <p className="font-bold text-2xl">Brand: {detail.brand}</p>
                    <p className="font-extrabold text-xl">Details: {detail.description}</p>
                    <p className="font-bold text-2xl">Price: {detail.price}$</p>
                </div>
            </div>
            <div>
                <button onClick={handleCart} className="btn btn-outline btn-error">Add To Cart</button>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Details;