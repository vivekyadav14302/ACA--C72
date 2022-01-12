const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,plank;

function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var plank_options={     
        restitution: 0
    }
    var ground_options={    
        isStatic: true
    }

    var box_options={
        restitution: 0.5
    }
    
    var ball_options = {
        friction: 1,
        restitution: 0.7,
        density: 0.4
    }

    plank1 = Bodies.rectangle(400,300,200,20, plank_options);
    plank2 = Bodies.rectangle(400,250,200,20, plank_options);
    plank3 = Bodies.rectangle(400,200,200,20, plank_options);
    box = Bodies.rectangle(400,100,60,60, box_options);
    ground = Bodies.rectangle(300,590,600,20,ground_options);
    ball1 = Bodies.circle(200, 300, 35, ball_options);
    ball2 = Bodies.circle(200, 250, 35, ball_options);
    Composite.add(world, [plank1,plank2,plank3,ground,ball1,ball2,box]);    
}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x, ground.position.y, 600, 20);
    fill("grey");
    rect(plank1.position.x, plank1.position.y, 200, 20);
    fill("grey");
    rect(plank2.position.x, plank2.position.y, 200, 20);
    fill("grey");
    rect(plank3.position.x, plank3.position.y, 200, 20);

    fill("yellow");
    rect(box.position.x, box.position.y, 60, 60);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(ball1.position.x, ball1.position.y, 35);
    fill("red");
    ellipse(ball2.position.x, ball2.position.y, 35);
}