"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  name: string;
  size?: number;
  className?: string;
};

/**
 * Renders an organization logo from /public. If the file is missing or fails
 * to load, falls back to a clean initials tile so nothing ever looks broken.
 */
export default function OrgLogo({ src, name, size = 36, className }: Props) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If the image errored before React hydrated, onError never fires —
  // detect it here so the initials fallback still appears.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);
  const initials = name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  if (!src || failed) {
    return (
      <span
        aria-hidden
        style={{ width: size, height: size }}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lg border border-line bg-surface-raised font-display text-[11px] font-bold text-content-secondary",
          className
        )}
      >
        {initials}
      </span>
    );
  }

  return (
    <span
      style={{ width: size, height: size }}
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-white p-1",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny local logo, format-agnostic (svg/png), no optimization needed */}
      <img
        ref={imgRef}
        src={src}
        alt={`${name} logo`}
        width={size}
        height={size}
        loading="lazy"
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
