import Nav from "./Nav";
import Cheesecake from "../../assets/bgphoto/Cheese.png";

// imported Icon
import { FaCirclePlay } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen font-inika background">
      <Nav />

      <div className="flex ">
        <div className="text-[#523728] space-y-5 mt-14 ml-20">
          <p className=" text-5xl font-bold tracking-wide leading-[4rem] ">
            Bite The World of <br /> Cheesecake Wonders
          </p>
          <p className="text-lg">
            We always make our customer happy by providing <br /> as many
            choices as possible
          </p>

          <div className="space-x-4 pt-3 flex flex-row font-bold">
            <button className="bg-[#6A4028] text-white rounded-3xl h-12 w-40 text-center hover:bg-transparent hover:border hover:border-[#6A4028] hover:text-[#6A4028] transition ease-in-out duration-300">
              Get Started
            </button>
            <button className="border border-[#6A4028] rounded-3xl h-12 w-40 flex items-center justify-center space-x-2 hover:bg-[#6A4028] hover:text-white transition ease-in-out duration-300">
              <FaCirclePlay /> <p>Watch demo</p>
            </button>
          </div>
        </div>
        <div className="mr-4 ">
          <img
            src={Cheesecake}
            alt=""
            className="ml-12 w-[40rem] relative bottom-[9rem] left-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
