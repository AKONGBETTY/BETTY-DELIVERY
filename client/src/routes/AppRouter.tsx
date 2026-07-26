import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import PregnancyPage from "@/features/pregnancy/pages/PregnancyPage";
import RecoveryPage from "@/features/recovery/pages/RecoveryPage";
import BabyPage from "@/features/baby/pages/BabyPage";
import HealthPage from "@/features/health/pages/HealthPage";
import AppointmentsPage from "@/features/appointments/pages/AppointmentsPage";
import PartnerPage from "@/features/partner/pages/PartnerPage";
import ProfilePage from "@/features/profile/pages/ProfilePage";
import MedicationPage from "@/features/medication/pages/MedicationPage";
import LibraryPage from "@/features/library/pages/LibraryPage";
function NotFoundPage() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <h1 className="text-6xl font-black text-yellow-500">404</h1>

      <p className="mt-4 text-xl text-gray-600">
        Page not found.
      </p>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/pregnancy" element={<PregnancyPage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/baby" element={<BabyPage />} />
          <Route path="/medication" element={<MedicationPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}