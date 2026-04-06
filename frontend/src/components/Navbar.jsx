import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 
          onClick={() => navigate("/")}
          className="text-xl font-bold tracking-wide cursor-pointer"
        >
          Trust<span className="text-blue-500">Layer</span>
        </h1>

        <div className="flex items-center gap-6 text-sm">

          <button onClick={() => navigate("/search")} className="hover:text-blue-400">
            Explore
          </button>

          {!user ? (
            <>
              <button onClick={() => navigate("/login")} className="hover:text-blue-400">
                Sign in
              </button>

              <button 
                onClick={() => navigate("/register")}
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </>
          ) : (
            <span className="text-green-400">{user.name}</span>
          )}

        </div>

      </div>

    </div>
  );
}

export default Navbar;