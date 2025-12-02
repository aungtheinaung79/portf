import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 text-white py-8 px-6 mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-green-400 mt-3">Contact Me</h3>
          <p className="font-semibold text-gray-100 text-lg">💚 Nyi Thein Aung 💚</p>
          <p>📞 <span className="text-gray-300 hover:text-green-400">+95 660 323 675</span></p>
          <p>📧 <span className="text-gray-300 hover:text-green-400">aungtheinaung79@gmail.com</span></p>
          <p>💬 <span className="text-gray-300 hover:text-green-400">aungtheinaung79 (Telegram)</span></p>
        </div>

      <div className="mt-8 border-t border-gray-700/40"></div>

      <div className="mt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-400 font-semibold">Nyi Thein Aung</span> — Crafted with 💚 and Code.
      </div>

      {/* Smaller Glow Effect */}
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.03, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-20 from-green-400/15 via-transparent to-transparent blur-xl"
      ></motion.div>
    </footer>
  );
}

export default Footer;