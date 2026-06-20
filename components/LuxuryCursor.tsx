"use client";

import { useEffect, useRef, useState } from "react";

export default function LuxuryCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // ไม่แสดงบน touch device
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, label")
      ) {
        setHovering(true);
      }
    };

    const onHoverEnd = () => setHovering(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onHoverStart);
    document.addEventListener("mouseout", onHoverEnd);

    rafId = requestAnimationFrame(animateRing);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onHoverStart);
      document.removeEventListener("mouseout", onHoverEnd);
    };
  }, [visible]);

  return (
    <>
      <style>{`
        * { cursor: none !important; }
      `}</style>

      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicking ? "6px" : "8px",
          height: clicking ? "6px" : "8px",
          background: hovering ? "transparent" : "#c9a96e",
          border: hovering ? "1.5px solid #c9a96e" : "none",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
          marginLeft: "-4px",
          marginTop: "-4px",
          transition: "width 0.15s, height 0.15s, background 0.2s, border 0.2s, opacity 0.3s",
          willChange: "transform",
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? "52px" : clicking ? "28px" : "36px",
          height: hovering ? "52px" : clicking ? "28px" : "36px",
          border: "1px solid rgba(201,169,110,0.7)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          marginLeft: hovering ? "-26px" : clicking ? "-14px" : "-18px",
          marginTop: hovering ? "-26px" : clicking ? "-14px" : "-18px",
          transition: "width 0.3s cubic-bezier(0.25,0.46,0.45,0.94), height 0.3s cubic-bezier(0.25,0.46,0.45,0.94), margin 0.3s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s",
          willChange: "transform",
        }}
      />
    </>
  );
}
