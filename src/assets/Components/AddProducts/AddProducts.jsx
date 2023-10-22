import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Form.css"
const AddProducts = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const type = form.type.value;
        const rating = form.rating.value;

        const newProduct = { photo, name, brand, price, description, type, rating }
        console.log(newProduct)
        fetch("http://localhost:5000/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast("Product Added Successfully")
                }
            })

    }
    return (
        <div>
            <div className='mx-auto container'>
                <h2 className="text-center p-6">Add Product</h2>
                <form onSubmit={handleAddProduct} className="bg-slate-200" >

                    <div className="flex flex-col form bg-no-repeat items-center p-5">
                        <div className="flex justify-center items-center gap-5 ">
                            <div className="">
                                <div className="form-control">
                                    <label className='text-white'>Image:</label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="Photo URL" className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className='text-white'>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name" className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className='text-white'>Brand Name:</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        placeholder="Brand Name" className="input input-bordered"
                                    />
                                </div>
                            </div>

                            <div className=" ">
                                <div className="form-control mb">
                                    <label className='text-white'>Type:</label>
                                    <select name="type" className="input input-bordered">
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
                                        placeholder="Price" className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className='text-white'>Short Description:</label>
                                    <textarea
                                        type="text"
                                        name="description"
                                        placeholder="Text" className="rounded-lg h-56 w-56"
                                    />
                                </div>

                            </div>


                        </div>
                        <div className="form-control">
                            <label className='text-white'>Rating:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Rating 0/10" className="input input-bordered"
                            />
                        </div>
                        <button className="btn btn-wide hover:bg-red-500 hover:text-white mt-5" type="submit" value="Add Product">Add Product</button>
                        <ToastContainer />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProducts;