import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaPhone,
} from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function Contact() {
  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

      {/* 🌆 Neon Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(135deg,_#0a0a0b,_#111827,_#1e1b4b,_#0a0a0b)] bg-[length:300%_300%] -z-10"
      />

      {/* 💫 Floating Light Blurs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/25 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-16 w-96 h-96 bg-purple-600/25 blur-3xl rounded-full"
      />

      {/* 🧭 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.6)] mb-6 text-center"
      >
        Contact 💬
      </motion.h1>

      {/* 🧠 Short Intro */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 text-center max-w-2xl mb-12 text-lg leading-relaxed"
      >
        Project, collaboration သို့မဟုတ် ဝန်ဆောင်မှုအကြောင်းအရာများအတွက် ဆွေးနွေးလိုပါက  
        ကျွန်တော်ကို အောက်ပါဖောင်မှတဆင့်သို့မဟုတ် Social Media များမှတဆင့် 
        တိုက်ရိုက် ဆက်သွယ်နိုင်ပါသည်။  
        ကျွန်တော်သည် သင်၏စိတ်ကူးအမြင်များကို အကောင်အထည်ဖော်ဖို့ အမြဲအဆင်သင့်ဖြစ်နေပါတယ်။
      </motion.p>

      {/* 📨 Contact Form */}
      <motion.form
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white/5 backdrop-blur-xl border border-cyan-400/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(56,189,248,0.3)] w-full max-w-md z-10"
      >
        <div className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-cyan-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-cyan-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-cyan-300">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-lg shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] transition-all"
          >
            Send Message
          </button>
        </div>

        {/* Glass hover overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-all duration-700 bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-400/20 blur-lg"></div>
      </motion.form>

      {/* 📞 Contact Info */}
      <div className="mt-10 space-y-3 text-center z-10">
        <div className="flex items-center justify-center gap-2">
          <MdOutlineMarkEmailRead className="text-cyan-400 text-xl" />
          <span className="text-cyan-300">nyitheinaung@example.com</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaPhone className="text-cyan-400 text-xl" />
          <span className="text-cyan-300">+95 660323675</span>
        </div>
      </div>

      {/* 🌐 Social Links */}
      <div className="flex space-x-6 mt-8 text-2xl z-10">
        {[
          { icon: <FaFacebook />, link: "https://facebook.com" },
          { icon: <FaLinkedin />, link: "https://linkedin.com" },
          { icon: <FaGithub />, link: "https://github.com" },
          { icon: <FaTelegram />, link: "https://t.me/yourusername" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#22d3ee" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* 🌌 Bottom Glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-cyan-400/25 via-transparent to-transparent blur-3xl"
      />
    </div>
  );
}

export default Contact;
