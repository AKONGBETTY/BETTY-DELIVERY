import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import FloatingAssistant from "@/features/ai/components/FloatingAssistant";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-yellow-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Header */}
        <header className="border-b border-yellow-200 bg-white px-8 py-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-yellow-500">
                🐝 Betty's Delivery
              </h1>

              <p className="text-sm text-gray-500">
                Your Pregnancy • Delivery • Postpartum Companion
              </p>
            </div>

            <div className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
              🌼 Welcome, Betty
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>

      {/* Betty AI */}
      <FloatingAssistant />
    </div>
  );
}