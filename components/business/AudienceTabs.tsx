"use client";

import { useState } from "react";
import {
  Check,
  BarChart3,
  Users,
  Globe,
  FileText,
  Cpu,
  Database,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const tabs = {
  managers: {
    label: "Farm Managers",
    who: {
      heading: "Who This Is For",
      points: [
        "Agronomists, farm consultants, and management companies",
        "Small or large farm service providers",
        "Looking to digitize operations, monitor farms efficiently, and scale services",
      ],
    },
    features: [
      {
        icon: Database,
        title: "End-to-End Farm Operations Software",
        body: "Everything you need to run a professional farm management practice in one platform.",
      },
      {
        icon: BarChart3,
        title: "Crop Planning, Labour & Input Tracking",
        body: "Schedule activities, assign staff, track inputs, and record all farm events digitally.",
      },
      {
        icon: Cpu,
        title: "Real-Time Farm Monitoring Dashboards",
        body: "Live sensor data, weather feeds, and farm health indicators at your fingertips.",
      },
      {
        icon: TrendingUp,
        title: "Performance Reporting & Analytics",
        body: "Generate professional client reports with clear insights, trends, and recommendations.",
      },
    ],
    services: {
      heading: "Remote Farm Management Services (for Clients)",
      points: [
        "Full-service farm management — planning → execution → monitoring",
        "Expert farm managers using Shambani tech to maximize results",
        "Data-driven reporting for transparency and performance",
        "Scalable, professional operations for any farm size",
      ],
    },
  },
  owners: {
    label: "Farm Owners",
    who: {
      heading: "Who This Is For",
      points: [
        "Farm owners seeking efficiency, profitability, and sustainability",
        "Owners who want professional management without daily involvement",
        "Those looking for transparency and data-driven accountability",
      ],
    },
    features: [
      {
        icon: Users,
        title: "Hire farm management services",
        body: "Professional agronomists and management teams run your farm using Shambani technology.",
      },
      {
        icon: ShieldCheck,
        title: "Expert Execution Powered by Technology",
        body: "Every decision backed by live data, AI insights, and proven farm management practices.",
      },
      {
        icon: FileText,
        title: "Track Performance Through Reports",
        body: "Regular, transparent reporting so you always know exactly how your farm is performing.",
      },
      {
        icon: Globe,
        title: "Improve Yields & Profitability",
        body: "Data-informed management has been proven to increase yields by 30% and cut costs by 20%.",
      },
    ],
    services: {
      heading: "What You Get as a Farm Owner",
      points: [
        "Dedicated farm manager assigned to your property",
        "Weekly performance and activity reports",
        "Real-time monitoring via Shambani dashboard access",
        "Year-round planning, execution, and post-season analysis",
      ],
    },
  },
};

export default function AudienceTabs() {
  const [active, setActive] = useState<"managers" | "owners">("managers");
  const tab = tabs[active];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header + Tabs ── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Our Solutions
              </span>
            </div>
            <h2
              className="font-bold text-teal-900 leading-tight"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Built for every role
              <br className="hidden lg:block" /> in the farm business.
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex p-1.5 bg-teal-900/10 rounded-[0.5rem] border border-teal-900/10">
            {(["managers", "owners"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-6 py-3 rounded-[0.5rem] text-sm font-bold transition-all ${
                  active === key
                    ? "bg-linear-to-r from-teal-900 to-green-800 text-white shadow-md"
                    : "text-teal-900/50 hover:text-teal-900"
                }`}
              >
                {tabs[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content ── */}
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-6">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-4">
            {/* WHO CARD */}
            <div
              style={{ borderRadius: "1rem" }}
              className="group relative rounded-2xl p-7 overflow-hidden bg-linear-to-br from-teal-950 via-teal-900 to-green-800"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(74,222,128,0.12),transparent_65%)]" />

              <h3 className="relative z-10 text-green-400 text-sm font-bold uppercase tracking-widest mb-5">
                {tab.who.heading}
              </h3>

              <ul className="relative z-10 space-y-3">
                {tab.who.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <div className=" ">
                      <Check size={12} className="text-green-400" />
                    </div>
                    <span className="text-white/65 text-md leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES CARD */}
            <div
              style={{ borderRadius: "1rem" }}
              className="group relative rounded-2xl p-7 overflow-hidden bg-linear-to-br from-teal-950 via-teal-900 to-green-800"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_90%,rgba(74,222,128,0.12),transparent_65%)]" />

              <h3 className="relative z-10 text-green-400 text-sm font-bold uppercase tracking-widest mb-5">
                {tab.services.heading}
              </h3>

              <ul className="relative z-10 space-y-3">
                {tab.services.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <div >
                      <Check size={12} className="text-green-400" />
                    </div>
                    <span className="text-white/65 text-md leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: FEATURES ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {tab.features.map(({ icon: Icon, title, body }, i) => (
              <div
              style={{ borderRadius: "1rem" }}
                key={title}
                className={`group relative rounded-2xl p-7 overflow-hidden cursor-pointer
                bg-gray-50 
                border border-teal-800/30
                transition-all duration-300 hover:-translate-y-1 hover:shadow-md 
                ${i === 0 ? "sm:col-span-2 min-h-55" : ""}
              `}
              >
                

                {/* Ghost number */}
                <div className="absolute bottom-3 right-5 text-teal-900/5 text-[5rem] font-bold">
                  {i + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-[24px] bg-green-500/40 border border-green-400/25  text-green-700 flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h2
                    className="font-bold text-lg text-teal-900 mb-2 leading-snug"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {title}
                  </h2>

                  {/* Body */}
                  <p className="text-teal-900/60 text-md leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
