import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";

function AppStarter() {
  return (
    <div className="relative flex flex-col min-h-screen text-white overflow-hidden">

      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,_#020617,_#052e16,_#0f172a,_#111827,_#020617)] bg-[length:200%_200%] -z-10"
      ></motion.div>

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-green-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ x: [0, 25, -25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-44 h-44 bg-emerald-400/20 blur-2xl rounded-full"
      />

      <Header />

      <main className="flex-1 p-4 sm:px-10">
        <Outlet />
      </main>

      <footer className="relative z-10 w-full from-gray-950/95 via-gray-900/90 to-transparent backdrop-blur-md border-t border-green-400/10 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div>
             <motion.img
              src="/ace.jpg" 
              alt="Nyi Thein Aung"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-28 h-28 object-cover rounded-full border-4 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            />
            <p className="font-semibold text-gray-100 text-lg"> 💚Nyi Thein Aung💚</p>
          </div>


           

            <div>
              <h3 className="text-2xl font-bold text-green-400 mt-3">My Contact</h3>
              <p>📞 <span className="text-gray-300 hover:text-green-400">+95 660 323 675</span></p>
              <p>📧 <span className="text-gray-300 hover:text-green-400">aungtheinaung79@gmail.com</span></p>
              <p>💬 <span className="text-gray-300 hover:text-green-400">aungtheinaung79 (Telegram)</span></p>
            </div>


          <div className="flex flex-col gap-3 md:items-end items-center">
            <h3 className="text-2xl font-semibold text-green-400">Navigations</h3>
            <ul className="flex flex-col md:flex-row gap-4 text-lg">
              <li>
                <a href="#home" className="hover:text-green-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-400 transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700/40"></div>

        <div className="mt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-green-400 font-semibold">Nyi Thein Aung</span> — Crafted with 💚 and Code.
        </div>

        <motion.div
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-x-0 bottom-0 h-40 from-green-400/20 via-transparent to-transparent blur-3xl"
        />
      </footer>
    </div>
  );
}

export default AppStarter;
