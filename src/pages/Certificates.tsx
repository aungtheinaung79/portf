import { motion } from "framer-motion";

function Certificates() {
  const certificates = [
    {
      title: "Web Development Certificate",
      img: "/web-development-modern-flat-design-260nw-1241070313.jpg",
      issuer: "ABC Institute",
      year: "2024",
      desc: "ပြည့်စုံသော Frontend နှင့် Backend ကိုဖော်ပြသည့် Full-stack Web Development သင်တန်းအပြီးသတ်လက်မှတ် ဖြစ်ပါသည်။",
    },
    {
      title: "React Advanced Course",
      img: "/2025-06-rebrand-dsktp-pre-blank.png",
      issuer: "XYZ Academy",
      year: "2025",
      desc: "React Hooks, Optimization, State Management စသည့် နည်းပညာများကို ကျွမ်းကျင်အောင် လေ့လာပြီး အသုံးချနိုင်ပါသည်။",
    },
    {
      title: "Mobile App Development",
      img: "/app-d.webp",
      issuer: "CodeMaster Academy",
      year: "2023",
      desc: "React Native ဖြင့် iOS / Android ပေါ်တွင် Cross-platform Mobile App များ တည်ဆောက်နိုင်မှုကို သက်သေပြပါသည်။",
    },
  ];

  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

      {/* 🌃 Neon Urban Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(135deg,_#0a0a0b,_#111827,_#1e1b4b,_#0a0a0b)] bg-[length:300%_300%] -z-10"
      />

      {/* 💫 Floating Light Blurs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-16 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-16 w-96 h-96 bg-purple-600/25 blur-3xl rounded-full"
      />

      {/* 🏆 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] mb-6 text-center"
      >
        Certificates 💎
      </motion.h1>

      {/* 📜 Myanmar Summary */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-gray-300 text-center max-w-3xl mb-16 text-lg leading-relaxed"
      >
        ကျွန်တော်သည် <span className="text-cyan-400 font-semibold">Software Developer</span> တစ်ဦးအနေနဲ့ 
        Web နှင့် Mobile Application များကို လှပပြီး မြန်ဆန်သည့် အနုပညာနဲ့ပေါင်းစပ်၍ ဖန်တီးပေးနေပါသည်။  
        ဤအောက်တွင် ဖော်ပြထားသော လက်မှတ်များသည် ကျွန်တော်၏ နည်းပညာပိုင်းဆိုင်ရာ ကျွမ်းကျင်မှုများနှင့် 
        တက်ကြွသည့် လေ့လာမှုအတွေ့အကြုံများကို သက်သေပြနေပါသည်။
      </motion.p>

      {/* 🧾 Certificates List */}
      <div className="flex flex-col gap-16 w-full max-w-6xl z-10 relative">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.25, duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            className={`flex flex-col ${
              i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
            } items-center bg-white/5 backdrop-blur-xl border border-cyan-400/30 p-6 rounded-3xl shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] transition-all duration-500 relative overflow-hidden`}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl w-full sm:w-1/2 lg:w-2/5 mb-5 sm:mb-0">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-60 object-cover rounded-2xl transition-transform duration-700 hover:scale-110 hover:rotate-1"
              />
            </div>

            {/* Info */}
            <div className="sm:mx-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">
                {cert.title}
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                သက်ဆိုင်ရာ —{" "}
                <span className="text-gray-200 font-semibold">
                  {cert.issuer}
                </span>{" "}
                ({cert.year})
              </p>
              <p className="text-gray-300 leading-relaxed">{cert.desc}</p>
            </div>

            {/* Light Beam Effect */}
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
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-cyan-400/25 via-transparent to-transparent blur-3xl"
      />
    </div>
  );
}

export default Certificates;
