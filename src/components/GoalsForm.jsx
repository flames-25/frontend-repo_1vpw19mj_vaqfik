import { useState } from "react";
import { Target, Clock, Activity } from "lucide-react";

function GoalsForm({ onSubmit }) {
  const [form, setForm] = useState({
    level: "beginner",
    goal: "fat_loss",
    time: 30,
    equipment: "bodyweight",
    limitations: "",
    activities: ["walking", "strength"],
  });

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(form);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Target className="h-5 w-5 text-emerald-600" />
        <h2 className="text-lg font-semibold text-gray-900">Your fitness profile</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Current level</label>
          <select
            value={form.level}
            onChange={(e) => update("level", e.target.value)}
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Primary goal</label>
          <select
            value={form.goal}
            onChange={(e) => update("goal", e.target.value)}
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          >
            <option value="fat_loss">Fat loss</option>
            <option value="muscle_gain">Muscle gain</option>
            <option value="endurance">Endurance</option>
            <option value="mobility">Mobility</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Clock className="h-4 w-4 text-emerald-600" /> Min per workout
          </label>
          <input
            type="number"
            min={10}
            max={120}
            value={form.time}
            onChange={(e) => update("time", Number(e.target.value))}
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Equipment</label>
          <select
            value={form.equipment}
            onChange={(e) => update("equipment", e.target.value)}
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          >
            <option value="bodyweight">Bodyweight only</option>
            <option value="dumbbells">Dumbbells</option>
            <option value="gym">Full gym</option>
          </select>
        </div>

        <div className="sm:col-span-2 space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Activity className="h-4 w-4 text-emerald-600" /> Preferred activities
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "walking", label: "Walking" },
              { id: "running", label: "Running" },
              { id: "strength", label: "Strength" },
              { id: "yoga", label: "Yoga" },
              { id: "cycling", label: "Cycling" },
            ].map((opt) => {
              const active = form.activities.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() =>
                    update(
                      "activities",
                      active
                        ? form.activities.filter((a) => a !== opt.id)
                        : [...form.activities, opt.id]
                    )
                  }
                  className={`px-3 py-1.5 rounded-full text-sm border transition focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                    active
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-2 space-y-1">
          <label className="text-sm font-medium text-gray-700">Limitations or injuries (optional)</label>
          <input
            type="text"
            placeholder="e.g., knee pain, lower back sensitivity"
            value={form.limitations}
            onChange={(e) => update("limitations", e.target.value)}
            className="w-full rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        >
          Build my plan
        </button>
      </div>

      <p className="text-xs text-gray-500">
        Safety note: Always consult a healthcare professional for medical concerns. Start
        gradually and listen to your body.
      </p>
    </form>
  );
}

export default GoalsForm;
