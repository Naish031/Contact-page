import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[8%] py-3">
      <img src={logo} alt="company logo" />

      <ul className="flex items-center justify-center text-lg font-bold">
        <li className="px-4">Home</li>
        <li className="px-4">About</li>
        <li className="px-4">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
