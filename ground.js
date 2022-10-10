class ground{
constructor(x,y,l,a){
this.x=x;
this.y=y;
this.l=l;
this.a=a;
var options={
    isStatic: true
}

this.body=Bodies.rectangle(this.x,this.y,this.l,this.a,options);
World.add(world,this.body);
}
show(){
var pos=this.body.position;
push();
rectMode(CENTER);
rect(pos.x,pos.y,this.l,this.a);
pop();


}




}