window.onload=function(){
	var oDiv1=document.getElementById("up");
	var oDiv2=document.getElementById("down");
	var Up=oDiv1.getElementsByTagName("a")[0];
	var Down=oDiv2.getElementsByTagName("a")[0];
	var list=document.getElementById("product");

    var timer1=null;
    var timer2=null;
    var ypos=0;

    Up.onmousedown=function(){
        if(ypos==0){
       	    clearInterval(timer1);
       	}else{
       		timer1=setInterval(function(){
       			ypos=ypos+Math.ceil((0-ypos)/20);
       		    list.style.top=ypos+"px";
            },100);
       	}
    };
    Up.onmouseup=function(){
        	clearInterval(timer1);
    };
    Down.onmousedown=function(){
        if(ypos==-359){
       	    clearInterval(timer2);
       	}else{
       		timer2=setInterval(function(){
       			ypos=ypos-Math.ceil((ypos+359)/20);
       		    list.style.top=ypos+"px";
            },100);
       	}
    }; 
    Down.onmouseup=function(){
        	clearInterval(timer2);
    };
    Up.onclick=function(){
            return false;
    }; 
    Down.onclick=function(){
            return false;
    }; 
}