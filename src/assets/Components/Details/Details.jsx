
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const details = useLoaderData();
    const { _id } = useParams();

    const detail = details.find(detail => detail._id === _id);

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
                <Link to={`/cart/${detail._id}`}><button className="btn btn-outline btn-error">Add To Cart</button></Link>
            </div>
        </div>

    );
};

export default Details;