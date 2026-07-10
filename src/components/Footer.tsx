import { Github, Twitter, Linkedin } from "lucide-react";

const footerColumns = [
  {
    title: "产品",
    links: ["特性", "流程", "定价", "更新日志"],
  },
  {
    title: "资源",
    links: ["文档", "模板库", "社区", "状态"],
  },
  {
    title: "公司",
    links: ["关于", "博客", "招聘", "联系"],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Github, label: "GitHub" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink-900">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {/* 品牌 */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-amber/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              </span>
              <span className="font-display text-lg font-medium tracking-tight">
                MERIDIAN
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/50">
              让分散的灵感在同一空间汇聚成型。面向团队的共享创意画布与协作知识平台。
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href="#top"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/10 text-bone/50 transition-all hover:border-amber/40 hover:text-amber"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 链接列 */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-bone/40">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-bone/60 transition-colors hover:text-bone"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-bone/40 sm:flex-row">
          <p>© {new Date().getFullYear()} MERIDIAN. 保留所有权利。</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="transition-colors hover:text-bone/70">
              隐私政策
            </a>
            <a href="#top" className="transition-colors hover:text-bone/70">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
