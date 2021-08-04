class Rope{
	constructor(bodyA,bodyB,xOffSet)
	{
		this.rope = Constraint.create({
			bodyA: bodyA,
			bodyB: bodyB,
			pointA:{x:xOffSet,y:0},
			stiffness: 0.5,
			length : 200,
		})
		World.add(world,this.rope)
		this.xOffSet = xOffSet;
	 }
	 display(){
		var pointA = this.rope.bodyA.position
		var pointB = this.rope.bodyB.position
		line(pointA.x+this.xOffSet,pointA.y,pointB.x,pointB.y)

	 }

	}






