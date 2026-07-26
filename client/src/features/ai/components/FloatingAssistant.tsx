import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-yellow-500"
      >
        {open ? (
          <X size={30} />
        ) : (
          <MessageCircle size={30} />
        )}
      </button>

      {/* Chat Window */}

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 rounded-3xl border border-yellow-200 bg-white shadow-2xl">

          <div className="rounded-t-3xl bg-yellow-400 p-5">

            <h2 className="text-xl font-bold">
              🐝 Betty AI
            </h2>

            <p className="text-sm">
              Your Pregnancy & Postpartum Companion
            </p>

          </div>

          <div className="h-80 overflow-y-auto p-5">

            <div className="rounded-2xl bg-yellow-50 p-4">

              <p className="font-semibold">
                Hello Betty 👋
              </p>

              <p className="mt-2 text-gray-600">
                I'm here whenever you need me.

                Ask me anything about pregnancy,
                delivery,
                postpartum recovery,
                medications,
                breastfeeding,
                or your baby's care.
              </p>

            </div>

          </div>

          <div className="border-t p-4">

            <input
              type="text"
              placeholder="Ask Betty anything..."
              className="w-full rounded-xl border border-yellow-200 p-3 outline-none focus:border-yellow-400"
            />

          </div>

        </div>
      )}
    </>
  );
}