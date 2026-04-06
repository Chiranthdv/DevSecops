// import { motion } from "framer-motion";

// function WorkerCard({ worker }) {

//   const hireWorker = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     await fetch("http://localhost:5000/api/jobs/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         customerId: user._id,
//         workerId: worker.userId._id,
//         description: "Need service",
//         address: "Bangalore",
//         scheduledTime: new Date()
//       })
//     });

//     alert("Job Requested 🚀");
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg transition-all"
//     >

//       {/* 🧑 NAME */}
//       <h2 className="text-xl font-semibold mb-1">
//         {worker.userId.name}
//       </h2>

//       {/* 🔧 CATEGORY */}
//       <p className="text-gray-400 capitalize mb-2">
//         {worker.category}
//       </p>

//       {/* ⏱ EXPERIENCE */}
//       <p className="text-sm text-gray-300">
//         Experience: {worker.experience} years
//       </p>

//       {/* ⭐ TRUST SCORE */}
//       <div className="mt-4">
//         <p className="text-sm mb-1">Trust Score</p>

//         <div className="w-full bg-gray-800 rounded-full h-2">
//           <div 
//             className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
//             style={{ width: `${worker.trustScore}%` }}
//           ></div>
//         </div>

//         <p className="text-green-400 mt-1 text-sm">
//           {worker.trustScore} / 100
//         </p>
//       </div>

//       {/* 🔥 BUTTON */}
//       <button 
//         onClick={hireWorker}
//         className="mt-5 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Hire Now
//       </button>

//     </motion.div>
//   );
// }

// export default WorkerCard;

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import BookingModal from "./BookingModal";

// function WorkerCard({ worker }) {
//   const [showModal, setShowModal] = useState(false);

//   const handleHireClick = () => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     // 🔴 LOGIN CHECK
//     if (!user) {
//       toast.warning("⚠️ Please login first");
//       return;
//     }

//     // 🔴 ROLE CHECK
//     if (user.role !== "customer") {
//       toast.error("❌ Only customers can hire workers");
//       return;
//     }

//     // ✅ OPEN MODAL
//     setShowModal(true);
//   };

//   return (
//     <>
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg"
//       >

//         {/* 🧑 NAME */}
//         <h2 className="text-xl font-semibold">
//           {worker?.userId?.name}
//         </h2>

//         {/* 🔧 CATEGORY */}
//         <p className="text-gray-400 capitalize">
//           {worker?.category}
//         </p>

//         {/* ⏱ EXPERIENCE */}
//         <p className="text-sm text-gray-300">
//           Experience: {worker?.experience} yrs
//         </p>

//         {/* 🔥 BUTTON */}
//         <button
//           onClick={handleHireClick}
//           className="mt-4 w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Hire Now
//         </button>

//       </motion.div>

//       {/* 🔥 MODAL */}
//       {showModal && (
//         <BookingModal
//           worker={worker}
//           onClose={() => setShowModal(false)}
//         />
//       )}
//     </>
//   );
// }

// export default WorkerCard;



import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import BookingModal from "./BookingModal";

function WorkerCard({ worker }) {
  const [showModal, setShowModal] = useState(false);

  const handleHireClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    // 🔴 LOGIN CHECK
    if (!user) {
      toast.warning("⚠️ Please login first");
      return;
    }

    // 🔴 ROLE CHECK
    if (user.role !== "customer") {
      toast.error("❌ Only customers can hire workers");
      return;
    }

    // ✅ OPEN MODAL
    setShowModal(true);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg transition-all"
      >

        {/* 🧑 NAME */}
        <h2 className="text-xl font-semibold mb-1">
          {worker?.userId?.name || "Unknown"}
        </h2>

        {/* 🔧 CATEGORY */}
        <p className="text-gray-400 capitalize mb-2">
          {worker?.category}
        </p>

        {/* ⏱ EXPERIENCE */}
        <p className="text-sm text-gray-300">
          Experience: {worker?.experience} years
        </p>

        {/* ⭐ TRUST SCORE */}
        <div className="mt-4">
          <p className="text-sm mb-1">Trust Score</p>

          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
              style={{ width: `${worker?.trustScore || 0}%` }}
            ></div>
          </div>

          <p className="text-green-400 mt-1 text-sm">
            {worker?.trustScore || 0} / 100
          </p>
        </div>

        {/* 🔥 BUTTON */}
        <button
          onClick={handleHireClick}
          className="mt-5 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Hire Now
        </button>

      </motion.div>

      {/* 🔥 MODAL */}
      {showModal && (
        <BookingModal
          worker={worker}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default WorkerCard;