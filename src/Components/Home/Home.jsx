import Nav from "./Nav";
import Cheesecake from "../../assets/bgphoto/Cheesecake.png";

// imported Icon
import { FaCirclePlay } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen background font-inika">
      <Nav />

      <div className="flex mx-auto">
        <div className="text-[#523728] space-y-5 mt-14 ml-20">
          <p className=" text-5xl tracking-wide leading-[4rem] ">
            Bite The World of <br /> Cheesecake Wonders
          </p>
          <p className="text-lg">
            We always make our customer happy by providing <br /> as many
            choices as possible
          </p>

          <div className="space-x-4 pt-3 flex flex-row font-bold">
            <button className="bg-[#6A4028] text-white rounded-3xl h-12 w-40 text-center">
              Get Started
            </button>
            <button className="border border-[#6A4028] rounded-3xl h-12 w-40 flex items-center justify-center space-x-2">
              <FaCirclePlay /> <p>Watch demo</p>
            </button>
          </div>
        </div>
        <div className="ml-20 pb-12">
          <img src={Cheesecake} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
