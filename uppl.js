function Uppl() {
  this.x = width/2;
  
  
  this.show = function() {
    fill(255, 0, 0);
    triangle(this.x, 0, this.x + 30, 30, this.x + 60, 0)
    
  }
  
  
  
  this.move = function(dir) {
    this.x += dir*10;
  }
 
  
  }
