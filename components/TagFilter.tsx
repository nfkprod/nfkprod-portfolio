"use client";

import { cn } from "@/lib/cn";

type TagFilterProps = {
  tags: readonly string[];
  active: string;
  onChange: (tag: string) => void;
};

export default function TagFilter({ tags, active, onChange }: TagFilterProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(tag)}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] transition",
            active === tag
              ? "border-white/35 bg-white/12 text-[var(--text-main)]"
              : "border-white/15 bg-white/5 text-[var(--text-muted)] hover:text-[var(--text-main)]"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
