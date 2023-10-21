import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
    const handleAddProduct = event=>{
        event.preventDefault();
        const form = event.target;
        const image =form.image.value;
        const name =form.name.value;
        const brand =form.brand.value;
        const price =form.price.value;
        const description =form.description.value;
        const type = form.type.value;
        const newProduct ={image, name, brand, price,description,type}
        console.log(newProduct)
        fetch("http://localhost:5000/products",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                toast("Product Added Successfully")
            }
           })
       
    }
    return (
        <div>
            <div>
                <h2 className="text-center p-6">Add Product</h2>
                <form onSubmit={handleAddProduct} className="bg-slate-200" >

                    <div className="flex flex-col items-center p-6">
                    <div className="flex justify-center items-center ">
                        <div className="p-10">
                            <div className="form-control">
                                <label>Image:</label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Image URL" className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name" className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label>Brand Name:</label>
                                <input
                                    type="text"
                                    name="brand"
                                    placeholder="Brand Name" className="input input-bordered"
                                />
                            </div>
                        </div>

                        <div className="p-10 ">
                            <div className="form-control mb">
                                <label>Type:</label>
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
                                <label>Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price" className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label>Short Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Text" className="input input-bordered"
                                />
                            </div>
                        </div>
                        
                    </div>
                    <button className="btn btn-wide hover:bg-red-500 hover:text-white" type="submit" value="Add Product">Add Product</button>
                    <ToastContainer />
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default AddProducts;