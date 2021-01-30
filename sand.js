class sand {
    constructor(x, y,r) {
      var options = {
          'restitution':1.3,
          'friction':5.0,
          'density':1.0,
      }
      
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      
      World.add(world, this.body);
    }
    display(){
      var sandpos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(sandpos.x, sandpos.y);
      rotate(angle);
      fill(255);
      strokeWeight(4);
      stroke ("black");
      fill ("red");
      ellipse (0, 0, this.r, this.r);
      pop();
    }
  };