class Paper{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution:1.0
            
        }
        this.paperImage= loadImage("paper.png")
        this.body= Bodies.circle(x,y,30,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        imageMode(CENTER);
        image(this.paperImage,this.body.position.x,this.body.position.y,30,30)

    }
}