"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

interface GalleryCardProps {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

export default function GalleryCard({
  title,
  category,
  image,
  onClick,
}: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <GlassCard className="overflow-hidden p-0">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />

          <div className="absolute top-4 left-4">
            <Badge>{category}</Badge>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-[var(--foreground)]">
            {title}
          </h3>
        </div>
      </GlassCard>
    </motion.div>
  );
}