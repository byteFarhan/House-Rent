import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { updateProfile, updateEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
const UpdateProfile = () => {
  const { user, setUser } = useAuth();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const photoURL = form.get("photoURL");
    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    })
      .then(() => {
        // Profile updated!
        setUser({ ...user, displayName, photoURL });
        swal("Profile has been updated.", {
          button: false,
        });
      })
      .catch((error) => {
        // An error occurred
        swal(error.message, {
          button: false,
        });
      });
    // updateEmail(auth.currentUser, "user@example.com")
    //   .then(() => {
    //     // Email updated!
    //     swal("Email has been updated.", {
    //       button: false,
    //     });
    //   })
    //   .catch((error) => {
    //     // An error occurred
    //     swal(error.message, {
    //       button: false,
    //     });
    //   });
  };
  return (
    <section>
      <Helmet>
        <title>House Rent | Update Profile</title>
      </Helmet>
      <div className="py-6 px-5 md:px-0 lg:bg-[#F3F3F3]">
        <div className="max-w-[1280px] mx-auto"></div>
        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded lg:bg-base-100 bg-[#F3F3F3]">
            <h3 className="text-[#403F3F] text-3xl font-semibold text-center pt-10">
              Update your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10" />
            <form onSubmit={handleUpdateProfile} className="pb-0 card-body">
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  defaultValue={user?.displayName}
                  //   required
                />
              </div>
              {/* <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  defaultValue={user?.email}
                  //   required
                />
              </div> */}
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Photo URL/(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  defaultValue={user?.photoURL}
                  // required
                />
              </div>
              <div className="my-3 mb-6 form-control">
                <button className="text-white bg-navy btn hover:bg-green">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
