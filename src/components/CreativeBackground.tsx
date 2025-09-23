import { useEffect, useRef } from "react";
import "../index.css";

const CreativeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = event;

        containerRef.current.style.setProperty("--x", `${clientX}px`);
        containerRef.current.style.setProperty("--y", `${clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className="background-spotlight noise-overlay"
      ></div>
    </>
  );
};

export default CreativeBackground;
