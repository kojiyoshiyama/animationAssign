class enemyKnight {
    constructor(game) {
        this.game = game;
        // VARIABLES TO CHANGE FOR EACH DIFFERENT CHARACTER
        // spritesheet - change file path for each different character
        // xStart - change starting x-pixel for sprite animation based on spritesheet
        // yStart - change starting y-pixel for sprite animation based on spritesheet
        // width - change width of the sprite
        // height - change height of the sprite
        // frameCount - change number of frames in the sprite animation
        // frameDuration - maybe change how long we want each frame to be displayed
        this.animator = new Animator(ASSET_MANAGER.getAsset("./knightSprite.png"), 0, 190, 70, 85, 8, 0.1);
        this.x = 0;
        this.y = 0;
        this.speed = 30;
    };



    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y); // 25 is the x and y cooridnates of where to draw on ctx
    }
}

