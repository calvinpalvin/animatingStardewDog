class Animator {
    constructor(spriteSheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spriteSheet, xStart, yStart, width, height, frameCount, frameDuration});
        
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    
    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        var frame = this.currentFrame();

        // walking down
        // ctx.drawImage(this.spriteSheet, 
        //     this.xStart + this.width * frame, this.yStart, // coords on sprite sheet
        //     this.width, this.height, // size on spritesheet 
        //     x, y,                             // coords on canvas  
        //     this.width * 3, this.height * 3); // size on canvas

        // walking right
        ctx.drawImage(this.spriteSheet, 
            this.xStart + this.width * frame, this.yStart + this.height + 2, // coords on sprite sheet
            this.width, this.height, // size on spritesheet 
            x * 4, y * 4,                             // coords on canvas  
            this.width * 3, this.height * 3); // size on canvas


        // running right
        // ctx.drawImage(this.spriteSheet, 
        //     this.xStart + this.width * frame, this.yStart + this.height * 8, // coords on sprite sheet
        //     this.width, this.height, // size on spritesheet 
        //     x + 32 * 4, y + 32 * 4,                             // coords on canvas  
        //     this.width * 3, this.height * 3); // size on canvas
    

    };
    
    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}