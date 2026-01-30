import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

interface Constellation {
  points: { x: number; y: number }[];
}

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const constellationsRef = useRef<Constellation[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initConstellations();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.0005 + 0.0002,
      }));
    };

    const initConstellations = () => {
      const constellationCount = 5;
      constellationsRef.current = Array.from({ length: constellationCount }, () => {
        const pointCount = Math.floor(Math.random() * 4) + 3;
        const baseX = Math.random() * canvas.width;
        const baseY = Math.random() * canvas.height;
        
        return {
          points: Array.from({ length: pointCount }, (_, i) => ({
            x: baseX + (Math.random() - 0.5) * 200,
            y: baseY + (Math.random() - 0.5) * 200,
          })),
        };
      });
    };

    const drawStar = (star: Star, time: number) => {
      const twinkle = Math.sin(time * star.speed * 1000 + star.x) * 0.3 + 0.7;
      const opacity = star.opacity * twinkle;
      
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 2
      );
      gradient.addColorStop(0, `hsla(270, 80%, 85%, ${opacity})`);
      gradient.addColorStop(0.5, `hsla(270, 70%, 75%, ${opacity * 0.5})`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawConstellation = (constellation: Constellation) => {
      if (constellation.points.length < 2) return;
      
      ctx.beginPath();
      ctx.strokeStyle = 'hsla(270, 60%, 70%, 0.15)';
      ctx.lineWidth = 1;
      
      constellation.points.forEach((point, i) => {
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      
      ctx.stroke();
      
      // Draw bright points at constellation vertices
      constellation.points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(270, 80%, 80%, 0.6)';
        ctx.fill();
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 3, 0,
        canvas.width / 2, canvas.height / 3, canvas.height
      );
      gradient.addColorStop(0, 'hsla(270, 60%, 20%, 0.3)');
      gradient.addColorStop(0.5, 'hsla(250, 50%, 15%, 0.2)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw constellations
      constellationsRef.current.forEach(drawConstellation);
      
      // Draw stars
      starsRef.current.forEach(star => drawStar(star, time));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="constellation-bg"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarBackground;
