import { User, Calendar, Briefcase, GraduationCap, Calculator, ArrowRight } from "lucide-react";

const audiences = [
  {
    Icon: User,
    title: "Individuals & Families",
    body: "Paying too much for coverage — or going without? We\u2019ll show you exactly what\u2019s available in your area and help you find a plan that fits your budget.",
  },
  {
    Icon: Briefcase,
    title: "Small Business Owners",
    body: "Finding affordable group or individual plans for your team shouldn\u2019t be a full-time job. We\u2019ll help you explore options that protect your employees without breaking the bank.",
  },
  {
    Icon: Calendar,
    title: "Approaching Retirement",
    body: "Transitioning off employer coverage? Turning 65? We\u2019ll walk you through every option \u2014 from bridge coverage to Medicare supplements \u2014 before you\u2019re locked into the wrong plan.",
  },
];

export default function WhoIsItFor() {
  return (
    <section className="bg-white py-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          Is This For You?
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3">
          Coverage for Every Situation
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {audiences.map(({ Icon, title, body }, i) => (
          <div
            key={title}
            className="reveal bg-white rounded-2xl p-6 border-l-4 border-l-[#C9A040] shadow-[0_2px_20px_rgba(26,95,175,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,95,175,0.18)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Icon
              size={32}
              className="text-[#C9A040] mb-3"
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

      {/* Texas Educators Callout */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="reveal bg-[#FDF8EE] rounded-2xl border border-[#E8D5A8] p-8 md:p-10 shadow-[0_2px_20px_rgba(201,160,64,0.1)]">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[#C9A040]/15">
              <GraduationCap size={30} className="text-[#C9A040]" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-extrabold text-[#0F3F7A] text-xl md:text-2xl mb-2">
                Special Focus: Texas Educators
              </h3>
              <p className="font-body text-[#334155] text-[0.9375rem] leading-relaxed">
                If you&apos;re on TRS-ActiveCare, you may be overpaying &mdash; especially for family coverage.
                Thanks to the &ldquo;Family Glitch&rdquo; fix, many Texas teacher families now qualify for
                subsidized Marketplace plans and save <strong className="text-[#0F3F7A]">$200&ndash;$400/month</strong> while
                keeping the same doctors and PPO network access.
              </p>
              <div className="flex flex-wrap gap-4 mt-5">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 bg-[#C9A040] text-[#0F3F7A] font-display font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#A07C20] transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <Calculator size={16} />
                  Check Your Savings
                </a>
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 border-2 border-[#0F3F7A] text-[#0F3F7A] font-display font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#0F3F7A] hover:text-white transition-colors duration-200"
                >
                  Get a Free Review
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
