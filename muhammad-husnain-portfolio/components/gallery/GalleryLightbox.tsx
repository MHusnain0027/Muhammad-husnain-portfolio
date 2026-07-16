"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface GalleryLightboxProps {
  image: string;
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function GalleryLightbox({
  image,
  title,
  open,
  onClose,
}: GalleryLightboxProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-14 right-0 rounded-full border border-[var(--border)] bg-[var(--surface)] p-3 text-[var(--foreground)] hover:border-[var(--primary)]"
          aria-label="Close image"
        >
          <X size={22} />
        </button>

        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <h3 className="mt-5 text-center text-xl font-bold text-[var(--foreground)]">
          {title}
        </h3>
      </div>
    </div>
  );
}