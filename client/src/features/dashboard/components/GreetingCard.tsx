import Card from "@/components/ui/Card";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good Morning ☀️";
  }

  if (hour < 17) {
    return "Good Afternoon 🌼";
  }

  return "Good Evening 🌙";
}

const messages = [
  "Every kick, every heartbeat, every day brings you closer to meeting your little miracle.",
  "You're doing an amazing job. Your body was made for this journey.",
  "Take time to rest today. Your baby grows while you care for yourself.",
  "Healthy mama, healthy baby. Small daily choices make a big difference.",
  "One more beautiful day on your journey to motherhood.",
];

function getDailyMessage() {
  const day = new Date().getDate();

  return messages[day % messages.length];
}

export default function GreetingCard() {
  return (
    <Card className="bg-linear-to-r from-yellow-50 to-white">

      <h1 className="text-5xl font-black">
        {getGreeting()}, Betty 💛
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        {getDailyMessage()}
      </p>

    </Card>
  );
}