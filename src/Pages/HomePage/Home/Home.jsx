import { Helmet } from "react-helmet";
import Apartments from "../Apartments/Apartments";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <>
      <section>
        <Helmet>
          <title>House Rent | Home</title>
        </Helmet>
        <Carousel />
        <Apartments />
      </section>
    </>
  );
};

export default Home;
