class Rubber{
    constructor(x,y,radius){
        var options={
            'restitution': 0.3,
            'density': 1.0,
            'friction': 5.0
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,(this.radius-20)/2,options);
        

        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4)
      stroke('black')
      fill('blue');
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
}