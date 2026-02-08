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
      className="rounded-2xl bg-black border border-white/10 p-6 sm:p-8 text-center group hover:border-brand/50 hover:bg-brand/5 transition-all duration-500"
    >
      <p className="font-heading text-3xl sm:text-4xl font-bold text-brand tabular-nums">
        {prefix}{count}{suffix}
      </p>
      <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
        {label}
      </p>
    </div>
  );
}
