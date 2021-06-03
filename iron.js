class Iron{
    constructor(x, y, height) {
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
        }
        this.body = Bodies.rectangle(x, y, 60, height, options);
        this.width = 60;
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
        fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
      }

}