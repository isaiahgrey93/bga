export default {
  depth: {
    0: '0px 0px 0px 0px',
    1: '0px 4px 8px 0px',
    2: '0px 6px 12px 0px',
    3: '0px 10px 20px 0px',
  },
  color: {
    default: 'rgba(0, 40, 121, 0.15)',
    primary: 'rgba(47, 176, 255, 0.30)',
    secondary: 'rgba(255, 155, 24, 0.40)',
  },
  get: function(depth = 1, color = 'default') {
    if (Object.keys(`${this.depth}`).indexOf(`${depth}`) < 0) {
      throw new Error(
        `Invalid option "${depth}" for shadow. Use one of the following: ${JSON.stringify(
          Object.keys(this.depth)
        )}`
      );
    }

    if (Object.keys(this.color).indexOf(color) < 0) {
      throw new Error(
        `Invalid option "${color}" for shadow. Use one of the following: ${JSON.stringify(
          Object.keys(this.color)
        )}`
      );
    }

    return `${this.depth[depth]} ${this.color[color]}`;
  },
};
