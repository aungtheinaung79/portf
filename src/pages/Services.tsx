import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Web Development",
      img: "/web-a.webp",
      desc: "Responsive, SEO-friendly websites built with React, Next.js, and Tailwind CSS for smooth, high-performance experiences.",
    },
    {
      title: "Mobile App Development",
      img: "/app-d.webp",
      desc: "Modern cross-platform apps built with React Native and Flutter — sleek, fast, and user-centered.",
    },
    {
      title: "UI / UX Design",
      img: "/Ux.jpg",
      desc: "Crafting user-friendly, intuitive, and visually stunning interfaces that blend creativity with usability.",
    },
    {
      title: "Backend Development",
      img: "/Backend.png",
      desc: "Secure, scalable backend systems built with Node.js, Express, MongoDB, and PostgreSQL.",
    },
    {
      title: "API Integration",
      img: "/api.webp",
      desc: "Seamless data connections between your app and server, enabling smooth functionality and efficient communication.",
    },
    {
      title: "SEO Optimization",
      img: "/SEO.PNG",
      desc: "Boosting your brand visibility with effective SEO strategies, content structure, and performance enhancements.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

      {/* 🌌 Neon Gradient Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(135deg,_#0a0a0b,_#111827,_#1e1b4b,_#0a0a0b)] bg-[length:300%_300%] -z-10"
      />

      {/* 💫 Floating Lights */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/25 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-16 w-80 h-80 bg-purple-500/25 blur-3xl rounded-full"
      ></motion.div>

      {/* 🧭 Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.7)] mb-10 text-center"
      >
        Services 💼
      </motion.h1>

      {/* 🧠 Short Description (Myanmar Summary) */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 text-center max-w-3xl mb-14 leading-relaxed text-lg"
      >
        ကျွန်တော်သည် <span className="text-cyan-400 font-semibold">Software Developer</span> တစ်ဦးအနေနဲ့  
        စီးပွားရေးလုပ်ငန်းများအတွက် လွယ်ကူပြီး သေချာမြန်ဆန်သော  
        Web နှင့် Mobile Application များကို တီထွင်ဖန်တီးပေးနေပါသည်။  
        အောက်တွင်ဖော်ပြထားသော ဝန်ဆောင်မှုများဖြင့် သင်၏ project ကို  
        အောင်မြင်မှုအဆင့်သစ်သို့ တက်ရောက်စေပါမယ်။
      </motion.p>

      {/* 💎 Service Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.07 }}
            className="relative group bg-white/5 backdrop-blur-xl border border-cyan-400/30 p-6 rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] transition-all duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-44 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-all duration-500">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-500">
              {service.desc}
            </p>

            {/* Button */}
            <button className="mt-5 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-black font-semibold py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-300">
              Read More
            </button>

            {/* Light Sweep */}
            <motion.div
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
              className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent opacity-40 blur-xl pointer-events-none"
            />
          </motion.div>
        ))}
      </div>

      {/* 🌌 Glow Bottom Layer */}
      <motion.div
        animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-cyan-400/25 via-transparent to-transparent blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Services;
