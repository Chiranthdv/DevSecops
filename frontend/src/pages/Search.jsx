import { useEffect, useState } from "react";
import axios from "axios";
import WorkerCard from "../components/WorkerCard";

function Search() {
  const [workers, setWorkers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/workers/verified")
      .then(res => setWorkers(res.data));
  }, []);

  // 🔥 filter logic
  const filteredWorkers = workers.filter(w =>
    w.userId.name.toLowerCase().includes(search.toLowerCase()) ||
    w.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-10">

      {/* 🔍 SEARCH BAR */}
      <div className="max-w-4xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by name or category..."
          className="w-full p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur focus:outline-none focus:border-blue-500"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🔥 TITLE */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Verified Workers 🔥
      </h1>

      {/* 🔥 GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {filteredWorkers.map((w) => (
          <WorkerCard key={w._id} worker={w} />
        ))}
      </div>

    </div>
  );
}

export default Search;