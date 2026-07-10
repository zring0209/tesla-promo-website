import type { ReactNode } from "react";
import {
  Layers,
  Users,
  Sparkles,
  History,
  Compass,
  ShieldCheck,
} from "lucide-react";

export interface Feature {
  id: string;
  index: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface WorkflowStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const features: Feature[] = [
  {
    id: "infinite-canvas",
    index: "01",
    icon: <Layers className="h-6 w-6" strokeWidth={1.5} />,
    title: "无限画布",
    description: "一张没有边界的共享画布，让思维不受页面束缚地延展与重组，所有想法同处一屏。",
  },
  {
    id: "realtime",
    index: "02",
    icon: <Users className="h-6 w-6" strokeWidth={1.5} />,
    title: "实时共编",
    description: "多人光标在同一空间游走，每一次移动、批注与改动都即时同步，协作零时差。",
  },
  {
    id: "ai-distill",
    index: "03",
    icon: <Sparkles className="h-6 w-6" strokeWidth={1.5} />,
    title: "灵感蒸馏",
    description: "将散落的便签、草图与文档自动聚类提炼，把混沌的草稿收敛为清晰的共识。",
  },
  {
    id: "versioning",
    index: "04",
    icon: <History className="h-6 w-6" strokeWidth={1.5} />,
    title: "版本回溯",
    description: "每一次编辑都是可回溯的时间节点，随时回到任意历史切片，灵感不再丢失。",
  },
  {
    id: "navigation",
    index: "05",
    icon: <Compass className="h-6 w-6" strokeWidth={1.5} />,
    title: "知识导航",
    description: "以图谱视图串联画布间的关系，让团队的知识资产可被检索、可被继承。",
  },
  {
    id: "permission",
    index: "06",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />,
    title: "细粒权限",
    description: "从空间到单块画布的访问控制，公开共用与私密协作在同一处并存。",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    id: "create",
    step: "Step 01",
    title: "开辟画布",
    description: "一键创建一块空白画布，或从模板起步，邀请伙伴进入同一空间。",
  },
  {
    id: "gather",
    step: "Step 02",
    title: "汇聚素材",
    description: "拖入便签、链接、图片与文档，让来自四面八方的灵感落到同一张画布上。",
  },
  {
    id: "collide",
    step: "Step 03",
    title: "碰撞成型",
    description: "实时共编、批注讨论，借助灵感蒸馏把零散的草稿收敛成清晰的结构。",
  },
  {
    id: "share",
    step: "Step 04",
    title: "公开共用",
    description: "以一个链接公开分享画布，让成果在团队乃至更广的范围被复用与延续。",
  },
];

export const metrics: Metric[] = [
  { id: "teams", value: 12, suffix: "K+", label: "团队正在共用" },
  { id: "canvases", value: 480, suffix: "K", label: "张画布被创建" },
  { id: "uptime", value: 99.9, suffix: "%", label: "服务可用率" },
];

export const navLinks = [
  { label: "特性", href: "#features" },
  { label: "流程", href: "#workflow" },
  { label: "数据", href: "#metrics" },
  { label: "证言", href: "#testimonial" },
];

export const trustedBy = ["NORTHWIND", "Atlas Studio", "Cobalt", "Lumen", "Forge", "Veridian"];
