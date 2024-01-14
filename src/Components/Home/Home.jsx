import Nav from "./Nav";

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen background font-inika ">
      <Nav />

      <div>
        <div className="text-[#523728] space-y-3">
          <p className=" text-5xl tracking-wide leading-[4rem] ">
            Bite The World of <br /> Cheesecake Wonders
          </p>
          <p>
            We always make our customer happy by providing <br /> as many
            choices as possible
          </p>

          <div className="">
            <button className="bg-[#6A4028] text-white rounded-2xl h-9 w-28">
              Get Started
            </button>
            <button className="border border-[#6A4028] rounded-2xl h-9 w-28">
              Watch Demo
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
