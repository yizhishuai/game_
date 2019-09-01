(function(){
	var that;
    function Game (map){
    	this.food = new Food();
    	this.snake = new Snake();
    	this.map = map;
    	that = this;
    }
    Game.prototype.start = function (){
    	this.food.render(this.map);
    	this.snake.render(this.map);
    //游戏的逻辑
    //1.让蛇移动起来
    //2.当蛇遇到边界结束
    runSnake();
    //3.键盘控制方向
    bindKey();
    	//4.蛇遇食物的时候做相应处理
    }
    function runSnake(){
    	var timeId = setInterval(function(){
    	//让蛇走一格
    	//用that来使用this。that是自调用函数中，构造函数外
    	//谁调用，方法中的this就指向谁
    	//调用move()
    	this.snake.move(that.food,that.map);
    	//调用render方法(传递参数)
    	this.snake.render(that.map);
    	//获取蛇节的大小
    	//获取蛇头的坐标
    	//做判断{输出提示，停止掉定时器}
    	var mapX = this.map.offsetWidth/this.snake.width;
    	var mapY = this.map.offsetHeight/this.snake.height;
    	var headX = this.snake.body[0].x;
    	var headY = this.snake.body[0].y;

    	if(headX<0||headX>=mapX){
    		alert("Game over!");
    		clearInterval(timeId);
    	}
    	if(headY<0||headY>=mapY){
    	    alert("Game over!");
    		clearInterval(timeId);
    	}
    	}.bind(that),150);
    }
    
  //    function bindKey() {
  //   // document.onkeydown = function () {};
  //   document.addEventListener('keydown', function (e) {
  //     console.log(e.keyCode);
  //   }, false);
  // }
     function bindKey(){
    document.addEventListener('keydown',function(e){
    		console.log(e.keyCode);
    		 switch (e.keyCode) {
        case 37: 
          this.snake.direction = 'left';
          break;
        case 38:
          this.snake.direction = 'top';
          break;
        case 39:
          this.snake.direction = 'right';
          break;
        case 40:
          this.snake.direction = 'buttom';
          break;
      }
    }.bind(that),false);//事件冒泡
  }
    window.Game = Game;
    document.querySelector(/*
    
    	Date
    
    	toTimeString ()
    
    	Return Type:
    	string
    
    	Description:
    	This function returns a String value. The contents of the String are implementation-dependent, but are intended to represent the “time” portion of the Date in the current time zone in a convenient, human-readable form.
    
    	URL doc:
    	http://html5index.org/ECMAScript%20-%20Date.html#toTimeString
    
    */)
})()


