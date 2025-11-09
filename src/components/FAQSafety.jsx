import { ShieldCheck, AlertTriangle } from "lucide-react";

function FAQSafety() {
  return (
    <section className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 space-y-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-emerald-600" />
        <h2 className="text-lg font-semibold text-gray-900">Safety & guidance</h2>
      </div>
      <ul className="space-y-3 text-sm text-gray-700 list-disc pl-5">
        <li>Consult a healthcare professional for medical concerns or if returning after injury or pregnancy.</li>
        <li>Use the talk test: you should speak in short sentences during moderate cardio. Slow down if dizzy or breathless.</li>
        <li>Warm up 5–10 minutes; cool down and stretch 5 minutes. Progress volume by ~5–10% weekly.</li>
        <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 mt-0.5 text-amber-600" /> Stop and seek care for chest pain, unusual shortness of breath, or sharp joint pain.</li>
      </ul>
    </section>
  );
}

export default FAQSafety;
