"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type AnimationVariant = "up" | "down" | "left" | "right" | "fade" | "scale";

interface FadeInProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  style?: CSSProperties;
  staggerIndex?: number;
  staggerDelay?: number;
}

const transforms: Record<AnimationVariant, (d: number) => string> = {
  up: (d) => `translateY(${d}px)`,
  down: (d) => `translateY(-${d}px)`,
  left: (d) => `translateX(${d}px)`,
  right: (d) => `translateX(-${d}px)`,
  fade: () => "none",
  scale: () => "scale(0.95)",
};

export default function FadeIn({
  children,
  variant = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
  className,
  style,
  staggerIndex = 0,
  staggerDelay = 0.08,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const totalDelay = delay + staggerIndex * staggerDelay;

    el.style.opacity = "0";
    el.style.transform = transforms[variant](distance);
    el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${totalDelay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${totalDelay}s`;
    el.style.willChange = "opacity, transform";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          if (once) observer.unobserve(el);

          const cleanup = () => {
            el.style.willChange = "auto";
          };
          el.addEventListener("transitionend", cleanup, { once: true });
        } else if (!once) {
          el.style.opacity = "0";
          el.style.transform = transforms[variant](distance);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, duration, distance, threshold, once, staggerIndex, staggerDelay]);

  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
