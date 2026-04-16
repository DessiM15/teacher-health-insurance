import Image from "next/image";

const testimonials = [
  {
    name: "Jennifer R.",
    role: "Small Business Owner, Prosper TX",
    avatar:
      "https://ui-avatars.com/api/?name=Jennifer+R&background=1A5FAF&color=C9A040&bold=true&size=80",
    quote:
      "I was paying over $650 a month for my family through my previous employer plan. Rigo found us a plan through New Horizons for $410. Same network, same doctors. I couldn\u2019t believe it was real.",
  },
  {
    name: "Marcus B.",
    role: "Self-Employed, Dallas TX",
    avatar:
      "https://ui-avatars.com/api/?name=Marcus+B&background=1A5FAF&color=C9A040&bold=true&size=80",
    quote:
      "As a single healthy guy I had no idea I qualified for a better plan at half the cost. The whole process took one phone call. Rigo handled everything.",
  },
  {
    name: "Patricia W.",
    role: "Retiring Professional",
    avatar:
      "https://ui-avatars.com/api/?name=Patricia+W&background=1A5FAF&color=C9A040&bold=true&size=80",
    quote:
      "I was terrified about losing my employer coverage when I retired. Rigo walked me through every option patiently and got me set up with a Medicare supplement plan that fit my budget perfectly.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F1F5F9] py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          What Our Clients Say
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3">
          Real Clients. Real Savings.
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, role, avatar, quote }, i) => (
          <div
            key={name}
            className="reveal relative bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(26,95,175,0.08)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Stars */}
            <div className="text-[#C9A040] text-sm mb-3 tracking-wide">
              ★★★★★
            </div>

            {/* Decorative quote mark */}
            <span
              className="absolute top-3 left-4 font-serif text-[5rem] leading-none text-[#C9A040] opacity-20 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote */}
            <p className="relative z-10 font-serif italic text-[#334155] text-[0.975rem] leading-relaxed mb-5">
              {quote}
            </p>

            {/* Divider */}
            <div className="h-px bg-[#CBD5E1] mb-4" />

            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={name}
                width={40}
                height={40}
                className="rounded-full"
                unoptimized
              />
              <div>
                <p className="font-display font-bold text-[#0F3F7A] text-sm">
                  {name}
                </p>
                <p className="font-body text-[#64748B] text-xs">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
