const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var hexagon, mainground, ground1, ground2;
var sling;
var block1, block2, block3, block4, block5;
var block6, block7, block8;
var block9;
var block10, block11, block12, block13, block14;
var block15, block16, block17;
var block18;

function setup(){

    createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;

    mainground = new Ground(750, 675, 1500, 50);

    hexagon = new Hexagon(160, 400, 30, 60);

    sling = new Slingshot(hexagon.body, {x: 160, y:390});

    ground1 = new Ground(600, 500, 300, 20);

    ground2 = new Ground(1100, 350, 300, 20);

    //f1l1
    block1 = new Block(478, 455, 56, 70);
    block2 = new Block(539, 455, 56, 70);
    block3 = new Block(600, 455, 56, 70);
    block4 = new Block(661, 455, 56, 70);
    block5 = new Block(722, 455, 56, 70);

    //f1l2
    block6 = new Block(539, 385, 56, 70);
    block7 = new Block(600, 385, 56, 70);
    block8 = new Block(661, 385, 56, 70);

    //f1l3
    block9 = new Block(600, 315, 56, 70);

    //f2l1
    block10 = new Block(978, 305, 56, 70);
    block11 = new Block(1039, 305, 56, 70);
    block12 = new Block(1100, 305, 56, 70);
    block13 = new Block(1161, 305, 56, 70);
    block14 = new Block(1222, 305, 56, 70);

    //f2l2
    block15 = new Block(1039, 270, 56, 70);
    block16 = new Block(1100, 270, 56, 70);
    block17 = new Block(1161, 270, 56, 70);

    //f2l3
    block18 = new Block(1100, 235, 56, 70);

    Engine.run(engine);
}

function draw(){

    background(rgb(0, 0, 128));

    textSize(30);
    fill("white");
    text("Drag the Hexagon back and release it to knock down the pyramids! (Press Space for a Second Chance)", 30, 60);

    Engine.update(engine);
    
    sling.display();

    fill(rgb(0, 0, 128));
    hexagon.display();

    mainground.display();
    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();

    block9.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    block15.display();
    block16.display();
    block17.display();

    block18.display();

}

function mouseDragged() {

    Matter.Body.setPosition(hexagon.body, {x: mouseX, y: mouseY});
  
}
  
function mouseReleased() {
  
    sling.fly();
  
}
  
function keyPressed() {
  
    if(keyCode === 32) {
    
        sling.attach(hexagon.body);
    
    }
      
}