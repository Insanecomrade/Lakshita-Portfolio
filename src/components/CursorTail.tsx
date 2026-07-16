import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 14;

const CursorTail = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const points = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const dots = containerRef.current?.querySelectorAll<HTMLDivElement>('.trail-dot');

    const tick = () => {
      points.current[0].x += (target.current.x - points.current[0].x) * 0.3;
      points.current[0].y += (target.current.y - points.current[0].y) * 0.3;
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        points.current[i].x += (points.current[i - 1].x - points.current[i].x) * 0.35;
        points.current[i].y += (points.current[i - 1].y - points.current[i].y) * 0.35;
      }
      if (dots) {
        dots.forEach((dot, i) => {
          const p = points.current[i];
          const scale = 1 - i / TRAIL_LENGTH;
          dot.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) scale(${scale})`;
          dot.style.opacity = `${scale * 0.9}`;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[55]"
      aria-hidden
    >
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          className="trail-dot absolute top-0 left-0 w-3 h-3 rounded-full will-change-transform"
          style={{
            background:
              'radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--accent) / 0.6) 60%, transparent 100%)',
            boxShadow: '0 0 10px hsl(var(--primary) / 0.6)',
          }}
        />
      ))}
    </div>
  );
};

export default CursorTail;