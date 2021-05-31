class Drop {

  constructor(x, y) {
      var options={
       restitution: 0.1,
       friction: 0.1
    };
    this.body = Bodies.circle(x, y, 5, options);
    this.width = 5;
    this.height = 5;
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.width, this.height);
  }
   update(){
     if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x: random(0,400),
        y: random(-10,0)
        });
      }
   }
}
