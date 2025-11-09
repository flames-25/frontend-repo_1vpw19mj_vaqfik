import { Salad, Scale, Flame } from "lucide-react";

const tips = [
  {
    icon: Salad,
    title: "Prioritize protein",
    text:
      "Aim for ~1.6–2.2 g/kg body weight daily to support muscle and satiety. Include a quality protein source each meal.",
    cite: "Morton et al., Br J Sports Med, 2018",
    url: "https://bjsm.bmj.com/content/52/6/376",
  },
  {
    icon: Scale,
    title: "Energy balance drives weight change",
    text:
      "Consistent calorie deficit leads to fat loss; surplus supports gain. Choose minimally processed foods for easier appetite control.",
    cite: "Hall et al., Cell Metab, 2019",
    url: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30248-7",
  },
  {
    icon: Flame,
    title: "Fiber + hydration",
    text:
      "25–35 g fiber/day and adequate water aid fullness and digestive health. Add veggies, legumes, whole grains, fruit.",
    cite: "US Dietary Guidelines 2020-2025",
    url: "https://www.dietaryguidelines.gov/",
  },
];

function NutritionTips() {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Nutrition quick wins</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {tips.map(({ icon: Icon, title, text, cite, url }) => (
          <a key={title} href={url} target="_blank" rel="noreferrer" className="group block bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm transition">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
                <Icon className="h-5 w-5" />
              </span>
              <p className="font-medium text-gray-900 group-hover:text-emerald-700">{title}</p>
            </div>
            <p className="mt-2 text-sm text-gray-700">{text}</p>
            <p className="mt-2 text-xs text-gray-500">Source: {cite}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default NutritionTips;
