import { Dumbbell, HeartPulse, Sparkles } from "lucide-react";

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center shadow">
            <Dumbbell className="h-6 w-6" />
          </div>
          <div>
            <p className="font-bold text-gray-900 leading-none">FitGuide AI</p>
            <p className="text-xs text-gray-500 -mt-0.5">Smart health & fitness coach</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-emerald-700">
          <HeartPulse className="h-5 w-5" />
          <span className="text-sm font-medium">Evidence-based. Safety-first.</span>
          <Sparkles className="h-4 w-4 text-amber-500" />
        </div>
      </div>
    </header>
  );
}

export default Header;
