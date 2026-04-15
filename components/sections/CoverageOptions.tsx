import {
  Heart,
  Building2,
  Shield,
  Zap,
  Plus,
  Award,
} from "lucide-react";

const cards = [
  {
    Icon: Heart,
    title: "Defined Health Plans",
    body: "Our signature plans combine PPO access with Accident & Critical Illness coverage built right in — comprehensive protection in one package.",
  },
  {
    Icon: Building2,
    title: "ACA / Marketplace Plans",
    body: "Federal marketplace plans with income-based subsidies. Often significantly cheaper than TRS-ActiveCare, especially for healthy individuals.",
  },
  {
    Icon: Shield,
    title: "Critical Illness Coverage",
    body: "Two-category critical illness protection covering first-occurrence cancer AND heart attack, stroke, or transplant events — like getting two policies in one.",
  },
  {
    Icon: Zap,
    title: "Accident Policies",
    body: "Ideal for teachers with active kids in sports or physically demanding environments. Pays benefits directly to you, regardless of other coverage.",
  },
  {
    Icon: Plus,
    title: "Supplemental Plans",
    body: "Dental, vision, short-term disability, and more. Fills the gaps your primary plan leaves behind.",
  },
  {
    Icon: Award,
    title: "Medicare Guidance",
    body: "Approaching 65 or transitioning off TRS? We walk you through supplement plans, Part D, and Medicare Advantage options step by step.",
  },
];

export default function CoverageOptions() {
  return (
    <section id="coverage" className="bg-[#F8FAFD] py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          What We Offer
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-4">
          Coverage Built Around Your Life
        </h2>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-xl mx-auto">
          We don&apos;t believe in one-size-fits-all. Every plan we recommend is
          built around your specific situation, family, and budget.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ Icon, title, body }, i) => (
          <div
            key={title}
            className="reveal group bg-white rounded-2xl p-6 border border-[#CBD5E1] shadow-[0_2px_20px_rgba(26,95,175,0.08)] transition-all duration-200 hover:border-t-4 hover:border-t-[#1A5FAF] hover:shadow-[0_8px_32px_rgba(26,95,175,0.18)] hover:-translate-y-1"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Icon
              size={32}
              className="text-[#1A5FAF] mb-4"
              strokeWidth={1.75}
            />
            <h3 className="font-display font-bold text-[#0F3F7A] text-[1.125rem] mb-2">
              {title}
            </h3>
            <p className="font-body text-[#334155] text-[0.9375rem] leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
