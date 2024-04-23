import { FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
// import googleLogo from "../../../assets/google-logo.png";
const SocialLogin = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        swal("Login successfull.", {
          button: false,
        });
        navigate("/");
      })
      .catch((error) => {
        swal(error.message, {
          button: false,
        });
      });
  };
  return (
    <div className="mb-3 space-y-3">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center w-full gap-2 text-xl btn-base btn-primary"
      >
        <FaGoogle /> Continue With
      </button>
      <button className="flex items-center justify-center w-full gap-2 text-xl btn-base btn-primary">
        <FaGithub />
        Continue With
      </button>
    </div>
  );
};

export default SocialLogin;
