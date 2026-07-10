import { motion } from "framer-motion";
import { workflowSteps } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Workflow() {
  return (
    <section id="workflow" className="border-y border-bone/10 bg-ink-800 py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="流程 · Workflow"
          title={
            <>
              四步，
              <span className="text-gradient-amber italic"> 从草稿到共用</span>
            </>
          }
          description="无需复杂配置，从开辟画布到公开分享，整个流程在一处完成。"
        />

        <ol className="relative mt-16 ml-2 sm:ml-4">
          {/* 纵向连接线 */}
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-amber/60 via-bone/15 to-transparent sm:left-[11px]" />

          {workflowSteps.map((step, i) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0 sm:gap-8 sm:pb-16"
            >
              {/* 节点 */}
              <span className="relative z-10 mt-1.5 flex h-4 w-4 items-center justify-center sm:h-6 sm:w-6">
                <span className="absolute inset-0 rounded-full border border-amber/40" />
                <span className="h-2 w-2 rounded-full bg-amber sm:h-2.5 sm:w-2.5" />
              </span>

              <div className="pb-2">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-amber/70">
                  {step.step}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-bone sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-bone/60 sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
