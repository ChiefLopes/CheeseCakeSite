import Logo from "../../assets/Logo/LOGO-OF-CHEESECAKE.png";
import { useState } from "react";

const Nav = () => {
     const [activeTab, setActiveTab] = useState(null);

     const handleTabClick = (index) => {
       setActiveTab(index);
     };
    
 
    
  return (
    <nav className="flex items-center justify-center font-inika ">
      <div className="md:ml-[-11.5rem]">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex md:ml-[17rem] space-x-7 bg-[#6F4436CC] md:w-[20rem] h-10 justify-center items-center rounded-xl text-white font-bold ">
        {["Home", "About", "Menu", "Contact"].map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              activeTab === index ? "bg-[#FFF8e1] text-[#6F4436CC] flex items-center justify-center w-full h-full rounded-xl" : "text-center"
            }`}
            onClick={() => handleTabClick(index)}>
            {tab}
          </li>
        ))}
      </ul>

      <div className="md:ml-[17rem]">Sign Up</div>
    </nav>
  );
};

export default Nav;
