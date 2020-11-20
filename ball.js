class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.radius= 20 ;
      this.body = Bodies.circle(x, y, this.radius, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
  
      ellipseMode(RADIUS);
      
      fill("yellow");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  