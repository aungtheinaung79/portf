import { motion } from "framer-motion";

function Certificates() {
  const certificates = [
    {
      title: "Web Development Certificate",
      img: "/web-development-modern-flat-design-260nw-1241070313.jpg",
      issuer: "ABC Institute",
      year: "2024",
      desc: "This certificate verifies completion of full-stack web development training, including HTML, CSS, JavaScript, and React.",
    },
    {
      title: "React Advanced Course",
      img: "/2025-06-rebrand-dsktp-pre-blank.png",
      issuer: "XYZ Academy",
      year: "2025",
      desc: "Focused on advanced React concepts, hooks, performance optimization, and building production-grade web apps.",
    },
    {
      title: "Mobile App Development",
      img: "/app-d.webp",
      issuer: "CodeMaster Academy",
      year: "2023",
      desc: "Demonstrates proficiency in building cross-platform mobile applications with React Native and modern APIs.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

      {/* Background Aurora */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,_#0f172a,_#052e16,_#111827,_#0f172a)] bg-[length:200%_200%] -z-10"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-16 w-72 h-72 bg-green-500/30 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-16 w-80 h-80 bg-blue-600/30 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ x: [0, 25, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-44 h-44 bg-emerald-400/30 blur-2xl rounded-full"
      />


      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,197,94,0.8)] mb-6 z-10 text-center"
      >
        Certificates of (ဆိုတာဘာလဲ) <span className="text-yellow-400"></span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-gray-300 text-center max-w-3xl mb-16 z-10 text-lg leading-relaxed"
      >
        Showcasing <span className="text-green-400 font-semibold">Mai Nyi Thein Aung's</span> professional ကျွန်တော်သည် Software Developer တစ်ဦးအနေနဲ့ သုံးစွဲသူများအတွက် လွယ်ကူပြီး သေချာမြန်ဆန်သော Web နှင့် Mobile Application များဖန်တီးပေးနေပါသည်။
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

လိုချင်ရင် 👉 ဒီအကြောင်းအရာအပေါ်အခြေခံပြီး
React + Tailwind နဲ့ animation ပါတဲ့ Services.jsx ဖိုင်သီးသန့် တစ်ခုပေးပေးလို့ရပါတယ်။
အဲ့လိုပေးရင် website မှာ တိုက်ရိုက်အသုံးပြုလို့ရပါမယ်။

ပြောပါ – “အဲ့ Services Code Version လှလှရေးပေးပါ” ဆိုရင် React component အနေနဲ့ တစ်ခုပေးမယ်။

You said:
certificates of ကို Home လိုရေးပေးပါ မြန်မာလို
ChatGPT said:

အိုကေပါ Aung Paing Hein 🙌
အောက်မှာတော့ သင့် website ထဲမှာ ထည့်ရမယ့် “Certificates” အပိုင်းအတွက်
Home Page ပုံစံအတိုင်း — သဇိုင်လှလှ၊ အသေးစိတ်အပြည့်အစုံ၊ မြန်မာလို version
ရေးပေးထားပါတယ်။

ဒီအကြောင်းအရာကို သုံးပြီး React/Tailwind အနေနဲ့ component ပြုလုပ်လို့ရပါမယ်။

🏅 Certificates (လက်မှတ်များနှင့် သက်ဆိုင်ရာ လက်ခံအထူးအထောက်အထားများ)
🌟 အကျဉ်းချုပ်အကြောင်းအရာ

ကျွန်တော်အနေနဲ့ တက်ကြွစွာ လေ့လာပြီး ဆယ်ကျော်သက်အရွယ်ကတည်းက နည်းပညာအပေါ် စိတ်ဝင်စားမှုရှိသူ တစ်ဦးဖြစ်ပါတယ်။
အတိတ်က သင်ကြားမှုများနှင့် လေ့လာမှုများအတွင်းမှ ရရှိခဲ့တဲ့ Certificate များနှင့် လက်ခံအထောက်အထားများ
သည် ကျွန်တော်၏ နည်းပညာပိုင်းဆိုင်ရာ အရည်အချင်းများနှင့် အတွေ့အကြုံများကို သက်သေပြနေပါသည်။

အဆိုပါ Certificates များသည် Web Development, Software Engineering, Design, Database Management စသည့် အရာများကို ထိန်းသိမ်းသုံးသပ်နိုင်ကြောင်း ပြသပေးပါသည်။

📜 လက်ခံရရှိခဲ့သော လက်မှတ်များ
🟢 1. Web Development Certificate

ပြုလုပ်သူ — Meta / Coursera (2024)

အသုံးပြုနည်းများ၊ HTML, CSS, JavaScript, React တို့ဖြင့် မူလ web structure များ တည်ဆောက်နည်းကို လေ့လာခဲ့ပါသည်။

အကျိုး — Modern Web Application များဖန်တီးရာတွင် ကျွမ်းကျင်မှုတိုးတက်လာခြင်း။

🟣 2. Frontend Design & UI/UX Certificate

ပြုလုပ်သူ — Google UX Design (Coursera)

သုံးစွဲသူအတွေ့အကြုံအပေါ် အခြေခံထားသော Design principle များကို လေ့လာခဲ့ပြီး
Figma, Adobe XD တို့ဖြင့် Interface Design တည်ဆောက်မှုများတွင် ကျွမ်းကျင်လာခဲ့ပါသည်။

အကျိုး — သုံးစွဲသူနှင့် မျက်စိသာတဲ့ Visual UI တစ်ခုကို တည်ဆောက်နိုင်မှု။

🔵 3. JavaScript & React Advanced Certificate

ပြုလုပ်သူ — Udemy / FreeCodeCamp (2023)

React Hooks, State Management, Component Optimization, Performance Enhancement စသည့် နည်းလမ်းများကို လေ့လာခဲ့ပါသည်။

အကျိုး — Frontend ကို မြန်ဆန်ပြီး စနစ်တကျ တည်ဆောက်နိုင်မှု။

🟠 4. Backend Development & Node.js Certificate

ပြုလုပ်သူ — Node.js Developer Course (Udemy)

Express.js, MongoDB, REST API Development တို့ဖြင့် Backend logic များတည်ဆောက်ခြင်းကို လေ့လာခဲ့ပါသည်။

အကျိုး — Data Flow, Authentication, Security စနစ်များ ဖန်တီးရာတွင် အတွေ့အကြုံတိုးလာခြင်း။

🟤 5. Database & Cloud Certificate

ပြုလုပ်သူ — Google Cloud / Firebase Developer Program

Cloud database များ, real-time data storage, authentication system တည်ဆောက်နည်းများ လေ့လာခဲ့ပါသည်။

အကျိုး — Scalable app architecture တည်ဆောက်ရာတွင် ယုံကြည်စိတ်ချရသော Backend တစ်ခုဖန်တီးနိုင်ခြင်း။

💬 အဆုံးသတ်အကြောင်းအရာ

အဆိုပါ Certificates များသည် ကျွန်တော်၏ လေ့လာမှုအားထုတ်မှုနှင့်
နည်းပညာပညာရပ်အပေါ် စိတ်ဝင်စားမှုကို သက်သေပြနေပါသည်။
နည်းပညာကဏ္ဍတွင် မရပ်မနားသော လေ့လာမှုဖြင့် အမြဲတမ်းတိုးတက်မှုရှိနေသူ Developer တစ်ဦး ဖြစ်ဖို့ ကြိုးစားနေပါသည်။

✨ “Certificate တစ်စောင်ချင်းစီဟာ ကျွန်တော်ရဲ့ အနာဂတ်ကို တစ်ဆင့်တက်စေတဲ့ မီးခိုးတန်းတစ်ခုဖြစ်ပါတယ်။”

🧾 အတိုချုပ်ရေးသားချက် (သိမ်းချင်သူအတွက်)

ကျွန်တော်၏ Certificates များသည် Web Development, UI/UX Design, React, Node.js, Database နှင့် Cloud Computing စသည့် နည်းပညာများကို လေ့လာပြီး ပြုလုပ်ခဲ့ကြောင်း သက်သေပြပါသည်။
ဤအတွေ့အကြုံများသည် ကျွန်တော်ကို အဆင့်မြင့် Developer တစ်ဦးအဖြစ် တိုးတက်အောင် အားဖြည့်ပေးခဲ့ပါသည်။
      </motion.p>


      <div className="flex flex-col gap-16 w-full max-w-7xl z-10 relative">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.25, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className={`flex flex-col ${
              i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
            } items-center bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-500 relative overflow-hidden`}
          >

            <div className="overflow-hidden rounded-2xl w-full sm:w-1/2 lg:w-2/5 mb-4 sm:mb-0">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-60 object-cover rounded-2xl transition-transform duration-700 hover:scale-110 hover:rotate-1"
              />
            </div>


            <div className="sm:mx-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-green-300 mb-2 drop-shadow-md">
                {cert.title}
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                Issued by{" "}
                <span className="text-gray-200 font-semibold">{cert.issuer}</span>, {cert.year}
              </p>
              <p className="text-gray-300 leading-relaxed">{cert.desc}</p>
            </div>


            <motion.div
              animate={{ x: ["-150%", "150%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
              className="absolute top-0 left-0 w-1/3 h-full  from-transparent via-white/25 to-transparent opacity-40 blur-xl pointer-events-none"
            />
          </motion.div>
        ))}
      </div>


      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-80  from-green-400/25 via-transparent to-transparent blur-3xl"
      />
    </div>
  );
}

export default Certificates;
