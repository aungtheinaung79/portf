import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      img: "/Portfolio.png",
      desc: "A personal portfolio website built with React and Tailwind CSS.",
    },
    {
      title: "Todo App",
      img: "/Todo.npg.webp",
      desc: "A simple todo app with CRUD functionality using TypeScript.",
    },
    {
      title: "Weather App",
      img: "/weather.npg.webp",
      desc: "Weather forecast app fetching real-time data from an API.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white flex flex-col items-center justify-center px-6 py-16 overflow-hidden">

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-blue-500/10 blur-3xl opacity-70"
      ></motion.div>

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-52 h-52 bg-green-500/30 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600/30 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-32 h-32 bg-pink-500/30 blur-2xl rounded-xl"
      ></motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] mb-6 z-10"
      >
        Projects ဆိုတာဘာလဲ ?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 max-w-2xl text-center mb-12 z-10 leading-relaxed"
      >
        Projects section ဆိုတာကတော့ မင်းလုပ်ခဲ့တဲ့ website, mobile app, UI design,
        API project, သို့မဟုတ် freelance work တွေကို ပြသဖို့အတွက် ဖြစ်ပါတယ်။ <br /><br />
        ➡️ လုပ်နိုင်တဲ့အရာတွေကို အထူးပြုလုပ်ထားတဲ့ visual showcase area လို့ပြောလို့ရပါတယ်။
        ဒီအပိုင်းဟာ Portfolio မှာ မရှိမဖြစ်ပါဝင်သင့်တဲ့ အဓိကအပိုင်းပါ။ ကျွမ်းကျင်မှုနဲ့
        သက်ဆိုင်ရာအတွေ့အကြုံတွေကို ပြသဖို့ အသုံးဝင်တယ်။
      </motion.p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.25, duration: 0.6 }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            className="relative group p-6 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-green-400/50 transition-all duration-500 overflow-hidden"
          >
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src={p.img}
                alt={p.title}
                className="rounded-2xl w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-green-400/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            </div>

            <h2 className="text-2xl font-semibold text-green-300 mb-2">
              {p.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{p.desc}</p>


            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-400/40 group-hover:shadow-[0_0_30px_5px_rgba(34,197,94,0.4)] transition-all duration-700"></div>

            <motion.div
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 blur-lg"
            ></motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-green-400/10 via-transparent to-transparent blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Projects;
