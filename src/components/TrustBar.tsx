import Reveal from "@/components/ui/Reveal";
import { trustedBy } from "@/data/content";

export default function TrustBar() {
  return (
    <section className="border-y border-bone/10 bg-ink-800 py-12">
      <div className="container">
        <Reveal className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-bone/40">
            已被这些团队公开共用
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-16">
            {trustedBy.map((name) => (
              <li
                key={name}
                className="font-display text-xl font-medium tracking-tight text-bone/30 transition-colors duration-300 hover:text-bone/70 lg:text-2xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
