// main.ts
class NeoExperience {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mouse = { x: -1000, y: -1000 };

  constructor() {
    this.initCanvas();
    this.initParticles();
    this.initEventListeners();
    this.animate();
  }

  private initCanvas() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.className = 'gold-particles';
    document.body.prepend(this.canvas);
    this.resize();
  }

  private initParticles() {
    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(this.ctx, this.mouse));
    }
  }

  private initEventListeners() {
    window.addEventListener('resize', this.resize.bind(this));
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  private resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private animate() {
    this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    requestAnimationFrame(() => this.animate());
  }
}

class Particle {
  // Particle implementation with golden trails
  // ... (detailed particle physics implementation)
}

document.addEventListener('DOMContentLoaded', () => {
  new NeoExperience();
  // Additional interactive initializers
});
