import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Signup = () => {

  const {createUser} = useContext(AuthContext);
  const {navigate} = useNavigate()
    const handleSignup = e =>{
     e.preventDefault();
      const from = e.target;
      const name = from.name.value;
      const email = from.email.value;
      const password = from.password.value;
      console.log(name, email, password);

      createUser(email, password)
      .then(result =>  {
        const user = result.user;
        console.log(user);
        navigate('/')
      })
      .then(error => console.log(error))
    }
    

    
    return (
        <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <div className="mr-8">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 border-2 border-gray-100">
            <h2 className="text-3xl text-center  font-bold my-4 text-[#ff3811]">Sign Up</h2>
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"  
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
               
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit"
                value="Sign In" 
                className="btn rounded-none  
                bg-[#FF3811] text-white
                 border-orange-600 hover:bg-[#FF3811]"
                 />
              </div>
            </form>
            <p className="text-center my-4">Already have an acount? <Link className="text-[#FF3811] text-center" to={'/login'}>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;