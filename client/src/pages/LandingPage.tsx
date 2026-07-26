import Button from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <section className="bg-linear-to-br from-yellow-50 via-white to-amber-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <p className="mb-4 text-yellow-600 font-semibold">
            🐝 Pregnancy • Delivery • Postpartum
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">

            Welcome to

            <span className="text-yellow-500">
              {" "}Betty's Delivery Journey
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">

            A complete companion that supports mothers through
            pregnancy, childbirth, and postpartum recovery.

          </p>

          <div className="mt-10 flex gap-4">

            <Button>
              Get Started
            </Button>

            <Button variant="outline">
              Learn More
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}