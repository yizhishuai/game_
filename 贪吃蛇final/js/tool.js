(function(){
	var Tools = {
	getRandom: function(min,max){
		return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
	}
}
window.Tools=Tools;

})()