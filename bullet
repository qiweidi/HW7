function Bullet(x, y) {
    this.x = x;
    this.y = y;
    
    this.show = function() {
      noStroke();
      fill(150, 0, 255);
      ellipse(this.x, this.y, 8, 8);
    }
 
  this.move = function() {
  this.y = this.y-2;
  }
    
  this.hits = function(uppl){
    var d = dist(this.x, this.y, uppl.x + 30, 30);
    if (d <= 0) {
  return true;
    }else{
      return false;
    }
      
  
  
  }
  }   
