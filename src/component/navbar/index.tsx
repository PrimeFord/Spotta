// import { LOGO } from "../theme/themeIcons";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bg-white w-[100%] h-[4rem] py-[1rem] px-[1.5rem] lg:px-[5rem] flex justify-between">
      <div className=" flex items-center font-clash">
        <Link to="/">
          <span className=" tracking-[0.5rem] font-[900]">SPOTTA</span>
          <span className="h-[1rem] w-[1.4rem] text-[0.6rem] p-[0.15rem] rounded-[4px] text-center text-[#fff] bg-[#5378F6]">
            NG
          </span>
        </Link>
      </div>
      {/* <LOGO /> */}
      <div className="flex gap-2 font-[400] items-center">
        <p>Welcome!</p>
        <div className="h-[2.5rem] w-[2.5rem] hover:scale-[1.05] cursor-pointer">
          <img
            className=" rounded-[50%]"
            src="/Image/profile.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
