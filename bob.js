class Bob{
    constructor(x,y,r){
    this.body = Bodies.circle(x,y,r,{restitution:0.5,isStatic:false})
    World.add(world,this.body);
    this.r = r
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r)
        
    }
}