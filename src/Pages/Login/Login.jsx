import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import swal from "sweetalert";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInWithEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signInWithEmail(email, password)
      .then(() => {
        e.target.reset();
        swal("Login successfull.", {
          button: false,
        });
        e.target.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        swal(error.message, {
          button: false,
        });
      });
  };
  return (
    <section>
      <Helmet>
        <title>House Rent | Login</title>
      </Helmet>
      <div className="py-6 px-5 md:px-0 lg:bg-[#F3F3F3]">
        <div className="max-w-[1400px] mx-auto"></div>
        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded lg:bg-base-100 bg-[#F3F3F3]">
            <h3 className="text-[#403F3F] text-3xl font-semibold text-center pt-10">
              Login your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10" />
            <form onSubmit={handleLogin} className="pb-0 card-body">
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input rounded input-bordered w-full lg:bg-[#F3F3F3]"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-3"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
              </div>
              {success && <p className="text-sm text-gray-700">{success}</p>}
              {error && <p className="text-sm text-red-700">{error}</p>}

              <div className="mt-2 form-control">
                <button className="text-white bg-navy btn hover:bg-green">
                  Login
                </button>
              </div>
              <p className="my-3 text-center">
                {`Don't have any account? `}
                <Link
                  to={"/register"}
                  className="text-pink-600 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
            <div className="px-5 pb-5">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
