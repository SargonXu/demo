window.onload=function(){
	var oDiv=document.getElementById("wrap");
	var oDiv2=document.getElementById("cover");
	var aSpan=oDiv.getElementsByTagName("span");
	var str="";
	var num=0;
	for(var i=0;i<10;i++){
		str +="<span></span>"
	}
	oDiv.innerHTML=str;
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].innerHTML="+1";
		aSpan[i].style.left=i*40+"px";
	}
	oDiv.onclick=function(){
			movement(oDiv2,"width",200,400)
			opacity(oDiv2,0.15,0);
		
	    oDiv.timer=setInterval(function(){
	    	movement(aSpan[num],"top",20,-200);
	    	opacity(aSpan[num],0.2,0);
	    	num++;
	    	if(num==aSpan.length){
	    		clearInterval(oDiv.timer);
	    	}
	    },200);
	};		
	function movement(obj,attr,speed,finalPos,endFn){
		var pos=parseInt(getStyle(obj,attr));
        speed=pos<finalPos? speed :-speed;
        clearInterval(obj.move);
        obj.move=setInterval(function(){
        	pos=pos+speed;
        	if(pos>finalPos&&speed>0 || pos<finalPos&&speed<0){
        		pos=finalPos;
        	}
        	obj.style[attr]=pos+"px";
        	if(pos==finalPos){
        		clearInterval(obj.move);
        	}
        	endFn && endFn();
        },200)
	}
		function opacity(obj,speed,final,endFn){
			var currentOpa=parseInt(getStyle(obj,"opacity"));
	        speed=currentOpa<final? speed :-speed;
	        clearInterval(obj.opacity);
	        obj.opacity=setInterval(function(){
	        	currentOpa=currentOpa+speed;
	        	if(currentOpa>final&&speed>0 || currentOpa<final&&speed<0){
	        		currentOpa=final;
	        	}
	        	obj.style["opacity"]=currentOpa;
	        	if(currentOpa==final){
	        		clearInterval(obj.opacity);
	        	}
	        	endFn && endFn();
	        },300)
		}



	function getStyle(obj,attr){
        return getComputedStyle(obj,0)[attr]? getComputedStyle(obj,0)[attr]:obj.currentStyle(attr);
	}
}