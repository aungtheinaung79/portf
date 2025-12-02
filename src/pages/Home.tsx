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

      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(120deg,_#0f172a,_#052e16,_#111827,_#0f172a)] bg-[length:200%_200%] -z-10"
      ></motion.div>


      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-green-500/25 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/25 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-40 h-40 /25 blur-2xl rounded-full"
      ></motion.div>

      {/* 🧑‍💻 Profile Image */}
      <motion.img
        src="/ace.jpg"
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-48 h-48 object-cover rounded-full border-4 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-transform duration-500 hover:rotate-6 hover:scale-110 cursor-pointer"
      />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl font-extrabold mt-5 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-105 transition-transform duration-300"
      >
        Nyi Thein Aung
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl font-semibold text-green-400 italic mt-2 hover:scale-105 transition-transform duration-300"
      >
        Software Developer
      </motion.h2>


      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-300 max-w-2xl text-lg mt-5 leading-relaxed px-4"
      >
        I’m a passionate <span className="text-green-400">Software Developer</span> 
      Home ဖေ့ချ် (Home page) — အကြောင်းအရာ အကုန်ပေါင်းနဲ့ အတိုချုပ် (Myanmar / Burmese)

အောက်မှာ Home စာမျက်နှာတွင် ထည့်သင့်တဲ့ အစိတ်အပိုင်းတွေကို (1) အကြောင်းပြချက်/ရွေ့ပြောင်းချက် (what it is), (2) တိုတောင်းတဲ့ စာသားနမူနာ (sample copy) နဲ့ (3) အသေးစိတ်ထည့်နိုင်တဲ့ အချက်များဖြင့် တစိတ်တပိုင်းတိုင်း ပေးထားပါတယ် — သင့် design / portfolio နဲ့ အဆင်ပြေစေဖို့။

Hero / ပထမမျက်နှာမြင်ကွင်း

 သူ့ရဲ့ နာမည်၊ ဘာလုပ်သည်၊ အဓိက CTA (ဥပမာ: Portfolio ကြည့်ရန် / ဆက်သွယ်ရန်) တို့ကို မြင်သာစေတဲ့ အပိုင်း။
နမူနာစာကြောင်း (1-2 ဖော်မြူလာ):
မင်္ဂလာပါ — ကျွန်တော်/ကျွန်မ Aung Paing Hein, Web & Mobile Developer. အဆင်ပြေပြီး သက်သာစိတ်ချရသော digital ဖြေရှင်းချက်များ ဖန်တီးပေးပါတယ်.
ထည့်စရာ: လုပ်ဆောင်ချက် (CTAs): Portfolio ကြည့်မည်, ဆက်သွယ်မည် ခလုတ်များ၊ နောက်ခံပုံ/မိုင်းကဒ် (illustration)၊ social icons။

နမူနာ:
ကျွန်တော်/ကျွန်မသည် 3+ နှစ် အတွေ့အကြုံရှိ Web & Mobile Developer ဖြစ်ပြီး React, Next.js, Node.js နှင့် Flutter တို့ဖြင့် မြန်မြန်ဆန်ဆန် UI/UX အခြေခံ app များနှင့်သက်ဆိုင်ရာ back-end များ တည်ဆောက်ပေးသည်။
ထည့်စရာ: တာဝန်/လုပ်ဖော်ကိုင်ဖက် (freelance, agency), ရည်ရွယ်ချက် (user-centered design)။

Key Services / ကျွမ်းကျင်မှုများ (short list)

ဘာလဲ: တိုတောင်းသဘောနဲ့ သင်ပေးနိုင်တဲ့ service များ (3–6ခု)။
နမူနာ bullets:

Website Development (Responsive, SEO-friendly)

Mobile Apps (iOS & Android)

UI/UX Design & Prototyping

Backend & API Integration

Maintenance & Optimization
ထည့်စရာ: တစ်ခုချင်းစီအတွက် 1-line benefits (e.g., "fast-loading", "scalable")။

Featured Projects preview / စိတ်ဝင်စားစေမယ့် project တစ်ခုနှင့် link

ဘာလဲ: နောက်ထပ် Projects ဆီ ဧည့်ကြည့်သူကို ဦးတည်စေမဲ့ သုံးပုံ/တင်ပြချက်။
နမူနာ: Project: E-Commerce App — React + Node.js. ရလဒ်: Conversion +30%
ထည့်စရာ: အသေးစိတ် link, screenshot, short metrics (if any)။

Skills / နည်းပညာကျွမ်းကျင်မှု (visual badges or bar)

ဘာလဲ: Tech stack, tools (React, Tailwind, Firebase, Git...) ကို compact ဖော်ပြ။
နမူနာ: React • Next.js • TypeScript • Node.js • Express • PostgreSQL • Firebase • Tailwind CSS
ထည့်စရာ: proficiency percentage (optional)။

Testimonials / ဖောက်သည်မှတ်ချက် (optional)

ဘာလဲ: Client feedback 1–3 ခု (short quotes) — ယုံကြည်မှုတိုးစေမယ်။
နမူနာ: "Aung အလုပ်က အချိန်မီပြီး အရည်အသွေးမြင့် — ကိစ္စအရင်းအမြစ် အားလုံးကို ကျော်လွှားသွားခဲ့တယ်." — XYZ Company
ထည့်စရာ: client logo များ၊ case study link။

Call to Action (CTA) — တိုက်ရိုက်လုပ်ဆောင်စေမယ်

ဘာလဲ: Contact / Hire / Portfolio ကြည့်ရန် ခလုတ်။
နမူနာ: မိတ်ဆက်ချက် ပေးချင်ပါသလား? — Portfolio ကြည့်ရန် | Project ပြောချင်တယ် = ဆက်သွယ်ပါ
ထည့်စရာ: Email link, contact form shortcut, phone number (optional)။

Footer / နောက်ဆုံးပိုင်း

ဘာလဲ: Copyright, Social links, Quick links (About, Projects, Contact)။
နမူနာ: © 2025 Aung Paing Hein — All rights reserved.

 ပြင်ဆင်ပြီး အသုံးချမလဲ ပြောပါ — ပြီးချိန်မှာ အပေါင်းအစုံ code/sample တွေကို တိုက်ရိုက်ရေးပေးမယ်။

You said:
Home ရဲအကြောင်းတွေအကုန်ပြောပေးပါ ကျန်နော်‌ေရးထားချင်လို့ပါ
ChatGPT said:

အောက်မှာ Home Page (Portfolio Website အတွက်) ရဲ့ အကြောင်းအရာအားလုံးကို အသေးစိတ်နဲ့ အဆင့်လိုက် သုံးသပ်ဖော်ပြထားပါတယ်။
ဒီလိုနဲ့ သင်ရေးချင်တဲ့ “Home” ဖိုင်အတွက် အကြောင်းအရာအကုန်သိပြီး တစ်ခုပြန်တည်းဖြတ်ရေးလို့လွယ်ပါတယ်။

🏠 Home Page (အဓိကအကြောင်းအရာအပြည့်အစုံ)
1. Hero Section (ပထမမြင်ကွင်း / မိတ်ဆက်အပိုင်း)

👉 Purpose: Visitor ဝင်လာချိန်မှာ အရင်ဆုံးတွေ့ရမယ့် မိတ်ဆက်ပိုင်း — ကိုယ်ဘယ်သူလဲ၊ ဘာလုပ်လဲ၊ အဓိက CTA (Call To Action) ပါတယ်။

ပါဝင်သင့်တာများ:

နာမည် (e.g., I’m Aung Paing Hein)

Role / Title (e.g., Web & Mobile Developer)

မိတ်ဆက်စာ (short intro)

CTA Buttons (e.g., View My Projects, Contact Me)

Background effect / Animation / Motion

နမူနာအကြောင်းအရာ:

Hi, I'm Aung Paing Hein 👋  
A passionate Web & Mobile Developer who creates fast, secure, and visually stunning digital experiences.  
Let's build something amazing together!  
[View My Projects] [Contact Me]

2. About Me (အကြောင်းအရာအတိုချုပ်)

👉 Purpose: ကိုယ်ဘယ်သူလဲ၊ ဘာတွေကျွမ်းတယ်၊ ဘယ်လိုအတွေးအခေါ်နဲ့ အလုပ်လုပ်လဲ ဆိုတာ ဖော်ပြတဲ့အပိုင်း။

ပါဝင်သင့်တာများ:

ကိုယ်ရေးအကြောင်းအတိုချုပ် (2–3 sentences)

Skills summary

Professional goal / vision

နမူနာ:

I'm a developer with over 3 years of experience in building modern web and mobile applications using React, Next.js, Node.js, and Flutter.  
I focus on creating user-friendly, high-performance, and visually appealing products that deliver real value to businesses.

3. Services (ဝန်ဆောင်မှုများ)

👉 Purpose: ကိုယ်ပေးနိုင်တဲ့ ဝန်ဆောင်မှုတွေကို ဖော်ပြတဲ့အပိုင်း။

ပါဝင်သင့်တာများ:

3–5 ဝန်ဆောင်မှု

အတိုချုပ်ဖော်ပြချက် (1–2 line per service)

Icon / Image

နမူနာ:

💻 Web Development — I build responsive, fast, and SEO-friendly websites.  
📱 Mobile App Development — I develop modern cross-platform apps using Flutter.  
🎨 UI/UX Design — I design clean and intuitive user interfaces for web & mobile.  
⚙️ Backend Integration — I connect your apps with powerful and secure APIs.

4. Featured Projects (အထင်ကြီးဆုံး Project များ)

👉 Purpose: ကိုယ်အကြိုက်ဆုံး project 2–3 ခု ဖော်ပြပြီး visitor ကို “Projects Page” ဆီ ချဲ့ချင်စေဖို့။

ပါဝင်သင့်တာများ:

Project title

Screenshot

Short description

Technologies used

Link to project details


👉 Purpose: ကိုယ်အသုံးပြုတတ်တဲ့ Programming Languages, Frameworks, Tools တို့ကို ဖော်ပြ။

နမူနာ:

React • Next.js • Node.js • Express • TypeScript • Flutter • Tailwind CSS • Firebase • Git


(Progress bar / icons နဲ့ ပြဖို့လည်း ရပါတယ်။)

6. Testimonials (Client Feedback / အမြင်များ)


      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="flex gap-6 mt-6 text-3xl"
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
            whileHover={{ scale: 1.3, color: "#4ade80" }}
            transition={{ type: "spring", stiffness: 250 }}
            className="text-gray-400 hover:text-green-400 transition-colors duration-300"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.img
        src="/hptos.png"
        alt="Web Illustration"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="w-full max-w-xl mt-10 object-contain transition-transform duration-500 hover:scale-105 hover:rotate-3 cursor-pointer"
      />

      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-72 from-green-400/20 via-transparent to-transparent blur-3xl"
      ></motion.div>
    </div>
  );
}

export default Home;
