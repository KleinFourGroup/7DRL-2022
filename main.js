// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;
const tilemap = {};

loader.add('spritesheet', 'assets/curses_square_24.png');

loader.load(setup);

function setup(loader, resources) {
  const spritesheetBase = resources['spritesheet'].texture.baseTexture;
  let f1 = new PIXI.Rectangle(0,0,24,24);
  let t1 = new PIXI.Texture(spritesheetBase, f1);
  let s1 = new PIXI.Sprite(t1);

  let f2 = new PIXI.Rectangle(24,0,24,24);
  let t2 = new PIXI.Texture(spritesheetBase, f2);
  let s2 = new PIXI.Sprite(t2);

  app.stage.addChild(s1);
  app.stage.addChild(s2);
  s2.y = 50;

  // Add a ticker callback to move the sprite back and forth
  let elapsed = 0.0;
  app.ticker.add((delta) => {
    elapsed += delta;
    s1.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    s2.x = 100.0 + Math.sin(elapsed/50.0) * 100.0;
  });
}

// Create the sprite and add it to the stage
// let sprite = PIXI.Sprite.from("assets/curses_square_24.png");