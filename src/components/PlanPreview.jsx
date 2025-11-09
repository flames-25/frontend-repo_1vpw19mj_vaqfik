import { useMemo } from "react";
import { CalendarCheck2, CheckCircle2 } from "lucide-react";

function titleCase(str) {
  return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function generatePlan(input) {
  if (!input) return null;
  const { level, goal, time, equipment, activities, limitations } = input;

  const warmup = [
    "5 min brisk walk or easy cycle",
    "Dynamic mobility: arm circles, hip openers, cat-cow (3-5 min)",
  ];

  const strengthBlock = {
    beginner: [
      "Squat to chair x12",
      "Incline push-ups x10",
      "Hip bridge x12",
      "Row (band/dumbbell) x12",
      "Dead bug x10/side",
    ],
    intermediate: [
      "Goblet squat x10",
      "Push-up x10",
      "Romanian deadlift x10",
      "Single-arm row x10/side",
      "Side plank 30s/side",
    ],
    advanced: [
      "Front squat or pistol box squat x6-8",
      "Weighted push-up or dip x6-8",
      "Barbell RDL x6-8",
      "Weighted pull x6-8",
      "Hanging leg raise 8-10",
    ],
  }[level];

  const cardio = activities.includes("running")
    ? "Intervals: 6x1 min fast / 1 min easy"
    : activities.includes("cycling")
    ? "Tempo ride: 20 min steady at 6/10 effort"
    : "Power walk: 20 min at 6/10 effort";

  const durationAdjust = time < 25 ? "1-2 rounds" : time < 40 ? "2-3 rounds" : "3 rounds";

  const notes = [
    limitations ? `Modify for: ${limitations}` : null,
    "Rate of Perceived Exertion 6-7/10. Keep 2 reps in reserve for strength.",
    "Rest 60-90s between sets; longer for heavy efforts.",
  ].filter(Boolean);

  return {
    split: [
      { day: "Day 1", focus: "Full-Body Strength + Cardio", blocks: [warmup, strengthBlock, [cardio]] },
      { day: "Day 2", focus: "Mobility + Easy Cardio", blocks: [
        ["Full-body mobility flow 15-20 min"],
        ["Easy cardio 20-30 min at 4-5/10"],
      ] },
      { day: "Day 3", focus: goal === "muscle_gain" ? "Hypertrophy" : "Conditioning", blocks: [
        goal === "muscle_gain" ? [
          "Split squat x12/side",
          "Bench press or floor press x12",
          "Lat pulldown or assisted pull-up x10-12",
          "Hamstring curl x12",
        ] : [
          "Circuit x3: kettlebell swings 15, step-ups 10/side, mountain climbers 30s, rest 60s",
        ]
      ] },
    ],
    meta: {
      goal: titleCase(goal),
      level: titleCase(level),
      time,
      equipment: titleCase(equipment),
      notes,
    },
  };
}

function PlanPreview({ input }) {
  const plan = useMemo(() => generatePlan(input), [input]);
  if (!plan)
    return (
      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-gray-600">
        Fill the form to see your personalized weekly plan preview.
      </div>
    );

  return (
    <section className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 space-y-4">
      <div className="flex items-center gap-2">
        <CalendarCheck2 className="h-5 w-5 text-emerald-600" />
        <h2 className="text-lg font-semibold text-gray-900">Weekly plan preview</h2>
      </div>

      <div className="grid gap-3">
        {plan.split.map((d) => (
          <div key={d.day} className="rounded-xl border border-gray-100 p-4">
            <p className="font-medium text-gray-900">{d.day}: <span className="text-emerald-700">{d.focus}</span></p>
            <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
              {d.blocks.flat().map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-sm text-emerald-900">
        <p className="font-medium">Plan settings</p>
        <p>Level: {plan.meta.level} • Goal: {plan.meta.goal} • Time: {plan.meta.time} min • Equipment: {plan.meta.equipment}</p>
        <ul className="mt-1 space-y-1">
          {plan.meta.notes.map((n, i) => (
            <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5" /> {n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlanPreview;
