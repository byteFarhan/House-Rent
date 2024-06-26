import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
// import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    createUserWithEmail,
    setUser,
    // updateUserProfile,
  } = useAuth();
  const onSubmit = (data) => {
    // console.log(data);
    const { name, email, password, photoURL } = data;

    if (password.length < 6) {
      setError("Password must be longer than 6 characters!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one uppercase character!");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
      setError("Password should have at least one spacial character!");
      return;
    } else if (
      photoURL &&
      !/\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(photoURL)
    ) {
      setError("Please povide a valid photo URL!");
      return;
    }

    createUserWithEmail(email, password)
      .then((result) => {
        // console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          setUser({ ...result.user, displayName: name, photoURL });
          setSuccess("Registation successfull.");
          // e.target.reset();
          swal("Registation successfull.", {
            button: false,
          });
          navigate("/");
        });
        // setSuccess("Registation successfull.");
        //   // e.target.reset();
        //   swal("Registation successfull.", {
        //     button: false,
        //   });
        //   navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // console.log(createUserWithEmail);
  // const handleRegistation = (e) => {
  //   e.preventDefault();
  //   setSuccess("");
  //   setError("");
  //   // console.log(e.currentTarget);
  //   const form = new FormData(e.currentTarget);
  //   const name = form.get("name");
  //   const photoURL = form.get("photoURL");
  //   const email = form.get("email");
  //   const password = form.get("password");
  //   const isAccept = form.get("terms");
  //   // console.log(form, name, email, password, photoURL, isAccept);
  //   if (password.length < 6) {
  //     setError("Password must be longer than 6 characters!");
  //     return;
  //   } else if (!/[A-Z]/.test(password)) {
  //     setError("Password should have at least one uppercase character!");
  //     return;
  //   } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
  //     setError("Password should have at least one spacial character!");
  //     return;
  //   } else if (
  //     photoURL &&
  //     !/\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(photoURL)
  //   ) {
  //     setError("Please povide a valid photo URL!");
  //     return;
  //   } else if (!isAccept) {
  //     setError("Please accept our terms & conditions!");
  //     return;
  //   }
  //   createUserWithEmail(email, password)
  //     .then((result) => {
  //       // console.log(result.user);
  //       updateProfile(result.user, { displayName: name, photoURL: photoURL });
  //       setSuccess("Registation successfull.");
  //       e.target.reset();
  //       swal("Registation successfull.", {
  //         button: false,
  //       });
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  return (
    <section>
      <Helmet>
        <title>House Rent | Register</title>
      </Helmet>
      <div className="py-6 lg:bg-[#F3F3F3] px-5 md:px-0 font-work-sans">
        <div className="max-w-[1280px] mx-auto"></div>
        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded lg:bg-base-100 bg-[#F3F3F3]">
            <h3 className="text-[#403F3F] text-3xl font-semibold text-center pt-10">
              Register your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10" />
            <form onSubmit={handleSubmit(onSubmit)} className="pb-0 card-body">
              {/* <form onSubmit={handleRegistation} className="pb-0 card-body"> */}
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  {...register("name", { required: true })}
                  // required
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Photo URL/(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  // required
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  {...register("email", { required: true })}
                  // required
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
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
                    {...register("password", { required: true })}
                    // required
                  />
                  {errors.password && (
                    <span className="text-red-600">This field is required</span>
                  )}
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-3"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>

                <div className="flex gap-1 mt-3">
                  <input type="checkbox" name="terms" />
                  <label htmlFor="terms">
                    <span>
                      Accept{" "}
                      <a
                        href="#terms"
                        className="text-pink-600 transition-all delay-100 hover:underline"
                      >
                        Term & Conditions
                      </a>
                    </span>
                  </label>
                </div>
              </div>
              {success && <p className="text-sm text-gray-700">{success}</p>}
              {error && <p className="text-sm text-red-700">{error}</p>}
              <div className="mt-2 form-control">
                <button className="text-white bg-navy btn hover:bg-green">
                  Register
                </button>
              </div>
            </form>
            <div className="px-5 pb-5">
              <SocialLogin />
              <p className="my-3 text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-pink-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>

            {/* </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
