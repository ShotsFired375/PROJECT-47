class Diver {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image = loadImage("images/diverImg_1.png");
        this.animation = loadAnimation("images/diverImg_11.png", "images/diverImg_12.png", "images/diverImg_13.png");
        World.add(world, this.body);

    }

    display(){

        if (gameState === 1) {
            animation(this.animation, this.body.position.x, this.body.position.y, this.width, this.height);

        }   else if (gameState === 2) {
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        }

        if (keyDown("RIGHT") || keyDown("d")) {
            this.body.position.x = this.body.position.x+10;
        }
        if (keyDown("LEFT") || keyDown("a")) {
            this.body.position.x = this.body.position.x-10;
        }
        if (keyDown("UP") || keyDown("w")) {
            this.body.position.y = this.body.position.y-10;
        }
        if (keyDown("DOWN") || keyDown("s")) {
            this.body.position.y = this.body.position.y+10;
        }
    }
}
