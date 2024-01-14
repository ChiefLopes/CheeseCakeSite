import Nav from "./Nav";

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen background font-inika ">
      <Nav />

      <div>
        <div>
          <p className="text-[#523728] text-5xl tracking-wide leading-12">Bite The World of <br /> Cheesecake Wonders</p>
          <p>
            We always make our customer happy by providing as many choices as
            possible
          </p>

          <div>
            <button>Get Started</button>
            <button>Watch Demo</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
