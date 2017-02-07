/*手风琴*/
// var oDiv = document.getElementById('slide');
var $oDiv = $("#slide");
var $aLi  = $oDiv.find("li");
// var aLi = oDiv.getElementsByTagName("li");
var minW = 99999;
/*for(var i = 0; i<aLi.length; i++){
	minW = Math.min(minW,aLi[i].offsetWidth);
}*/		
$aLi.each(function(){
	minW = Math.min(minW,$(this).offsetWidth());
	$(this).mouseover(function(){
		slider($(this).index());
	})
});


function slider(_index){
	clearInterval($oDiv.timer);
	$oDiv.timer = setInterval(function(){
		var iW = $oDiv.offetWidth();
		var jud = true;
		for(var i = 0; i<$aLi.length; i++){
			if(i === _index){
				continue;
			}else if(minW === $aLi.index(i).offsetWidth()){
				iW -= minW;
				continue;
			}
			jud = false
			var speed = Math.ceil(($aLi.index(i).offsetWidth() - minW)/10);
			var w = $aLi.index(i).offsetWidth() - speed;
			if(w <= minW){
				w = minW;
			}
			$aLi.index(i).width(w);
			iW -= w;
		}
		$aLi.index(_index).width(iW);
		if(jud){
			clearInterval($oDiv.timer);
			$oDiv.timer = null;
		}
	},30);
}
/*function slider(_index){		
	clearInterval(oDiv.timer);
	oDiv.timer = setInterval(function(){
		var iW = oDiv.offsetWidth;
		var jud = true;
		for(var i = 0; i<aLi.length; i++){
			if(i === _index){
				continue;
			}else if(minW === aLi[i].offsetWidth){
				iW -= minW;
				continue;
			}
			jud = false
			var speed = Math.ceil((aLi[i].offsetWidth - minW)/10);
			var w = aLi[i].offsetWidth - speed;
			if(w <= minW){
				w = minW;
			}
			aLi[i].style.width = w + "px";
			iW -= w;
		}
		aLi[_index].style.width = iW +"px";
		if(jud){
			clearInterval(oDiv.timer);
			oDiv.timer = null;
		}
	},30);
}*/

/*for(var i = 0;i < aLi.length; i++){
	aLi[i].index = i;
	aLi[i].onmouseover =function(){
		var _index =this.index;
		slider(_index);
	}
}*/