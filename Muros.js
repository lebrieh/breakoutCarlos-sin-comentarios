class Walls
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		this.w=10
		this.h=400
		this.leftWall=Bodies.rectangle(0, 200, this.w, this.h , options);
		this.rightWall=Bodies.rectangle(800, 200, this.w, this.h , options);
 		World.add(world, this.leftWall);
		World.add(world, this.rightWall);

	}
	

}