import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Registration = () => {
  const [errMessage, setErrMessage] = useState('')
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    setErrMessage('')
    if (password.length < 6) {
      setErrMessage('password cannot be less then 6 character')
      return
    }
    else if (!/[A-Z]/.test(password)) {
      setErrMessage('password must have a upper case letter')
      return
    }
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrMessage('password must have a special character')
      return
    }
    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })


  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>

          </form>
          {
            errMessage && <p className='ml-3 p-3 text-fuchsia-700 mb-3' >{errMessage}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Registration;