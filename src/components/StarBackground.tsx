import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const animate = (time: number) => {
      // Slow down the time variable for a very smooth, subtle movement
      const t = time * 0.0004;

      // 1. Fill the base canvas with deep black
      ctx.fillStyle = '#030005'; 
      ctx.fillRect(0, 0, width, height);

      // 2. Create the first moving purple light (shifts left/right and up/down)
      const x1 = width * 0.5 + Math.sin(t) * (width * 0.4);
      const y1 = height * 0.5 + Math.cos(t * 0.8) * (height * 0.4);
      const radius1 = Math.max(width, height) * 0.7; // Large, soft glow

      const grad1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, radius1);
      grad1.addColorStop(0, 'rgba(75, 20, 120, 0.6)'); // Vibrant deep purple
      grad1.addColorStop(1, 'rgba(75, 20, 120, 0)');   // Fades into the black
      
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // 3. Create a second moving dark violet light (moves in an opposite pattern)
      const x2 = width * 0.5 + Math.sin(t * 1.2 + Math.PI) * (width * 0.3);
      const y2 = height * 0.5 + Math.cos(t * 0.9 + Math.PI) * (height * 0.3);
      const radius2 = Math.max(width, height) * 0.8;

      const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, radius2);
      grad2.addColorStop(0, 'rgba(30, 5, 60, 0.8)'); // Darker, moody violet
      grad2.addColorStop(1, 'rgba(30, 5, 60, 0)');
      
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
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
      className="fluid-bg"
      style={{ 
        display: 'block', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1,
        pointerEvents: 'none' // Crucial: ensures the canvas doesn't block you from clicking your links!
      }}
    />
  );
};

export default AnimatedBackground;