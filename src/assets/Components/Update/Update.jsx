import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const product= useLoaderData();
    const {_id,name,brand,photo,price,description,type,rating}=product;
    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const updatedProduct ={photo,name,brand,price,description,type,rating}
        fetch(`  https://brand-assignment-server-mmwzcddhs-cmango005.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    toast("Update Successfully")
                }
            })
    }
    return (
        <div>
        <div className='mx-auto container'>
            <h2 className="text-center p-6">Update Product</h2>
            <form onSubmit={handleUpdateProduct} className="bg-slate-200" >

                <div className="flex flex-col form bg-no-repeat items-center p-5">
                    <div className="flex justify-center items-center gap-5 ">
                        <div className="">
                            <div className="form-control">
                                <label className='text-white'>Image:</label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL" defaultValue={photo} className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className='text-white'>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name" defaultValue={name} className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className='text-white'>Brand Name:</label>
                                <input
                                    type="text"
                                    name="brand"
                                    placeholder="Brand Name" defaultValue={brand} className="input input-bordered"
                                />
                            </div>
                        </div>

                        <div className=" ">
                            <div className="form-control mb">
                                <label className='text-white'>Type:</label>
                                <select name="type" defaultValue={type} className="input input-bordered">
                                    <option value="BMW">BMW</option>
                                    <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
                                    <option value="HYUNDAI">HYUNDAI</option>
                                    <option value="FERRARI">FERRARI</option>
                                    <option value="LAMBORGHINI">LAMBORGHINI</option>
                                    <option value="KOENIGSEGG">KOENIGSEGG</option>

                                </select>
                            </div>
                            <div className="form-control ">
                                <label className='text-white'>Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price" defaultValue={price} className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className='text-white'>Short Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Text" defaultValue={description} className="input input-bordered"
                                />
                            </div>

                        </div>


                    </div>
                    <div className="form-control">
                        <label className='text-white'>Rating:</label>
                        <input
                            type="text"
                            name="rating"
                            placeholder="Rating 0/10" defaultValue={rating} className="input input-bordered"
                        />
                    </div>
                    <button className="btn btn-wide hover:bg-red-500 hover:text-white mt-5" type="submit" value="UPDATE">Update Product</button>
                    <ToastContainer />
                </div>

            </form>
        </div>
    </div>
    );
};

export default Update;