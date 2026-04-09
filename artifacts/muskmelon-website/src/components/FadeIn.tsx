import { useEffect, useRef, ReactNode, CSSProperties } from "react";

export function FadeIn({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "0";
          el.style.animation = `fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards`;
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0, ...style }}>
      {children}
    </div>
  );
}
