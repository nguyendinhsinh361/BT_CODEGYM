function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };
    
    this.move = function() {
      //right
      if(this.top == top) {
        this.left += this.speed;
        console.log('left: ' + this.left);
      }
      // down
      if(this.left > window.innerWidth) {
        console.log('top: ' + this.top);
        this.top += this.speed;
      } 
      //left
      if(this.top > window.innerHeight) {
        console.log('left: ' + this.left);
        this.left -= this.speed;
      }
      //up
      if(this.left == left) {
        console.log('top: ' + this.top);
        this.top -= this.speed;
      }
    }
    
  }
  
  var hero = new Hero('images.png', 0, 0, 200, 120);
  
  function start(){
    hero.move();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
  }
  
  start();