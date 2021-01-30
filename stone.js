class stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':5.0,
          'density':4.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(4);
      stroke ("black");
      fill ("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };