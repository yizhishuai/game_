(function(){
	var position = 'absolute';
	var elements = [];
function Snake(options){
	options = options || {};
	this.width = options.width||20;
	this.height = options.height||20;
	this.direction = options.direction||'right';
	this.body=[                                  //身体初始属性
		{x:3,y:1,color:"red"},
		{x:2,y:1,color:"blue"},
		{x:1,y:1,color:"blue"}
] 
}
Snake.prototype.render = function (map){      //1.渲染，绘制
	remove();        //第一步，先移除之前的蛇的渲染
	for(var i = 0,len = this.body.length;i<len;i++)
	{
		var div = document.createElement('div');    
		map.appendChild(div);
		elements.push(div);							//创建length个div并且添加到map上
		var object = this.body[i];					//获取当前的蛇节（某一节）
		div.style.width = this.width+'px';          //用已经创建的蛇对象的属性和蛇身体对象的属性来修改新创建的div
		div.style.height = this.height+'px';
		div.style.left = object.x*this.width+'px';
		div.style.top = object.y*this.height+'px';
		div.style.backgroundColor = object.color;
		div.style.position = position;
	}
}


function remove(){
	for(var i = elements.length - 1;i>=0;i--)
	{
		elements[i].parentNode.removeChild(elements[i]);
		elements.splice(i,1);
	}
}
	//2.move蛇移动
	//move函数，蛇身体的xy属性变成上一个的
	//move函数，蛇头的属性根据方向控制
 Snake.prototype.move = function(food,map){
    	for(var i= this.body.length-1;i>0;i--)
    	{
    		this.body[i].x = this.body[i-1].x;
    		this.body[i].y = this.body[i-1].y;
    	}
    	var head = this.body[0];
    	switch(this.direction){
    		case'left':
    		head.x--;
    		break;
    		case'right':
    		head.x++;
    		break;
    		case'top':
    		head.y--;
    		break;
    		case'buttom':
    		head.y++;
    		break;
    	}
    	//4.判断蛇头是否和食物重合
    	var headX = head.x*this.width;
    	var headY = head.y*this.height;
    	if(headX === food.x&&headY === food.y){
    	var last = this.body[this.body.length-1];
	    	this.body.push({
	    	x:last.x,
	    	y:last.y,
	    	color:last.color
    	  })
	    	food.render(map);
    	}
   		
    }
window.Snake = Snake;
})()
// var map =document.getElementById('map');
// var snake = new Snake();
// snake.render(map);
