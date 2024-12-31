class Trail {
  constructor({ elementId, idleAnimation, index, size, trailCount }) {
    const trailContainer = document.getElementById(elementId);

    this.index = index;
    this.trailCount = trailCount;
    this.size = size;
    this.x = 0;
    this.y = 0;
    this.idleAnimation = idleAnimation;
    this.angleSpeed = 1 / trailCount;
    this.scale = 1 - (1 / trailCount) * index;
    this.trail = document.createElement("span");
    this.range = size / 2 - (size / 2) * this.scale + 2;

    this.trail.className = 'absolute block rounded-full transition-transform duration-200 ease-out';
    this.trail.style.transform = this.index > 0 ? `scale(${this.scale}, ${this.scale})` : "";

    trailContainer?.appendChild(this.trail);
  }

  lock() {
    this.lockX = this.x;
    this.lockY = this.y;
    this.angleX = 2 * Math.PI * Math.random();
    this.angleY = 2 * Math.PI * Math.random();
  }

  draw(isIdle, idleAnimationCount) {
    if (
      this.idleAnimation &&
      isIdle &&
      this.index > 0 && // Exclude the biggest trail (index 0)
      this.index >= this.trailCount - idleAnimationCount
    ) {
      this.angleX += this.angleSpeed;
      this.angleY += this.angleSpeed;
      this.y = this.lockY + Math.sin(this.angleY) * this.range;
      this.x = this.lockX + Math.sin(this.angleX) * this.range;
    }

    this.trail.style.top = `${this.y - this.size / 2}px`;
    this.trail.style.left = `${this.x - this.size / 2}px`;
  }
}

export default Trail;