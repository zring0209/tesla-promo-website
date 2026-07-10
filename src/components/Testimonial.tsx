import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="border-y border-bone/10 bg-ink-800 py-24 lg:py-32"
    >
      <div className="container">
        <SectionHeading
          eyebrow="证言 · Testimonial"
          title={
            <>
              来自团队的
              <span className="text-gradient-amber italic"> 真实回响</span>
            </>
          }
        />

        <Reveal delay={0.1} className="mt-14">
          <figure className="relative max-w-4xl">
            <span
              aria-hidden
              className="absolute -left-2 -top-10 font-display text-[180px] leading-none text-amber/15 sm:-left-6 sm:text-[240px]"
            >
              &ldquo;
            </span>
            <blockquote className="relative">
              <p className="font-display text-2xl font-light leading-relaxed tracking-tight text-bone sm:text-3xl lg:text-4xl">
                我们把产品规划、设计评审和用户研究都搬到了 MERIDIAN 上。
                一张画布公开共用，让跨时区的协作第一次变得像围坐同一张桌子。
                它不只是工具，更像是我们团队的集体记忆。
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber to-amber-600 font-display text-lg font-medium text-ink-900">
                L
              </span>
              <div>
                <p className="font-medium text-bone">林知远</p>
                <p className="text-sm text-bone/50">
                  Atlas Studio · 产品负责人
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
