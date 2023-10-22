import { Link, useLoaderData, useParams } from "react-router-dom";
import { GrDocumentUpdate } from 'react-icons/gr';

const Products = () => {
    const allProducts = useLoaderData([]);
    const { brand } = useParams();
    const newProduct = allProducts.filter(pro => pro.brand === brand)
    if (newProduct.length==0){
    
         return <div>
            <p className="text-center text-lg font-extrabold p-10">Products are not available</p>
         
         </div>
    }
    return (
        <div className="grid grid-cols-2 gap-5 p-5 mx-auto container">
            

            { 
                 
                newProduct.map(item => <div className="card p-3 gap-5 card-side bg-base-100 shadow-xl" key={item._id}>
                    <figure><img className="rounded-md" src={item.photo} alt="" /></figure>
                    <div className="card-body">
                        <p>Name:{item.name}</p>
                        <p>Brand:{item.brand}</p>
                        <p>Price:{item.price}$</p>
                        <p>Rating:{item.rating}</p>
                        <div className=" flex gap-2">
                            <div><Link to={`/detail/${item._id}`}><button className="btn btn-sm">Details</button></Link></div>
                            <div><button type="submit" className="btn btn-sm"><GrDocumentUpdate></GrDocumentUpdate></button></div>
                        </div>
                       
                    </div>

                </div>)
               
            }

        </div>
    );
};

export default Products;