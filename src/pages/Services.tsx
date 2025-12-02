import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Web Development",
      img: "/web-a.webp",
      desc: "As a web developer, I specialize in creating dynamic and interactive websites tailored for business needs. I utilize the latest technologies to build responsive and engaging user-friendly websites.",
    },
    {
      title: "Mobile App Development",
      img: "/app-d.webp",
      desc: "I build modern cutting-edge mobile apps that run smoothly on both iOS & Android. From concept to deployment, I work closely with clients to deliver high-quality mobile experiences.",
    },
    {
      title: "Web Design",
      img: "/web design.webp",
      desc: "With a strong eye for aesthetics and user experience, I create visually captivating website designs that leave a lasting impression and increase user engagement.",
    },
    {
      title: "UI / UX Design",
      img: "/Ux.jpg",
      desc: "I focus on designing intuitive and engaging user experiences that make digital products both beautiful and functional. Every detail is crafted to enhance usability.",
    },
    {
      title: "Backend Development",
      img: "/Backend.png",
      desc: "I develop secure, scalable, and efficient server-side applications using Node.js, Express, and databases like MongoDB and PostgreSQL.",
    },
    {
      title: "SEO Optimization",
      img: "/SEO.PNG",
      desc: "I help businesses rank higher on search engines through effective SEO strategies, keyword optimization, and performance tuning.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full text-white py-20 px-5 overflow-hidden">
      

      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,_#0f172a,_#052e16,_#111827,_#0f172a)] bg-[length:200%_200%] -z-10"
      ></motion.div>


      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-56 h-56 bg-green-500/25 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/25 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 15, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400/25 blur-2xl rounded-full"
      ></motion.div>


      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] mb-10"
      >
        Services I Offer (အကြောင်းများ)
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-gray-300 text-center max-w-3xl mx-auto mb-14 leading-relaxed"
      >
        🌟 အကျဉ်းချုပ်အကြောင်းအရာ

ကျွန်တော်သည် Software Developer တစ်ဦးအနေနဲ့ သုံးစွဲသူများအတွက် လွယ်ကူပြီး သေချာမြန်ဆန်သော Web နှင့် Mobile Application များဖန်တီးပေးနေပါသည်။
စီးပွားရေးလုပ်ငန်းများအတွက် အသုံးဝင်မည့် နည်းပညာအခြေပြုပြဿနာဖြေရှင်းမှုများ ကို အဆင့်မြင့်နည်းလမ်းများဖြင့် တည်ဆောက်ပေးပါသည်။
ကျွန်တော်၏ ရည်ရွယ်ချက်မှာ သုံးစွဲသူအတွက် စိတ်ချယုံကြည်ရသော digital experience များ ဖန်တီးပေးခြင်းဖြစ်ပါတယ်။

💻 1. Website Development (ဝဘ်ဆိုက်ဖန်တီးမှု)

ကျွန်တော်သည် Responsive, SEO-friendly ဖြစ်သော website များကို React, Next.js, Tailwind CSS စသည့် နည်းပညာများ အသုံးပြုပြီး ဖန်တီးပေးပါသည်။
ဧည့်သည်များအတွက် မြန်ဆန်ပြီး လှပသန့်ရှင်းသော UI များဖြင့် လုပ်ငန်းရည်ရွယ်ချက်နှင့် ကိုက်ညီအောင် တည်ဆောက်ပေးပါသည်။

🟢 “သင့်အလုပ်အတွက် လှပပြီး မြန်ဆန်သော website တစ်ခုကို ဖန်တီးလိုက်ပါ।”

📱 2. Mobile Application Development (မိုဘိုင်းအက်ပ် ဖန်တီးမှု)

Flutter သို့မဟုတ် React Native အသုံးပြုပြီး iOS နှင့် Android ပေါ်တွင် လည်ပတ်နိုင်သော mobile app များကို တစ်ခါတည်း တည်ဆောက်ပေးပါသည်။
အက်ပ်တစ်ခုချင်းစီသည် လှပသန့်ရှင်းပြီး အသုံးပြုရလွယ်ကူအောင် ပြုလုပ်ပေးထားပါသည်။

🟢 “သုံးစွဲသူအတွက် လွယ်ကူတဲ့ mobile experience ကို တည်ဆောက်ပေးပါမယ်။”

🎨 3. UI / UX Design (အသုံးပြုသူအတွေ့အကြုံနှင့် အင်တာဖေ့စ် ဒီဇိုင်း)

