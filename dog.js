class Dog {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./stardewDog.png"), 0, 0, 32, 32, 4, .275);
        

        this.x = -20;
        this.y = 0;
        this.speed = 12;
    };

    update() {
         this.x += this.speed * this.game.clockTick; // for horizontally 

        // this.y += this.speed * this.game.clockTick; // for vertically 
        // speed = 35 walking vert
        // speed = 15 walking horiz
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}