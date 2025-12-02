import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleChangeCategory = (link: string) => {
    navigate(link);
    if (showMenu) setShowMenu(false);
  };

  return (
    <div className="w-full border-b border-white rounded-b-lg flex flex-col gap-4 md:flex-row md:justify-between p-1 sm:px-5">
      <p className="text-lg font-semibold tracking-widest">DevelopedByNTA💚</p>

      <div
        className={`${
          showMenu ? "flex" : "hidden md:flex"
        } flex-col gap-2 md:flex-row`}
      >
        <button
          onClick={() => handleChangeCategory("/")}
          className="header-btn"
        >
          <FaHome />
          Home
        </button>

        <button
          onClick={() => handleChangeCategory("/services")}
          className="header-btn"
        >
          <MdHomeRepairService />
          Services
        </button>

        <button
          onClick={() => handleChangeCategory("/projects")}
          className="header-btn"
        >
          <FaHome />
          Projects
        </button>

        <button
          onClick={() => handleChangeCategory("/certificates")}
          className="header-btn"
        >
          <MdHomeRepairService />
          Certificates
        </button>

        <button
          onClick={() => handleChangeCategory("/contact")}
          className="header-btn"
        >
          <MdHomeRepairService />
          Contact
        </button>
      </div>

      <div
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-2 right-2 sm:right-10 border border-white w-fit p-1 rounded-lg cursor-pointer md:hidden"
      >
        <IoMdMenu size={20} />
      </div>
    </div>
  );
}

export default Header;
