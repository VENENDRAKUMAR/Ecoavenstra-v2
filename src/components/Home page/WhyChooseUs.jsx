import { motion } from "framer-motion";
import {
  Users, Target, Palette, Zap, PenTool, Search,
  TrendingUp, Cpu, HeadphonesIcon, DollarSign
} from "lucide-react";
import WhyChoose from "/images/whyChoose.jpg";
import GridBackground from "/images/why-us.jpg";

const features = [
  { icon: Users, title: "Experience Developers", description: "Our seasoned team delivers exceptional solutions." },
  { icon: Target, title: "Audience Centric Design", description: "We design for your audience to drive results." },
  { icon: Palette, title: "Custom UI/UX", description: "Intuitive interfaces tailored to your brand." },
  { icon: Zap, title: "Future Ready", description: "Scalable tech built for tomorrow." },
  { icon: PenTool, title: "Mesmerizing Content", description: "Content that captures and converts." },
  { icon: Search, title: "SEO Ready", description: "Optimized for visibility and reach." },
  { icon: TrendingUp, title: "Brand Value Elevated", description: "Designs that boost brand perception." },
  { icon: Cpu, title: "Advanced Technology", description: "Latest tools for high performance." },
  { icon: HeadphonesIcon, title: "Long Term Support", description: "Ongoing care and maintenance." },
  { icon: DollarSign, title: "Competitive Pricing", description: "Premium quality at fair rates." },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full relative py-20 px-6 sm:px-16 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${GridBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We Are One Of The Top
            <span className="text-blue-400"> Digital Solutions</span>
            <br />
            <span className="text-green-400">Company With Latest Technologies</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            At Ecoavenstra, we craft performance-first digital solutions that don't just look great — they drive measurable business growth. From custom development to strategic consulting, we focus on what truly matters: speed, performance, and conversions that elevate your brand.
          </p>
        </motion.div>

        {/* Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-stretch">
          {/* Left: Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const direction = index % 2 === 0 ? -20 : 20;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: direction }}
                  animate={{ y: -direction }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all border border-white/20 hover:border-green-400 h-full"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-green-400" />
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center h-full"
          >
            <div className="relative w-full h-full max-h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-green-500/10 p-2 hover:shadow-[0_0_40px_#22c55e40] transition-all">
              <img
                src={WhyChoose}
                alt="Ecoavenstra Office"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
