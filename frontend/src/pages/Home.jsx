
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white px-6 relative overflow-hidden">

      {/* 🌌 BACKGROUND GLOW (FIXED z-index) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0"></div>

      {/* 🔥 HERO SECTION (z-10 so clickable) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-32">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Hire{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Trusted Workers
          </span>
          <br />
          Without the Guesswork
        </motion.h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl">
          Verified electricians and plumbers with real trust scores,
          real job history, and zero fake reviews.
        </p>

        {/* 🔥 BUTTONS (NOW WORKING 💯) */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/search")}
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
          >
            Explore Workers
          </button>

          <button
            onClick={() => navigate("/register")}
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Join Now
          </button>
        </div>

      </div>

      {/* 🔥 FLOATING CARDS */}
      <div className="relative z-10 mt-24 flex justify-center gap-6 flex-wrap">

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 w-64"
        >
          <h3 className="font-semibold">Ravi 🔧</h3>
          <p className="text-gray-400 text-sm">Plumber</p>
          <p className="text-green-400 mt-2">Trust: 80</p>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 w-64"
        >
          <h3 className="font-semibold">Arjun ⚡</h3>
          <p className="text-gray-400 text-sm">Electrician</p>
          <p className="text-green-400 mt-2">Trust: 92</p>
        </motion.div>

      </div>

      {/* 🔥 FEATURES */}
      <div className="relative z-10 mt-32 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-2">Verified Identity</h3>
          <p className="text-gray-400">
            Every worker is verified using real documents.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-2">Trust Score</h3>
          <p className="text-gray-400">
            Based on real work, not fake ratings.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 p-6 rounded-xl border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-2">Secure Hiring</h3>
          <p className="text-gray-400">
            Transparent and reliable system.
          </p>
        </motion.div>

      </div>

    </div>
  );
}

export default Home;