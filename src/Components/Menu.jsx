import React from "react";
import "../App.css";
import Container from "./Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const menuData = [
    {
      id: 1,
      img: "/src/assets/menuImgs/Blueberry.png",
      title: "Blueberry Cheesecake",
      recipe: "Blueberry love, cheesecake delight!",
      amount: "9.00",
    },
    {
      id: 2,
      img: "/src/assets/menuImgs/Biscoff.png",
      title: "Biscoff Cheesecake",
      recipe: "Biscoff adores cheesecake magic",
      amount: "11.00",
    },
    {
      id: 3,
      img: "/src/assets/menuImgs/Chocolate.png",
      title: "Chocolate Cheesecake",
      recipe: "Cherish Chocolate, relish cheesecake magic!",
      amount: "$.10.00",
    },
    {
      id: 4,
      img: "/src/assets/menuImgs/Blueberry.png",
      title: "Blueberry Cheesecake",
      recipe: "Blueberry love, cheesecake delight!",
      amount: "9.00",
    },
    {
      id: 5,
      img: "/src/assets/menuImgs/Biscoff.png",
      title: "Biscoff Cheesecake",
      recipe: "Biscoff adores cheesecake magic",
      amount: "11.00",
    },
  ];
  return (
    <div className="bg-[#79523b]">
      <Container>
        <h1 className="mb-10 text-yellow-50  text-4xl md:text-6xl font-normal font-['Inika'] text-center">
          Our Menu
        </h1>
        <div className="px-10">
          <Slider {...settings}>
            {menuData.map((data) => (
              <div key={data.id} className="">
                <div className="md:w-72  md:h-72 mx-auto bg-yellow-50 rounded-3xl shadow pb-5 md:pb-0">
                  <div className="w-40 h-40 mx-auto">
                    <img className=" w-full object-cover" src={data.img} />
                  </div>

                  <div className="px-5 mt-5">
                    <div className="text-neutral-800 text-2xl font-bold font-['Inika']">
                      {data.title}
                    </div>
                    <div className="text-neutral-600 text-xs font-normal font-['Recursive']">
                      {data.recipe}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lime-600 text-lg font-bold font-['Inter']">
                          $
                        </span>
                        <span className="text-stone-600 text-xl font-bold font-['Inter']">
                          {data.amount}
                        </span>
                      </div>
                      <div className="w-24 h-3.5 flex space-x-1">
                        <img
                          src="/src/assets/starIcon/fi-sr-star.png"
                          alt="star-icon"
                        />
                        <img
                          src="/src/assets/starIcon/fi-sr-star.png"
                          alt="star-icon"
                        />
                        <img
                          src="/src/assets/starIcon/fi-sr-star.png"
                          alt="star-icon"
                        />
                        <img
                          src="/src/assets/starIcon/fi-sr-star.png"
                          alt="star-icon"
                        />
                        <img
                          src="/src/assets/starIcon/fi-sr-star.png"
                          alt="star-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
