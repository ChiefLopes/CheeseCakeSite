const Nav = () => {
  return (
    <nav className="flex items-center justify-center p-8 font-inika ">
      <div className="m-4">Logo</div>
      <ul className="flex md:ml-[20rem] space-x-7">
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
