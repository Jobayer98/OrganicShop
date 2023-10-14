import { useContext } from "react";
import { UserContext } from "../context/Usercontext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user } = useContext(UserContext);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[60vh]">
  //       <span className="loading loading-bars loading-md text-[#8810d8]"></span>
  //     </div>
  //   );
  // }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
