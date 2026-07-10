import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="grain-overlay relative flex min-h-screen items-center overflow-hidden bg-ink-900 pt-24"
    >
      {/* 动态网格背景 */}
      <div className="bg-grid animate-grid-pan absolute inset-0 opacity-60" />
      {/* 光晕 */}
      <div className="animate-glow-pulse pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-amber/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-amber/10 blur-[100px]" />

      {/* 装饰水平线 */}
      <div className="absolute left-0 right-0 top-24 hidden h-px bg-bone/10 lg:block" />

      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-bone/15 bg-ink-700/40 px-4 py-1.5 text-xs tracking-wide text-bone/70 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            共享创意画布 · 公开可共用的协作空间
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-light leading-[0.95] tracking-tightest text-bone sm:text-7xl lg:text-8xl"
          >
            让分散的灵感，
            <br />
            <span className="text-gradient-amber italic">在同一空间</span>
            <br />
            汇聚成型。
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-bone/70"
          >
            MERIDIAN 是面向团队的共享创意画布。从草稿到共识，让每一次碰撞都留下痕迹，
            让每一个成果都能被公开共用、被持续延续。
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-ink-900 transition-all hover:bg-amber-400 hover:shadow-[0_0_32px_-4px_rgba(232,163,61,0.6)]"
            >
              免费开启画布
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-bone/20 px-7 py-3.5 text-sm font-medium text-bone transition-all hover:border-bone/50 hover:bg-bone/5"
            >
              <Play className="h-3.5 w-3.5 fill-bone" />
              观看演示
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex items-center gap-6 text-xs text-bone/40"
          >
            <span>无需信用卡</span>
            <span className="h-3 w-px bg-bone/20" />
            <span>永久免费档</span>
            <span className="h-3 w-px bg-bone/20" />
            <span>3 秒即可上手</span>
          </motion.div>
        </motion.div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-bone/40">
          Scroll
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-bone/40 to-transparent" />
      </motion.div>
    </section>
  );
}
