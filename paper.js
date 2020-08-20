class Paper {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0, 0, this.radius,this.radius);
      pop();
      image(this.image,this.body.position.x,this.body.position.y , 70 , 70);
    }
  };
  

  