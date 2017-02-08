window.onload=function(){
	var aDiv=document.getElementsByTagName("div");
    var num=0;
    var len=19;
    var timer=null;
    var jud=true;

    for(var i=0;i<len;i++){
    	document.body.innerHTML +="<div></div>";
    }
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.left=i*60+10+"px";
	}
    document.onclick=function(){
        if(parseInt(getStyle(aDiv[len-1],"top"))==20){
            oneByOneMove(500,false);    
        }else if(parseInt(getStyle(aDiv[len-1],"top"))==500){
            oneByOneMove(20,true);
        }         
    };

    function oneByOneMove(final_Pos,onOff){
    	
        clearInterval(timer);
    	timer=setInterval(function(){
    	       
    		drop(aDiv[num],"top",20,final_Pos);
    		num++;
    		if(num==len){
    			clearInterval(timer);
                num=0
                jud=onOff;
    		}
    	},100);
    }
    function drop(obj,attr,speed,final_Pos,endFn){
        speed=parseInt(getStyle(obj,attr))<final_Pos?speed:-speed;
        clearInterval(obj.timer);
    	obj.timer=setInterval(function(){
    		pos=parseInt(getStyle(obj,attr))+speed;
	        if(pos>final_Pos&&speed>0||pos<final_Pos&&speed<0){
	        	pos=final_Pos;
	        } 
	        obj.style[attr]=pos+"px";
	        if(pos==final_Pos){
	        	clearInterval(obj.timer);
	        }
	        endFn&&endFn();
        },50);
        
    }
    function getStyle (obj,attr) { return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj,0)[attr]; }
};