import { useEffect, useState } from "react";

const DUE_DATE = new Date("2026-11-03T00:00:00");

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculate());

  function calculate() {
    const difference = DUE_DATE.getTime() - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Box = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="rounded-2xl bg-yellow-50 p-5 text-center shadow">
      <div className="text-4xl font-black">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-gray-600">
        {label}
      </div>
    </div>
  );

  return (
    <div className="rounded-3xl border border-yellow-100 bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-bold">
        ⏳ Countdown to Due Date
      </h2>

      <div className="mt-8 grid grid-cols-4 gap-4">

        <Box value={timeLeft.days} label="Days" />
        <Box value={timeLeft.hours} label="Hours" />
        <Box value={timeLeft.minutes} label="Minutes" />
        <Box value={timeLeft.seconds} label="Seconds" />

      </div>

      <p className="mt-8 text-center text-lg text-gray-600">
        Every second brings you closer to meeting your baby 💛
      </p>

    </div>
  );
}