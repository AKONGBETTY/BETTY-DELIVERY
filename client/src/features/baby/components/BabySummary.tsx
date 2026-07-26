export default function BabySummary() {
  return (
    <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold text-yellow-700">
        👶 Baby Today
      </h2>

      <div className="space-y-4">

        <div className="rounded-2xl bg-yellow-50 p-4">
          <p className="text-sm text-gray-500">Last Feed</p>
          <p className="text-xl font-bold">2:30 PM</p>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-4">
          <p className="text-sm text-gray-500">Next Feed</p>
          <p className="text-xl font-bold">5:30 PM</p>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-4">
          <p className="text-sm text-gray-500">Last Sleep</p>
          <p className="text-xl font-bold">1 hr 20 mins</p>
        </div>

        <div className="rounded-2xl bg-yellow-50 p-4">
          <p className="text-sm text-gray-500">Diaper</p>
          <p className="text-xl font-bold">Wet ✔</p>
        </div>

      </div>

    </div>
  );
}