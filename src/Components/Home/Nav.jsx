import Logo from "../../assets/Logo/LOGO-OF-CHEESECAKE.png";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center font-inika ">
      <div className="md:ml-[-11.5rem]">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex md:ml-[17rem] space-x-7 bg-[#6F4436CC] md:w-[20rem] h-10 justify-center items-center rounded-xl text-white font-bold">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className="md:ml-[17rem]">Sign Up</div>
    </nav>
  );
};

export default Nav;
