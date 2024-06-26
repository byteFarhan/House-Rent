import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
