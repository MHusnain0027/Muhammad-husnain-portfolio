"use client";

interface GalleryFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function GalleryFilter({
  categories,
  active,
  onChange,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`
            px-5 py-2 rounded-full border transition-all duration-300
            ${
              active === category
                ? "bg-[var(--primary)] text-black border-[var(--primary)]"
                : "border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}