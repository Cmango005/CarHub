import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Home = () => {
    const [brands , setBrands]=useState([]);
    useEffect(()=>{
       fetch("http://localhost:5000/")
       .then(res => res.json())
        .then(data =>setBrands(data));
    },[brands])
    return (
        <div>
            <section className='flex justify-center  items-center mx-auto container'>
                <div className="mx-auto bgimg bg-no-repeat container mb-5 w-4/6">
                    <p data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='mx-6 mt-48 lg:mx-64 text-center text-rose-50 font-extrabold text-xl '>
                        SCROLL DOWN FIND YOUR DREAM CARS..... <br /> BUY YOUR DREAM CAR FROM OUR SITE
                    </p>
                </div>
            </section>
            <section className='mx-auto container'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
                {
                    brands.map(brand => <Link to={`/products/${brand.brand}`} key={brand.id}>
                    <div  className="card w-96 bg-base-100 shadow-2xl">
                     <figure><img className="h-56 w-full" src={brand.img} alt="" /></figure>
                     <div className="card-body"><p className="text-center font-bold text-xl">{brand.brand}</p></div>
                    </div></Link>)
                }
                </div>
            </section>

            <section className='mx-auto container'>

                <div className="hero min-h-screen bg-base-200">
                    <div className='mb-96'>
                        <p className='font-bold text-2xl text-center'>IF U HAVE ANY COMPLAIN ABOUT US FEEL FREE TO FILL UP THIS COMPLAIN BOX</p>
                    </div>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className=" flex-shrink-0 w-full bg-slate-100  mt-16 rounded-xl shadow-2xl p-1 lg:p-6 ">
                            <form className="">
                                <div className='flex gap-4'>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">Your Name:</label>
                                            <input type="text" placeholder="name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">Your Phone:</label>
                                            <input type="number" placeholder="phone" className="input input-bordered" required />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">Your Complain:</label>
                                            <textarea type="text" placeholder="your complain" className="input h-56 w-52" required></textarea>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                </div>
                                <div className="form-control text-center mt-6">
                                    <button className="btn btn-info">Submit Complain</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;