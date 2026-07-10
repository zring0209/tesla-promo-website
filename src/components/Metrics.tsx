import { metrics, type Metric } from "@/data/content";
import { useCountUp } from "@/hooks/useCountUp";
import Reveal from "@/components/ui/Reveal";

function MetricItem({ metric, index }: { metric: Metric; index: number }) {
  const decimals = metric.value % 1 !== 0 ? 1 : 0;
  const { ref, display } = useCountUp(metric.value, { decimals });

  return (
    <Reveal
      delay={index * 0.12}
      className="flex flex-col items-center text-center"
    >
      <span
        ref={ref}
        className="font-display text-6xl font-light tracking-tightest text-bone sm:text-7xl lg:text-8xl"
      >
        {display}
        <span className="text-gradient-amber">{metric.suffix}</span>
      </span>
      <span className="mt-4 text-sm uppercase tracking-[0.2em] text-bone/50">
        {metric.label}
      </span>
    </Reveal>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="grain-overlay relative bg-ink-900 py-24 lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="container relative z-10">
        <Reveal className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-amber" />
            <span className="text-xs uppercase tracking-[0.3em] text-amber/80">
              数据 · By the numbers
            </span>
            <span className="h-px w-8 bg-amber" />
          </div>
          <h2 className="font-display text-4xl font-light tracking-tight text-bone sm:text-5xl">
            被信赖的<span className="text-gradient-amber italic"> 共用 </span>空间
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {metrics.map((metric, i) => (
            <MetricItem key={metric.id} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
