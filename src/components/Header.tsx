import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleChangeCategory = (link: string) => {
    navigate(link);
    setShowMenu(false);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "Services", icon: <FaCode />, link: "/services" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "/projects" },
    { name: "Certificates", icon: <FaCertificate />, link: "/certificates" },
    { name: "Contact", icon: <FaEnvelope />, link: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-black/60 backdrop-blur-lg border-b border-green-400 z-50">
      <div className="flex justify-between items-center px-5 py-3">
        <h1
          className="text-xl font-bold text-green-400 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          DevelopedByNTA💚
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleChangeCategory(item.link)}
              className="flex items-center gap-2 text-white hover:text-green-400 transition-all duration-300"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center bg-black/90 text-white py-5 gap-4 md:hidden border-t border-green-400"
          >
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleChangeCategory(item.link)}
                className="flex items-center gap-3 hover:text-green-400 text-lg transition-all"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
