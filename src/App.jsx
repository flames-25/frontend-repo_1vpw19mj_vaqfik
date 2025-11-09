import { useState } from "react";
import Header from "./components/Header";
import GoalsForm from "./components/GoalsForm";
import PlanPreview from "./components/PlanPreview";
import NutritionTips from "./components/NutritionTips";
import FAQSafety from "./components/FAQSafety";

function App() {
  const [input, setInput] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-gray-800">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <section className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Your AI health & fitness assistant
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a safe, personalized workout plan with nutrition guidance. Built on evidence-based
            principles and tailored to your level, goals, and equipment.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-6">
          <GoalsForm onSubmit={setInput} />
          <PlanPreview input={input} />
        </div>

        <NutritionTips />
        <FAQSafety />

        <section className="text-center text-sm text-gray-500">
          This is general information and not a substitute for professional medical advice.
        </section>
      </main>
    </div>
  );
}

export default App;
