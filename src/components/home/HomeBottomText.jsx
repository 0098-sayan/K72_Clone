import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font1] flex justify-center gap-5 text-white mb-2 font-bold">
      <Link
        to="/projects"
        className="text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[5.5vw] border-3 border-white rounded-full px-10 pt-2 mt-5 uppercase"
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[5.5vw] border-3 border-white rounded-full px-10 pt-2 mt-5 uppercase"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
