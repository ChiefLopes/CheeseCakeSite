const Nav = () => {
  return (
    <nav className="flex items-center justify-center ml-24 m-8 font-inika ">
      <div>Logo</div>
      <ul className="flex md:ml-[25rem] space-x-7">
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
