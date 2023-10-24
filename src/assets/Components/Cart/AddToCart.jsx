import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";




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
    return (
        <div>

            {
                cart.map(cart => <div key={cart._id}>
                    <img src={cart.photo} alt="" />
                    <p>Name:{cart.name}</p>
                    <p>Brand:{cart.brand}</p>
                    <p>Price:{cart.price}</p>
                </div>)
            }
        </div>
    );
};

export default AddToCart;