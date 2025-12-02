import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaTelegram, FaPhone } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function Contact() {
  return (
    <div className="min-h-[55vh] bg-gradient-to-br text-white flex flex-col items-center justify-center py-6 px-5">
      
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-green-500/20 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-emerald-400/20 blur-2xl rounded-full"
      ></motion.div>

      {/* Section Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent mb-8 z-10 drop-shadow-[0_0_25px_rgba(34,197,94,0.5)]"
      >
        Contact(ဆိုတာသိကြလာ)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 text-center max-w-xl mb-10 z-10"
      >
        project, collaboration, သို့မဟုတ် ဝန်ဆောင်မှုများအတွက် ဆွေးနွေးလိုပါက
ကျွန်တော်ကို တိုက်ရိုက် ဆက်သွယ်နိုင်ပါသည်။
Email, Telegram, LinkedIn, GitHub တို့မှတဆင့် စိတ်ချယုံကြည်စွာ ဆက်သွယ်နိုင်ပြီး
သင့်စိတ်ကြိုက် project များကို တည်ဆောက်နိုင်ရန် အမြန်ဆုံး ပြန်လည်တုံ့ပြန်ပါမယ်။

📌 Contact Info / ဆက်သွယ်ရန် အချက်အလက်များ

အီးမေးလ် (Email): nyitheinaung@example.com

Telegram: t.me/yourusername

LinkedIn: linkedin.com/in/yourusername

GitHub: github.com/yourusername

📝 Contact Form (Optional / React-friendly)

နာမည်

အီးမေးလ်

Message

Submit Button


[View My Portfolio]
      </motion.p>

      <motion.form
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md z-10"
      >
        <div className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-green-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/70 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-green-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/70 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-green-300">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/70 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-black bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 rounded-lg shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all"
          >
            Send Message
          </button>
        </div>

        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-all duration-700 bg-gradient-to-tr from-green-400/20 via-transparent to-blue-400/20 blur-lg"></div>
      </motion.form>

      {/* Contact Info */}
      <div className="mt-10 space-y-2 text-center z-10">
        <div className="flex items-center justify-center gap-2">
          <MdOutlineMarkEmailRead className="text-green-400 text-xl" />
          <p>
            <span className="text-green-400">example@email.com</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaPhone className="text-green-400 text-xl" />
          <p>
            <span className="text-green-400">+95 660323675</span>
          </p>
        </div>
      </div>

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
            whileHover={{ scale: 1.2, color: "#4ade80" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-400 hover:text-green-400 transition"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-green-400/20 via-transparent to-transparent blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Contact;
