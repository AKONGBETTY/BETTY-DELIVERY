import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-12">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold text-yellow-600">🐝 Pregnancy • Delivery • Postpartum</p>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Welcome to
            <span className="block text-yellow-500">Betty's Delivery Journey</span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            A complete companion that supports mothers through pregnancy, childbirth, and postpartum recovery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
            <Link to="/login">
              <Button className="bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">Log in</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}