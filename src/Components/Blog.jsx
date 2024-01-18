import Container from "./Container";

const Blog = ({ date, title, body }) => {
  const blogData = [
    {
      id: 1,
      img: "/src/assets/blogImgs/blog1.png",
      date: "23 Nov, 2023",
      title: "A Peek Behind the Cheesecake Curtain",
      body: "Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...",
    },
    {
      id: 2,
      img: "/src/assets/blogImgs/blog2.png",
      date: "18 July, 2023",
      title: "Low-Sugar & Gluten-Free Cheesecakes",
      body: "Welcome to our guilt-free indulgence zone, where we're redefining the art of cheesecake with our delectable low-sugar...",
    },
    {
      id: 3,
      img: "/src/assets/blogImgs/blog3.png",
      date: "1 January, 2024",
      title: "Sweet Words - Customer Reviews of Cheesecakes",
      body: 'Indulge in the rich tapestry of heartfelt stories within "Sweet Words." This curated collection of customer reviews offers a glimpse into the joy...',
    },
  ];
  return (
    <div className=" bg-[#FFF8e1]">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-[64px] text-[#734B33] font-[Inika] mb-0">
            Our Blog
          </h1>
          <p className="text-[#734B33] font-[Roboto] mt-0">Our Recent Posts</p>
        </div>
        <div className="grid gap-9 md:gap-3 md:grid-cols-3">
          {blogData.map((data) => (
            <div
              key={data.id}
              className=" w-[278px] border rounded-[19px] custom-box-shadow mx-auto"
            >
              <div className="w-full h-[250px] p-5">
                <img
                  className="w-full h-full object-cover rounded-[19px] "
                  src={data.img}
                  alt="Blog-img"
                />
              </div>
              <div className="px-5 pb-2 ">
                <p className=" text-[#BB6939] text-[18px] font-[outfit]">
                  {data.date} / Cheesecake
                </p>
                <p className="  text-[#734B33] font-[600] text-[17px]  font-[poppins] pt-1 pb-2">
                  {data.title}
                </p>
                <p className=" text-[#704B33] text-[12.5px] font-[400] font-[poppins]">
                  {data.body}
                </p>
                <button className="mt-2  text-[#734B33] font-[poppins] text-[15.5px] font-[500]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