သုံးစွဲသူအတွေ့အကြုံကို အခြေခံထားသော UI/UX Design များကို ဆွဲဆောင်မှုရှိအောင် ဖန်တီးပေးပါသည်။
စနစ်တကျဖွဲ့စည်းပြီး လှပသန့်ရှင်းသည့် ဒီဇိုင်းဖြင့် သုံးစွဲသူတို့အတွက် သဘာဝကျသည့်အသုံးပြုမှုကို ပေးစွမ်းနိုင်ပါသည်။

🟢 “Design သဘောတရားနဲ့ အတွေ့အကြုံတန်ဖိုးကို ပေါင်းစပ်ထားတဲ့ UI/UX Design များ।”

⚙️ 4. Backend & API Integration (နောက်ခံစနစ်နှင့် API တစ်ခုချင်းဆက်သွယ်ခြင်း)

Node.js, Express, Firebase တို့ကို အသုံးပြုပြီး စိတ်ချရသော Backend system များဖန်တီးပေးပါသည်။
အချက်အလက်များကို စနစ်တကျ စီမံနိုင်ပြီး Web နှင့် App များအကြား API ဆက်သွယ်မှုကို ချောမွေ့အောင် ထားပေးပါသည်။

🟢 “သင့် App နဲ့ Database တို့အကြား ချောမွေ့စွာ ဆက်သွယ်နိုင်အောင် တည်ဆောက်ပေးမယ်။”

🧰 5. Maintenance & Optimization (စနစ်ထိန်းသိမ်းခြင်းနှင့် မြှင့်တင်ခြင်း)

တည်ဆောက်ပြီးပြီးနောက်လည်း Website နှင့် Application များကို စနစ်တကျ ထိန်းသိမ်းပြုပြင်ခြင်း၊
Performance တိုးတက်အောင် ပြုပြင်ခြင်း စသည့် ဝန်ဆောင်မှုများ ပေးနိုင်ပါသည်။
အချိန်အကြာကြီး အသုံးပြုနိုင်ဖို့ အမြဲအချောထားပေးပါသည်။

🟢 “သင့် project ကို တည်ဆောက်ပြီးတာနဲ့ အဆုံးမဟုတ်ပါ — အမြဲတမ်း တိုးတက်စေဖို့ ထိန်းသိမ်းပေးမယ်။”

🌈 အဆုံးသတ် — ရည်ရွယ်ချက်အဖြစ်

ကျွန်တော်အနေနဲ့ သင်၏ စိတ်ကူးအမြင်များကို နည်းပညာနဲ့ အကောင်အထည်ဖော်ပေးခြင်း
နှင့် တန်ဖိုးရှိသော digital experience တစ်ခုကို တည်ဆောက်ပေးခြင်း ဖြစ်ပါသည်။
သင်၏ စီးပွားရေးလုပ်ငန်းကို တိုးတက်အောင် ပြုလုပ်ဖို့အတွက် စိတ်ကြိုက် solution တစ်ခုချင်းစီနဲ့ အတူလှုပ်ရှားသွားပါမယ်။

✨ “အံ့အားသင့်ဖွယ် စွမ်းဆောင်ရည်ရှိတဲ့ Software Solution တစ်ခုကို အတူတူ ဖန်တီးကြပါစို့။”

🧾 အတိုချုပ်ရေးသားချက် (မြန်မာ version)

ကျွန်တော်သည် သုံးစွဲသူအတွက် လွယ်ကူပြီး သေချာမြန်ဆန်သော Web နှင့် Mobile Application များကို ဖန်တီးပေးသော Software Developer တစ်ဦးဖြစ်ပါသည်။
ကျွန်တော်၏ ဝန်ဆောင်မှုများတွင် Website Development, Mobile App Creation, UI/UX Design, Backend Integration နှင့် Maintenance တို့ ပါဝင်ပြီး
သုံးစွဲသူအတွက် ယုံကြည်စိတ်ချရသော digital experience များ ဖန်တီးပေးနိုင်ပါသည်။
      </motion.p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.07 }}
            className="relative group bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <h2 className="text-2xl font-semibold text-green-300 mb-3 group-hover:text-green-400 transition-all duration-500">
              {service.title}
            </h2>
      

            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-500">
              {service.desc}
            </p>

            <button className="mt-5 w-full bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 text-black font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              Read More
            </button>
            

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 from-green-400/20 via-transparent to-blue-400/20 blur-md rounded-2xl"></div>
          </motion.div>
        ))}
      </div>


      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-green-400/20 via-transparent to-transparent blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Services;
