import { useMemo, useState, type FormEvent } from "react";
import { MessageCircle, X } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const starterPrompts = [
  "What should I do today?",
  "When is my next appointment?",
  "Have I taken my iron?",
  "What is my recovery stage?",
];

function buildAssistantReply(input: string): string {
  const normalized = input.toLowerCase();

  if (normalized.includes("appointment") || normalized.includes("doctor") || normalized.includes("visit")) {
    return "Your next planned appointment is on Tue, Oct 8 at 9:30 AM with your OB-GYN. Keep your questions and symptoms ready before you go.";
  }

  if (normalized.includes("iron") || normalized.includes("medication") || normalized.includes("vitamin")) {
    return "You’ve already taken your prenatal vitamin today. Your iron and calcium are still on the schedule for later today, so keep the reminder visible.";
  }

  if (normalized.includes("recovery") || normalized.includes("postpartum")) {
    return "You are in the early recovery phase. Focus on rest, hydration, gentle movement, and support from your partner or care team.";
  }

  if (normalized.includes("today") || normalized.includes("plan") || normalized.includes("do")) {
    return "Your top priorities today are hydration, medication, a gentle walk if you feel well, and a quick check-in on your symptoms and energy.";
  }

  if (normalized.includes("baby") || normalized.includes("feeding") || normalized.includes("sleep")) {
    return "Your baby is doing well with regular feeds and sleep. Keep watching for wet diapers, feeding cues, and any changes in energy or color.";
  }

  if (normalized.includes("hospital") || normalized.includes("bag")) {
    return "Your hospital bag is almost ready. Double-check chargers, clothes, documents, postpartum essentials, and any comfort items you want close by.";
  }

  return "That sounds important. A good next step is to keep your daily check-in simple: hydration, medications, rest, and any symptoms or questions you want to discuss with your care team.";
}

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hello Betty 👋 I’m here for your pregnancy, delivery, and postpartum questions. Ask me anything about today’s plan, care reminders, or recovery support.",
    },
  ]);

  const suggestions = useMemo(() => starterPrompts, []);

  const handleSend = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: buildAssistantReply(trimmed) },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-yellow-500"
      >
        {open ? <X size={30} /> : <MessageCircle size={30} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-88 rounded-3xl border border-yellow-200 bg-white shadow-2xl">
          <div className="rounded-t-3xl bg-yellow-400 p-5">
            <h2 className="text-xl font-bold">🐝 Betty AI</h2>
            <p className="text-sm">Your Pregnancy & Postpartum Companion</p>
          </div>

          <div className="h-80 overflow-y-auto p-4">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-2xl p-3 text-sm ${
                    message.role === "assistant"
                      ? "bg-yellow-50 text-gray-700"
                      : "bg-neutral-900 text-white"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setInput(suggestion)}
                  className="rounded-full border border-yellow-200 bg-white px-2.5 py-1 text-xs font-medium text-yellow-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSend} className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Betty anything..."
                className="w-full rounded-xl border border-yellow-200 p-3 text-sm outline-none focus:border-yellow-400"
              />
              <button
                type="submit"
                className="rounded-xl bg-yellow-400 px-3 py-2 font-bold text-black transition hover:bg-yellow-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}