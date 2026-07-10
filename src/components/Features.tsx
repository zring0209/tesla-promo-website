import { motion } from "framer-motion";
import { features } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Features() {
  return (
    <section id="features" className="bg-ink-900 py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="特性 · Features"
          title={
            <>
              一张画布，
              <span className="text-gradient-amber italic"> 六重能力</span>
            </>
          }
          description="从汇聚到共识，从回溯到共用——MERIDIAN 把团队创作所需的关键能力，收拢在同一处。"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-ink-900 p-8 transition-colors duration-300 hover:bg-ink-800 lg:p-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-bone/10 bg-ink-700 text-amber transition-all duration-300 group-hover:border-amber/40 group-hover:bg-ink-600">
                  {feature.icon}
                </span>
                <span className="font-display text-sm text-bone/20 transition-colors group-hover:text-amber/60">
                  {feature.index}
                </span>
              </div>
              <h3 className="mb-3 font-display text-2xl font-medium tracking-tight text-bone">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-bone/60">
                {feature.description}
              </p>
              <span className="mt-6 block h-px w-0 bg-amber transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
