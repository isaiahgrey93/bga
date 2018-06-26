export default {
  depth: {
    none: '0px 0px 0px 0px',
    low: '0px 4px 8px 0px',
    medium: '0px 6px 12px 0px',
    high: '0px 10px 20px 0px',
  },
  color: {
    default: 'rgba(0, 40, 121, 0.15)',
    primary: 'rgba(47, 176, 255, 0.30)',
    secondary: 'rgba(255, 155, 24, 0.40)',
  },
  getColor(color) {
    switch (color) {
      case 'primary':
        return this.color.primary;
      case 'secondary':
        return this.color.secondary;
      default:
        return this.color.default;
    }
  },
  getDepth(depth) {
    switch (depth) {
      case 'low':
        return this.depth.low;
      case 'medium':
        return this.depth.medium;
      case 'high':
        return this.depth.high;
      default:
        return this.depth.none;
    }
  },
  get(color = 'default', depth = 'none') {
    return `${this.getDepth(depth)} ${this.getColor(color)}`;
  },
};
