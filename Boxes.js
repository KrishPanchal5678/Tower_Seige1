class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
  
      //this.image = loadImage("sprites/Crate.png");
    }
   display(){
     super.display();
     rectMode("CENTER");
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
     
   }
  };