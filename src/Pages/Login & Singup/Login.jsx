import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const {signin} = useContext(AuthContext)

  const handaleLogin = e =>{
    e.preventDefault();
      const from = e.target;
    
      const email = from.email.value;
      const password = from.password.value;
      console.log(email, password);
      signin(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);

          navigate(location?.state? location.state: "/")
      })
      .catch(error => console.log(error))
    
  }


  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <div className="mr-8">
              <img src={loginImg} alt="" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 border-2 border-gray-100">
            <h2 className="text-3xl text-center  font-bold my-4 text-[#ff3811]">
              Login
            </h2>
            <form onSubmit={handaleLogin} className="card-body">
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
                <input
                  type="submit"
                  value="Login"
                  className="btn rounded-none  
                bg-[#FF3811] text-white
                 border-orange-600 hover:bg-[#FF3811]"
                />
              </div>
            </form>
            <SocialLogin />
            <p className="text-center my-4">
              Creat an acount?{" "}
              <Link className="text-[#FF3811] text-center" to={"/signup"}>
                Sign up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
