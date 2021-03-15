class Hexagon {
    constructor(x, y, width, height) {

        var options = {
            'isStatic':false,
            'restitution':0.5, 
            'friction':1.0,
            'density':0.5
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);

    }

    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        stroke(0, 0, 128)
        rectMode(CENTER);
        imageMode(CENTER);
        rect(0, 0, this.width, this.height);
        image(this.image, 0, 0 - 10, this.width * 2, 30 * 2);
        pop();

    }
}