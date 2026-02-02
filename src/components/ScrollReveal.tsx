import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getInitialStyles = () => {
    switch (direction) {
      case "left":
        return "opacity-0 translate-x-[-40px]";
      case "right":
        return "opacity-0 translate-x-[40px]";
      case "scale":
        return "opacity-0 scale-90";
      default:
        return "opacity-0 translate-y-[40px]";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getInitialStyles()} [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 [&.is-visible]:translate-x-0 [&.is-visible]:scale-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
