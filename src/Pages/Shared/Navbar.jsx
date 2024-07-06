import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const handleLogOut = ()=>{
      logout()
      .then(()=>{})
      .then(error => console.log(error))
  }

  console.log();
  
  const NaviateLink = (
    <>
      <li>
        <NavLink className={'text-xl hover:bg-white focos:bg-white text-black'} to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className={'text-xl hover:bg-white focos:bg-white text-black'} to={'/about'}>About</NavLink>
      </li>
      <li>
        <NavLink className={'text-xl hover:bg-white focos:bg-white text-black'} to={'/services'}>Services</NavLink>
      </li>
      
       { user?.email?
       <li>
        <NavLink className={'text-xl hover:bg-white focos:bg-white text-black'} to={'/mybooking'}>My Bookings</NavLink>
      </li>
      :
      <></>
      }
      
      <li>
        <NavLink className={'text-xl hover:bg-white focos:bg-white text-black'} to={'/contact'}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="w-10/12 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="" className="  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NaviateLink}
            </ul>
          </div>
          <Link to={'/'} className=" text-xl">
            <img className="m-2" src={logo} alt="" />
         </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NaviateLink}</ul>
        </div>
        <div className="navbar-end">
       { user?.email ?  <Link onClick={handleLogOut}  className="border-2 text-xl text-[#FF3811] w-24 rounded-lg text-center py-2 font-semibold h-12 border-[#FF3811] hover:before:bg-[#FF3811] before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">Logout</Link>
    

       : <Link to={'login'}  className="border-2 text-xl text-[#FF3811] w-24 rounded-lg text-center py-2 font-semibold h-12 border-[#FF3811] hover:before:bg-[#FF3811] before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">Login</Link>
      }
    
        </div>
      </div>
    </div>
  );
};

export default Navbar;
