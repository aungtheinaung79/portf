import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaTelegram,
} from "react-icons/fa6";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 py-10 overflow-hidden">

      {/* 🌆 Animated Neon Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(135deg,_#0f0f10,_#111827,_#1e293b,_#0f0f10)] bg-[length:300%_300%] -z-10"
      />

      {/* 💠 Floating Neon Blurs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/25 blur-3xl rounded-full"
      ></motion.div>

      {/* 🧑‍💻 Profile Image */}
      <motion.img
        src="/ace.jpg"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-44 h-44 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-transform duration-500 hover:scale-110 hover:rotate-2 cursor-pointer"
      />

      {/* ✨ Name */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:scale-105 transition-transform duration-300"
      >
        Aung Thein Lin
      </motion.h1>

      {/* 💼 Role */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl md:text-2xl font-semibold text-cyan-300 italic mt-2 hover:scale-105 transition-transform duration-300"
      >
        Software Developer
      </motion.h2>

      {/* 🧠 Short Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-400 max-w-2xl text-base md:text-lg mt-5 leading-relaxed px-4 md:px-8"
      >
        I’m a passionate <span className="text-cyan-400 font-semibold">Software Developer</span> 
        who loves building fast, beautiful, and user-friendly digital experiences.
        My mission is to craft <span className="text-purple-400">modern web & mobile solutions</span> 
        that inspire users and elevate brands.
      </motion.p>

      {/* 🌐 Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex gap-6 mt-6 text-2xl md:text-3xl"
      >
        {[
          { icon: <FaGithub />, link: "https://github.com" },
          { icon: <FaSquareFacebook />, link: "https://facebook.com" },
          { icon: <FaLinkedin />, link: "https://linkedin.com" },
          { icon: <FaTelegram />, link: "https://t.me/yourusername" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, color: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* 🖥️ Hero Illustration */}
      <motion.img
        src="/hptos.png"
        alt="Web Illustration"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="w-full max-w-md md:max-w-xl mt-10 object-contain transition-transform duration-500 hover:scale-105 hover:rotate-1 cursor-pointer"
      />

      {/* 💫 Neon Glow Bottom Layer */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-64 md:h-72 bg-gradient-to-t from-cyan-400/20 via-transparent to-transparent blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Home;
