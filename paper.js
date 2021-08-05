class Paper extends BaseClass {
	constructor(x,y,10,30)
	
    super(x,y);
    this.image = loadImage("paper.png")

    display() {
    var position = this.body.position;
    position.x = mouseX;
    position.y = mouseY;
    var angle = this.body.anglel;
    super.display();
    }
}