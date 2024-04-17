import { NavLink } from "react-router-dom";
import avtr from "../../../assets/house-logo.png";

const Navbar = () => {
  const user = true;
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/update-profile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          {/* Navbar */}
          <div className="flex-row-reverse justify-between w-full lg:flex-row navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="text-white btn btn-square bg-navy swap swap-rotate"
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
            <div className="px-2 mx-2">Navbar Title</div>
            <div className="flex-1 hidden lg:justify-center lg:flex">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navItems}
              </ul>
            </div>
            <div>
              {user ? (
                <div
                  className="text-white tooltip tooltip-bottom tooltip-success"
                  data-tip="hello"
                >
                  <img
                    src={avtr}
                    alt=""
                    className="object-cover border-2 rounded-full size-12 lg:size-14 border-primary"
                  />
                </div>
              ) : (
                <div>
                  <button className="btn">Logout</button>
                </div>
              )}
              <button></button>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="z-10 drawer-side">
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
    </>
  );
};

export default Navbar;
