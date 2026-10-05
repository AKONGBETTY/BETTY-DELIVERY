import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaHeartbeat,
  FaBaby,
  FaSuitcase,
  FaRunning,
  FaAppleAlt,
  FaPills,
  FaCalendarAlt,
  FaBookMedical,
  FaUsers,
  FaUserCircle,
} from "react-icons/fa";

const sections = [
  {
    title: "HOME",
    links: [
      { to: "/dashboard", label: "Dashboard", icon: <FaHome /> },
    ],
  },

  {
    title: "PREGNANCY",
    links: [
      { to: "/pregnancy", label: "Pregnancy", icon: <FaHeartbeat /> },
      { to: "/baby", label: "Baby", icon: <FaBaby /> },
      { to: "/hospital-bag", label: "Hospital Bag", icon: <FaSuitcase /> },
      { to: "/exercise", label: "Exercise", icon: <FaRunning /> },
      { to: "/nutrition", label: "Nutrition", icon: <FaAppleAlt /> },
    ],
  },

  {
    title: "HEALTH",
    links: [
      { to: "/medication", label: "Medication", icon: <FaPills /> },
      { to: "/health", label: "Health", icon: <FaHeartbeat /> },
      { to: "/appointments", label: "Appointments", icon: <FaCalendarAlt /> },
    ],
  },

  {
    title: "FAMILY",
    links: [
      { to: "/partner", label: "Partner", icon: <FaUsers /> },
    ],
  },

  {
    title: "RESOURCES",
    links: [
      { to: "/library", label: "Library", icon: <FaBookMedical /> },
    ],
  },

  {
    title: "ACCOUNT",
    links: [
      { to: "/profile", label: "Profile", icon: <FaUserCircle /> },
    ],
  },
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

      <nav className="flex-1 overflow-y-auto px-5 py-4">

        {sections.map((section) => (
          <div key={section.title} className="mb-6">

            <p className="mb-2 px-3 text-xs font-bold uppercase tracking-widest text-gray-500">
              {section.title}
            </p>

            <div className="space-y-2">

              {section.links.map((link) => (
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

            </div>

          </div>
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