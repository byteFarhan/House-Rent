import { FaGithub, FaGoogle } from "react-icons/fa6";
// import googleLogo from "../../../assets/google-logo.png";
const SocialLogin = () => {
  return (
    <div className="mb-3 space-y-3">
      <div className="divider">OR</div>
      <button className="flex items-center justify-center w-full gap-2 text-xl btn-base btn-primary">
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
