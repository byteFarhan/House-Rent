import { Link } from "react-router-dom";
import errorpage from "../../assets/error-page.svg";

const ErrorPage = () => {
  return (
    <div>
      <img src={errorpage} alt="" className="object-cover h-[80vh] mx-auto" />
      <div className="text-center">
        <Link to={"/"}>
          <button className="my-3 btn-base btn-primary">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
