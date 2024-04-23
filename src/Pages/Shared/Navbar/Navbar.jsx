import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import avtr from "../../../assets/house-logo.png";
import useAuth from "../../../hooks/useAuth";
import { IoExitOutline } from "react-icons/io5";
import swal from "sweetalert";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const handleLogout = () => {
    userSignOut()
      .then(() => {
        // Sign-out successful.
        swal("Logout successfull.", {
          button: false,
        });
      })
      .catch((error) => {
        // An error happened.
        swal(error.message, {
          button: false,
        });
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "*:underline *:text-primary" : ""
          }
        >
          <p className="text-white">Home</p>
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : ""}`}>
        <NavLink
          to={"/update-profile"}
          className={({ isActive }) =>
            isActive ? "*:underline *:text-primary" : ""
          }
        >
          <p className="text-white">Update Profile</p>
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : ""}`}>
        <NavLink
          to={"/register"}
          className={({ isActive }) =>
            isActive ? "*:underline *:text-primary" : ""
          }
        >
          <p className="text-white">Register</p>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <nav className="bg-[#1C1C1C]">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col drawer-content">
            {/* Navbar */}
            <div className="max-w-[1280px] mx-auto justify-between w-full navbar lg:flex-row ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="text-white border-none btn btn-square bg-navy swap swap-rotate"
                >
                  {/* this hidden checkbox controls the state */}
                  {/* <input
                  id="my-drawer-3"
                  type="checkbox"
                  className="drawer-toggle"
                /> */}
                  {/* hamburger icon */}
                  {/* <svg
                  className="fill-current swap-off"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg> */}

                  {/* close icon */}
                  {/* <svg
                  className="fill-current swap-on"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <Link to={"/"} className="px-2 mx-2">
                <img src={logo} alt="" className="h-10 md:h-auto" />
              </Link>

              <div className="flex-1 hidden lg:justify-center lg:flex">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {navItems}
                </ul>
              </div>
              <div>
                {user ? (
                  <div
                    className="z-20 dropdown dropdown-bottom dropdown-end lg:tooltip lg:tooltip-bottom"
                    data-tip={user?.displayName}
                  >
                    <div tabIndex={0} role="button" className="">
                      <div className="avatar online">
                        <div className="w-10 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[3] menu p-2 shadow bg-base-100 rounded-box w-52 text-white"
                    >
                      <li className="block lg:hidden">
                        <p>{user?.displayName}</p>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 btn-base btn-navy"
                        >
                          Logout
                          <IoExitOutline />
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to={"/login"} className="btn-base btn-primary">
                    Login
                  </Link>
                )}
              </div>
            </div>
            {/* Page content here */}
            {/* Content */}
          </div>
          <div className="z-20 drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="min-h-full p-4 menu w-80 bg-base-200">
              {/* Sidebar content here */}
              {navItems}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
