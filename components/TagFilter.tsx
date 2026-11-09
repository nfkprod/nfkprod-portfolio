"use client";

type TagFilterProps = {
  tags: readonly string[];
  active: string;
  onChange: (tag: string) => void;
};

export default function TagFilter({ tags, active, onChange }: TagFilterProps) {
  return (
    <div className="tag-filters" role="group" aria-label="Project categories">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          aria-pressed={active === tag}
          onClick={() => onChange(tag)}
          className={active === tag ? "is-active" : ""}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
