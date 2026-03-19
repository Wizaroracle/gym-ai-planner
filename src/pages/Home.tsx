import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  if (user && !isLoading) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 relative">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] sm:w-[600px] sm:h-[400px] bg-[#aaff3e]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(170,255,62,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,62,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 bg-[#aaff3e]/10 border border-[#aaff3e]/30 text-[#aaff3e] px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-8 sm:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#aaff3e] animate-pulse shrink-0" />
          AI-Powered Training Plans
        </div>

        {/* Heading */}
        <h1
          className="relative leading-none font-black uppercase text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "4px",
          }}
        >
          YOUR GYM.
          <br />
          <span className="text-[#aaff3e]">YOUR PLAN.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-7 text-white/50 max-w-xs sm:max-w-md leading-relaxed font-light text-sm sm:text-base px-2">
          Stop guessing your workouts. WeGym builds personalized training
          programs around your goals, schedule, and equipment — powered by AI.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          <Link to="/auth/sign-up">
            <button className="w-full sm:w-auto bg-[#aaff3e] text-black font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:bg-[#c0ff5a] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(170,255,62,0.35)]">
              Get Started Free
            </button>
          </Link>
          <Link to="/auth/sign-in">
            <button className="w-full sm:w-auto border border-white/20 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:border-white/50 transition-all flex items-center justify-center gap-2 group">
              Sign In
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="relative mt-10 sm:mt-16 flex flex-row items-stretch border border-white/[0.08] rounded-2xl overflow-hidden bg-white/[0.02] w-full max-w-sm sm:max-w-none sm:w-auto">
          {[
            { num: "10K+", label: "Athletes" },
            { num: "50K+", label: "Plans Made" },
            { num: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`px-5 sm:px-10 py-4 sm:py-6 text-center flex-1 ${i > 0 ? "border-l border-white/[0.08]" : ""}`}
            >
              <div
                className="text-[#aaff3e] text-2xl sm:text-3xl tracking-wider"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {stat.num}
              </div>
              <div className="text-white/40 text-[9px] sm:text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="text-[#aaff3e] text-xs uppercase tracking-[0.15em] font-medium mb-3 sm:mb-4">
          Why WeGym
        </div>
        <h2
          className="leading-none tracking-widest mb-10 sm:mb-14 text-[2rem] sm:text-[3rem] md:text-[4rem]"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          BUILT FOR RESULTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {[
            {
              icon: "🤖",
              title: "AI Plan Generator",
              desc: "Tell us your goals, experience, and available time. Get a complete, periodized training plan in seconds.",
            },
            {
              icon: "📈",
              title: "Progressive Overload",
              desc: "Your plan adapts as you get stronger. Smart progression built in — no guesswork needed.",
            },
            {
              icon: "⚡",
              title: "Any Equipment",
              desc: "Full gym, home setup, or just dumbbells. WeGym builds around what you actually have.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-white/[0.07] rounded-2xl p-6 sm:p-8 hover:border-[#aaff3e]/30 hover:-translate-y-1 hover:bg-[#aaff3e]/[0.03] transition-all cursor-default"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#aaff3e]/10 rounded-xl flex items-center justify-center text-lg sm:text-xl mb-4 sm:mb-5">
                {card.icon}
              </div>
              <h3 className="font-medium text-sm sm:text-base mb-2">
                {card.title}
              </h3>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="mx-4 sm:mx-6 mb-16 sm:mb-24 bg-[#aaff3e] rounded-2xl sm:rounded-3xl px-6 sm:px-14 py-10 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-10 relative overflow-hidden">
        <div className="absolute right-[-60px] top-[-60px] w-72 h-72 bg-black/10 rounded-full pointer-events-none" />
        <div className="relative">
          <h2
            className="text-black leading-tight tracking-widest text-[1.8rem] sm:text-[2.5rem] md:text-[3rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            READY TO LEVEL UP?
          </h2>
          <p className="text-black/50 mt-1.5 text-xs sm:text-sm">
            Join thousands of athletes training smarter with WeGym.
          </p>
        </div>
        <Link to="/auth/sign-up">
          <button
            onClick={() => navigate("/auth?mode=signup")}
            className="relative w-full sm:w-auto bg-black text-white font-medium px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:bg-[#111] transition-all hover:-translate-y-0.5 text-center"
          >
            Start for Free →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
