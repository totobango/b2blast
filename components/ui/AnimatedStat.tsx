"use client";

import { useCountUp } from "@/lib/useCountUp";

interface AnimatedStatProps {
  value: string;
  label: string;
}

export default function AnimatedStat({ value, label }: AnimatedStatProps) {
  const numericMatch = value.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const prefix = value.match(/^([^\d]*)/)?.[1] || "";
  const suffix = value.match(/\d+(.*)$/)?.[1] || "";
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="h-full rounded-2xl bg-surface-light border border-white/[0.06] p-6 sm:p-8 text-center group hover:border-brand/40 transition-all duration-500"
    >
      <p className="font-heading stat-xxl text-gradient-brand tabular-nums">
        {prefix}{count}{suffix}
      </p>
      <p className="mt-3 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
        {label}
      </p>
    </div>
  );
}