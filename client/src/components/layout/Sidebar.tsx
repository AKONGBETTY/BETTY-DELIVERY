import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaHeartbeat,
  FaBaby,
  FaPills,
  FaTint,
  FaCalendarAlt,
  FaBookMedical,
  FaUsers,
  FaUser,
} from "react-icons/fa";
import { GiBabyBottle } from "react-icons/gi";
const links = [
  { to: "/dashboard", label: "Dashboard", icon: <FaHome /> },
  { to: "/pregnancy", label: "Pregnancy", icon: <GiBabyBottle /> },
  { to: "/recovery", label: "Recovery", icon: <FaHeartbeat /> },
  { to: "/baby", label: "Baby", icon: <FaBaby /> },
  { to: "/medication", label: "Medications", icon: <FaPills /> },
  { to: "/health", label: "Health", icon: <FaTint /> },
  { to: "/appointments", label: "Appointments", icon: <FaCalendarAlt /> },
  { to: "/library", label: "Library", icon: <FaBookMedical /> },
  { to: "/partner", label: "Partner Hub", icon: <FaUsers /> },
  { to: "/profile", label: "Profile", icon: <FaUser /> },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r border-yellow-200">
      <div className="p-6 border-b border-yellow-200">
        <h1 className="text-3xl font-black text-yellow-500">
          🐝 Betty's Delivery
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Pregnancy • Birth • Recovery
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-yellow-400 text-black"
                  : "text-gray-700 hover:bg-yellow-100"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}