class cuadros
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, 40, 6 , options);
        this.width = 40;
        this.height = 6;
        this.color=color(random(0,255),random(0,225),random(0,225));
 		World.add(world, this.body);
		 this.destroyed = false;
		 this.visibility = 255;
	}
	display()
	{
		if (this.destroyed == false) {
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(this.color)
			rect(0,0,this.width, this.heigth);
			pop()
			if (this.isTouching(balin)){
				this.destroyed = true;
				console.log("boom");
			  }
		}	else {
			//eliminar al enemigo
			World.remove(world,this.body);
			push();
			this.visibility -=5;
			//console.log("visibility: " + this.visibility);
			tint(255,this.visibility);
			rectMode(CENTER)
			fill(this.color)
			rect(this.body.position.x, this.body.position.y, this.width, this.height);
			pop();
		  }
			
	}

	//revisar que el tomate toque al enemigo
	isTouching(object){
		if (this.body.position.x - object.body.position.x < object.r + this.width/2
		  && object.body.position.x - this.body.position.x < object.r + this.width/2
		  && this.body.position.y - object.body.position.y < object.r + this.height/2
		  && object.body.position.y - this.body.position.y < object.r + this.height/2) {
		  return true;
		}
		else {
		  return false;
		} 
	  }

}





