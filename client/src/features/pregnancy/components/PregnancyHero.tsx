import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getPregnancyData } from "../services/pregnancyCalculator";
import PregnancyProgressRing from "./PregnancyProgressRing";

export default function PregnancyHero() {
  const pregnancy = getPregnancyData();

  return (
    <Card className="relative overflow-hidden">
       
      {/* Due Date Badge */}

       <div className="absolute right-8 top-8">

          <div className="rounded-2xl border        border-yellow-200 bg-yellow-50 px-6 py-4 shadow-md">

             <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Expected Due Date
             </p>

             <h3 className="mt-1 text-2xl font-black text-gray-900">
                 November 3, 2026
             </h3>

             <p className="mt-1 text-sm text-gray-600">
                   {pregnancy.daysRemaining} days remaining
             </p>

            </div>

         </div>


      {/* Decorative background circles */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-100 opacity-30" />

      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-yellow-50 opacity-60" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <Badge>
            🤰 Pregnancy Journey
          </Badge>

          <h1 className="mt-6 text-5xl font-black leading-tight">
            Pregnancy Progress
          </h1>

          <p className="mt-5 text-xl text-gray-600">
            Week {pregnancy.weeks} • Day {pregnancy.days}
          </p>

          <div className="mt-6">

            <Badge>
              {pregnancy.trimester}
            </Badge>

          </div>

          <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">
            Every heartbeat, every kick and every day is bringing you
            closer to meeting your beautiful baby.
          </p>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="rounded-full bg-yellow-50 p-8 shadow-inner">

            <PregnancyProgressRing />

          </div>

        </div>

      </div>

    </Card>
  );
}