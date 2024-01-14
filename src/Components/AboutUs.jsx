import About from "../assets/PgImgs/About.png"

const AboutUs = () => {
  return (
    <div className="flex ml-20 space-x-9 h-3/5">
      <div className="h-20  md:w-[30rem]">
        <img src={About} alt="" />
      </div>
      <div className="flex flex-col align-center mt-[10rem] space-y-5">
        <span>
          <p className="text-6xl">We Love Cheesecake</p>
          <p>Discover Our Cheesecake Story</p>
        </span>
        <span>
          <p>
            At Cheesecake Love, quality is our cornerstone. Each <br />{" "}
            cheesecake is crafted with the finest ingredients, <br /> meticulous
            attention to detail, and a dash of creativity.
          </p>
          <p>
            We believe in delivering not just desserts but moments of <br />{" "}
            sheer indulgence.
          </p>
        </span>
        <button className="bg-[#6A4028] text-white rounded-3xl h-12 w-40 text-center">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
