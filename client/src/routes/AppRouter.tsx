import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
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
import ExercisePage from "@/features/exercise/pages/ExercisePage";
import NutritionPage from "@/features/nutrition/pages/NutritionPage";
import HospitalBagPage from "@/features/hospitalBag/pages/HospitalBagPage";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";



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

function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-yellow-50 text-lg font-semibold text-yellow-700">
        Loading your care plan...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
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
            <Route path="/hospital-bag" element={<HospitalBagPage />} />
            <Route path="/exercise" element={<ExercisePage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}