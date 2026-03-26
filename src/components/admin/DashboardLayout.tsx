import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Folder, LogOut } from "lucide-react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token
    localStorage.removeItem("token");

    // Optional: clear everything if needed
    // localStorage.clear();

    // Redirect to login
    navigate("/", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-64 bg-black/95 backdrop-blur-xl border-r border-white/10 text-white p-6 flex flex-col justify-between">
        
        {/* Top Section */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight mb-10 text-white/90">
            Admin Panel
          </h2>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
              <Folder size={18} />
              Projects
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-red-400 hover:bg-white/10 transition-all duration-200"
            >
              <LogOut size={18} />
              Logout
            </button>
          </nav>
        </div>

        <div className="text-xs text-white/30 tracking-wide">
          © 2026 Your Company
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-neutral-950 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
