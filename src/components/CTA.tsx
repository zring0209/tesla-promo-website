import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="bg-ink-900 py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grain-overlay relative overflow-hidden rounded-3xl border border-amber/30 bg-gradient-to-br from-amber-600 via-amber to-amber-400 px-8 py-16 text-center sm:px-16 lg:py-24"
        >
          {/* 装饰圆环 */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-ink-900/10" />
          <div className="pointer-events-none absolute -right-10 -bottom-24 h-72 w-72 rounded-full border border-ink-900/10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-900/5 blur-2xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl">
              现在就开辟你的
              <br />
              第一张共用画布
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-ink-900/70 sm:text-lg">
              永久免费档，无需信用卡。让团队的下一个想法，在 MERIDIAN 上汇聚成型。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#top"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-sm font-medium text-bone transition-all hover:bg-ink-700 hover:shadow-[0_0_32px_-4px_rgba(14,14,12,0.6)]"
              >
                免费开启画布
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-ink-900/30 px-8 py-4 text-sm font-medium text-ink-900 transition-all hover:bg-ink-900/10"
              >
                了解更多
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
