class Animator {
    constructor (spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

        // time that has passed in the animation
        this.elapsedTime = 0;
        //Total time that the animation takes to go through all the frames
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        //takes the amount of time that has passed since the last time we called this method
        //and adds it to the total elapsed time
        this.elapsedTime += tick;

        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        // used the calculated elapsed time to find out what frame we are on
        const frame = this.currentFrame();


        ctx.drawImage(this.spritesheet, 
                  this.xStart + this.width * frame, this.yStart, //starting x andf y coordinates
                  this.width, this.height, // starting width and height
                  x, y, //destination x and y coordinates
                  this.width, this.height); //destination height and width
    };

    /**
     * This method divides the total elapsed time by the duration of each frame to determine the current frame 
     */ 
    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    /**
     * If the elapsed time is greater than or equal to the total time, the animation is finished 
     * @returns 
     */
    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}