import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import FloatingAssistant from "@/features/ai/components/FloatingAssistant";
import { useAuth } from "@/context/AuthContext";

export default function MainLayout() {
  const { user, signOut } = useAuth();
  const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Betty";

  return (
    <div className="flex min-h-screen bg-yellow-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <header className="border-b border-yellow-200 bg-white px-8 py-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-yellow-500">🐝 Betty's Delivery</h1>
              <p className="text-sm text-gray-500">Your Pregnancy • Delivery • Postpartum Companion</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
                🌼 Welcome, {displayName}
              </div>
              <button
                type="button"
                onClick={() => void signOut()}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-yellow-300 hover:text-yellow-700"
              >
                Log out
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>

      <FloatingAssistant />
    </div>
  );
}