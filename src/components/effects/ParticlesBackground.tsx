"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDirection: number;
  baseRadius: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const initParticles = useCallback((width: number, height: number) => {
    // Determine particle count based on screen size (subtle density)
    const count = Math.min(Math.floor((width * height) / 20000), 65);
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 1.5 + 0.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: radius,
        baseRadius: radius,
        opacity: Math.random() * 0.4 + 0.1,
        opacityDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }

    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track mouse position on the canvas
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140, // Proximity radius for connection/repulsion
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      initParticles(canvas.offsetWidth, canvas.offsetHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle mouse radial glow spotlight
      if (mouse.active) {
        const spotGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.5
        );
        spotGlow.addColorStop(0, "rgba(59, 130, 246, 0.035)"); // Extremely soft royal blue
        spotGlow.addColorStop(0.5, "rgba(16, 185, 129, 0.01)"); // Fades into soft emerald
        spotGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = spotGlow;
        ctx.fill();
      }

      const particles = particlesRef.current;

      particles.forEach((p) => {
        // Physics: Repel from cursor dynamically
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Calculate force inversely proportional to distance
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            
            // Gently push particle away
            p.x += Math.cos(angle) * force * 1.2;
            p.y += Math.sin(angle) * force * 1.2;
            
            // Pulsate size slightly when close to cursor
            p.radius = p.baseRadius + force * 1.0;
          } else {
            // Restore size smoothly
            if (p.radius > p.baseRadius) {
              p.radius -= 0.05;
            }
          }
        }

        // Apply constant organic drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Organic opacity breathing
        p.opacity += p.opacityDirection * 0.002;
        if (p.opacity > 0.5) p.opacityDirection = -1;
        if (p.opacity < 0.15) p.opacityDirection = 1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity * 0.45})`; // Premium slate blue tint
        ctx.fill();
      });

      // Connection lines: particles with each other and with the mouse
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        // 1. Connect to mouse cursor
        if (mouse.active) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Dynamic opacity based on proximity
            const opacity = 0.08 * (1 - dist / mouse.radius);
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // 2. Connect to neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            const opacity = 0.05 * (1 - dist / 105);
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
