window.onload=function(){
	var aUl=document.getElementsByTagName("ul");

    for(var i=0;i<aUl.length;i++){
    	aUl[i].jud=true;
    }
    setInterval(function(){
    	var n=Math.floor(Math.random()*8);
    	move(aUl[n],"top",12);
    },1000);
 
    function move(obj,attr,speed,endFn){
    	var pos=parseInt(getStyle(obj,attr));
    	if(pos==-120)obj.jud=false;
    	if(pos==0)obj.jud=true;
    	if(obj.jud==true){
    		target=pos-60;
    	}else{
    		target=pos+60;
    	}
    	speed=pos<target?speed:-speed;
    	clearInterval(obj.move);
    	obj.move=setInterval(function(){
    		pos=pos+speed;
    		if(pos>target&&speed>0||pos<target&&speed<0){
    			pos=target;
    		}
    		obj.style[attr]=pos+"px";
    		if(pos==target){
    			clearInterval(obj.move);
    			endFn&&endFn();
    		}
    	},50);
    }
    function getStyle(obj,attr){
    	return window.getComputedStyle?getComputedStyle(obj,0)[attr]:obj.currentStyle(attr);
    }
}