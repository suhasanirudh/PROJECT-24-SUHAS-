class rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':2.0,
          'density':1.0,
      }
      
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var rubberpos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(rubberpos.x, rubberpos.y);
      rotate(angle);
      fill(255);
      strokeWeight(4);
      stroke ("black");
      fill ("blue");
      ellipse (0, 0, this.r, this.r);
      pop();
    }
  };