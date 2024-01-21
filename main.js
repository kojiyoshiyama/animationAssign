const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// global variable storing the knightSprite image for animation
ASSET_MANAGER.queueDownload("./knightSprite.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new enemyKnight(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
