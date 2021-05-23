class Instructions{
    constructor() {
        this.instructions = createElement('h3');
        this.instructions2 = createElement('h3');
        this.startBtn = createButton('begin!');
    }

    hide(){
        this.instructions.hide();
        this.instructions2.hide();
        this.startBtn.hide();
      }

    display() {
        stroke("blue");

        this.instructions.html("Instructions: Swim through the maze and avoid the sharks to get to the treasure chest");
        this.instructions2.html("at the end. Use arrow keys or WASD to move around. Click the 'begin!' button to start!");
        this.instructions.position(80, 120);
        this.instructions2.position(75, 140);

        this.startBtn.position(450, 250);

        this.startBtn.mousePressed(()=>{
            this.instructions.hide();
            this.instructions2.hide();
            this.startBtn.hide();
            gameState = 1;
        });
    }
}