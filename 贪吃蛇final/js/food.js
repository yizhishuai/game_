//自调用函数，减少命名冲突
(function(){
var elements = [];

function Food(options){             //Food构造函数
	options = options || {};
	this.width = options.width||20;
	this.height = options.height ||20;
	this.y =options.y ||0;
	this.x = options.x ||0;
	this.color =options.color ||'blue';
}

Food.prototype.render = function(map){ 

	remove();
	this.x = Tools.getRandom(0,map.offsetWidth/this.width-1)*this.width;
	this.y = Tools.getRandom(0,map.offsetHeight/this.height-1)*this.height;
	      //生成div，并将div添加到map上面
	var div = document.createElement('div');
	map.appendChild(div);

	elements.push(div);

	div.style.width = this.width+'px';
	div.style.height = this.height+'px';
	div.style.left=this.x+'px';
	div.style.top=this.y+'px';
	div.style.backgroundColor=this.color;
	div.style.position='absolute'
}

function remove(){
	for(var i = elements.length - 1; i >=0;i--){
		elements[i].parentNode.removeChild(elements[i]);
		elements.splice(i,1);
	}
}
window.Food = Food;
})();

var map = document.getElementById('map')
var text = new Food();
text.render(map);

	