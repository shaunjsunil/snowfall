class Snowflakes {
    constructor(x,y){
    var options={
    friction : 0.1,
    density : 0.01,
    restitution : 0,
    }
    this.x=x;
    this.y=y;
    this.r=20
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    this.image=loadImage("snow5.webp")

    World.add(world, this.body);
    
}
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    rotate(angle);
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.r+5,this.r+5)
    pop()
    
    
    
    }
    
    }