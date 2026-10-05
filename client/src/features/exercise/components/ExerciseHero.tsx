import Card from "@/components/ui/Card";

export default function ExerciseHero() {
  return (
    <section>

      <Card className="relative overflow-hidden">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-100 opacity-30" />

        <div className="relative">

          <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
            💪 Safe Pregnancy & Recovery
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Exercise Library
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-9 text-gray-600">
            Carefully selected exercises for the third trimester and every
            stage of postpartum recovery. Follow your healthcare provider's
            advice and stop immediately if you feel pain, dizziness or heavy
            bleeding.
          </p>

        </div>

      </Card>

    </section>
  );
}