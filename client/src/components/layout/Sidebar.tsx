import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaHeartbeat,
  FaBaby,
  FaCalendarAlt,
  FaBookMedical,
  FaRobot,
  FaCog,
} from "react-icons/fa";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: <FaHome /> },
  { to: "/pregnancy", label: "Pregnancy", icon: <FaHeartbeat /> },
  { to: "/baby", label: "Baby", icon: <FaBaby /> },
  { to: "/health", label: "Health", icon: <FaHeartbeat /> },
  { to: "/appointments", label: "Appointments", icon: <FaCalendarAlt /> },
  { to: "/planner", label: "Planner", icon: <FaCalendarAlt /> },
  { to: "/library", label: "Resources", icon: <FaBookMedical /> },
  { to: "/assistant", label: "AI Assistant", icon: <FaRobot /> },
  { to: "/settings", label: "Settings", icon: <FaCog /> },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col bg-neutral-950 text-white">

      {/* Logo */}
      <div className="border-b border-neutral-800 p-8">

        <h1 className="text-4xl font-black leading-tight">
          🐝 Betty's
          <br />
          <span className="text-yellow-400">
            Delivery
          </span>
        </h1>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all ${
                isActive
                  ? "bg-yellow-400 font-bold text-black"
                  : "text-gray-300 hover:bg-neutral-900"
              }`
            }
          >
            <span className="text-xl">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}

      </nav>

      {/* Betty AI */}

      <div className="p-5">

        <div className="rounded-3xl border border-yellow-400/30 bg-neutral-900 p-5">

          <div className="mb-3 text-3xl">
            🐝
          </div>

          <h3 className="font-bold">
            Betty AI
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Your Pregnancy Companion
          </p>

        </div>

      </div>

    </aside>
  );
}