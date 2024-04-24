import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  //   console.log(location);
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return <>{children}</>;
  }
  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivetRoute;
