class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
       var x=Math.round(random(0,255));
       var y=Math.round(random(0,255));
       var z=Math.round(random(0,255));
      fill(x,y,z);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };