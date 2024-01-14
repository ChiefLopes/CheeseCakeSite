import About from "../assets/PgImgs/About.png";

const AboutUs = () => {
  return (
    <div className="flex ml-20 space-x-14 h-3/5 ">
      <div className="  md:w-[32rem]">
        <img src={About} alt="" />
      </div>
      <div className="flex flex-col align-center mt-[10rem] space-y-3">
        <span className="space-y-2">
          <p className="text-6xl text-[#220404]">We Love Cheesecake</p>
          <p className="text-2xl text-[#1B0B0BBF]">
            Discover Our Cheesecake Story
          </p>
        </span>
        <span className="space-y-8 text-[20px] text-[ #000000B3]">
          <p className="">
            At Cheesecake Love, quality is our cornerstone. Each <br />{" "}
            cheesecake is crafted with the finest ingredients, <br /> meticulous
            attention to detail, and a dash of creativity.
          </p>
          <p>
            We believe in delivering not just desserts but moments of <br />{" "}
            sheer indulgence.
          </p>
        </span>
        <button className="bg-[#6A4028] text-white rounded-3xl h-12 w-40 text-center shadow-2xl">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
