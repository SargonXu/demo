window.onload=function(){
	var aSpan=document.getElementsByTagName("span");
	var oBox=document.getElementById("wrap");
	var oDiv=document.getElementById("box");
	var oInp=document.getElementsByTagName("input")[0];
    var aImg=oDiv.getElementsByTagName("img");

    var arrImg=["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png","images/10.png","images/11.png","images/12.png"];
    var n=0;
    var timer=null;
    var arr=[];
    for(var i=20;i>0;i-=2){
    	arr.push(i,-1);
    }
    arr.push(0);

    oInp.onclick=function(){
    	oInp.value="游戏进行中……";
    	oInp.setAttribute("disabled","disabled");
    	fn();
    };
 
    function fn2(){
    	aImg[0].src=arrImg[arrImg.length-1];
    	shake(aImg[0],"left",fn);
    }
    function fn(){

    	oDiv.innerHTML='<img src="" alt="" />';
    	aImg[0].src=arrImg[Math.floor(Math.random()*11)];
    	aImg[0].style.left=Math.floor(Math.random()*681)+"px";
    	move(aImg[0],"top",2,400,function(){shake(oBox,"top",fn);});

    }
    function move(obj,attr,speed,finalPos,endFn){
    	obj.onclick=function(){
    		clearInterval(timer);
    		aSpan[0].innerHTML=parseInt(aSpan[0].innerHTML)+1;
    		n++;
    		fn2();
    	}; 	
    	var pos=parseInt(getStyle(obj,attr));
    	speed=pos<finalPos?speed:-speed;
    	speed=speed+n;
    	clearInterval(timer);
    	timer=setInterval(function(){
    		pos=pos+speed;
    		if(pos>finalPos&&speed>0||pos<finalPos&&speed<0){
    			pos=finalPos;
    		}
    		obj.style[attr]=pos+"px";
    		if(pos==finalPos){
    			clearInterval(timer);
    			aSpan[1].innerHTML=parseInt(aSpan[1].innerHTML)+1;
    			endFn&&endFn();	
    		}
    	},100);
    }

    function shake(obj,attr,endFn){
    	var pos=parseInt(getStyle(obj,attr));
    	var num=0;
    	clearInterval(obj.shake);
    	obj.shake=setInterval(function(){
    		obj.style[attr]=pos+arr[num]+"px";
    		num++;
    		if(num==arr.length){
    			clearInterval(obj.shake);
    			if(parseInt(aSpan[1].innerHTML)<10){
    			    endFn&&endFn();
    			}else{
    				alert("游戏失败……再接再厉！！！");
    				oInp.removeAttribute("disabled");
    				oInp.value="游戏开始";
    				aSpan[0].innerHTML=0;
    				aSpan[1].innerHTML=0;
    			}
    		}
    	},50);
    }
    function getStyle(obj,attr){
    	return window.getComputedStyle?getComputedStyle(obj,0)[attr]:obj.currentStyle(attr);
    }


};