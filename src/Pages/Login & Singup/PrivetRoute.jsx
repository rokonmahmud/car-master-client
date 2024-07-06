/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center my-60">
        <div className="w-10 h-10 flex gap-2 items-center justify-center">
          <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-[#ff3811]"></div>
          <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-[#ff3811]"></div>
          <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-[#ff3811]"></div>
        </div>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to={"/login"} replace />;
};

export default PrivetRoute;
