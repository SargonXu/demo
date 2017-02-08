window.onload=function(){
	var wrap=document.getElementById("wrap");
	var oBox=document.getElementById("box");
	var intr=document.getElementById("intr");
	var oH=document.getElementsByTagName("h2")[0];
	var oP=document.getElementsByTagName("p")[0];
	var aImg=oBox.getElementsByTagName("img");

	var arrText=[[" 爱奇艺VIP嘉年华","方同:以后要做电影"],["宋喆律师","秦昊发声力挺伊能静"],["郑爽LOGO上衣","周杰伦林书豪合作MV"],[" 蔡健雅承认恋情","福山雅治妻子确认怀孕"]]
    var arrImg=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"];
    var num=0;
    var str="";
    var timer=null;
    var target=0;


    for(var i=0;i<arrText.length;i++){
    	str +="<img src='' alt='' />";
    }
    oBox.style.width=arrImg.length*500+"px";
    oBox.innerHTML=str;
    for(var i=0;i<aImg.length;i++){
    	aImg[i].src=arrImg[i];
    }
    function fn(num){
    	oH.innerHTML=arrText[num][0];
    	oP.innerHTML=arrText[num][1];
    	movement1(intr,"bottom",10,0);
    }
    fn(num);
    function autoPlay(){
    	
    	clearInterval(timer);
    	timer=setInterval(function(){
    	    movement1(intr,"bottom",20,-60);	
    		movement(oBox,"left",100,-500,-1500);
    	},3000)
    }
    autoPlay();
    function movement1(obj,attr,speed,finalPos,endFn){
    	speed= parseInt(getStyle(obj,attr))<finalPos? speed : -speed;
    	clearInterval( obj.timer );
    	obj.timer = setInterval( function(){
    		var pos = parseInt( getStyle( obj,attr ) ) + speed;
    		if( pos > finalPos && speed > 0 || pos < finalPos && speed < 0 ){
    			pos = finalPos;
    		}
    		obj.style[ attr ] = pos + "px";
    		if( pos==finalPos ){
    			clearInterval( obj.timer );
    		}
    		endFn && endFn();
    	},100 ); 
    }

    function movement(obj,attr,speed,range,finalPos,endFn){
    	var pos=parseInt(getStyle(obj,attr));
    	if(pos==finalPos){
    		pos=0;
    		num=0;
    	}
        speed= pos<finalPos? speed : -speed;
    	target=pos+range;
    	clearInterval( obj.timer );
    	obj.timer = setInterval( function(){
    		pos = pos + speed;
    		if( pos > target && speed > 0 || pos < target && speed < 0 ){
    			pos = target;
    		}
    		obj.style[ attr ] = pos + "px";
    		if( pos==target ){
    			clearInterval( obj.timer );
    			num++;
    			fn(num);
    		}
    		endFn && endFn();
    	},200 ); 
    }
    function getStyle(obj,attr){
    	return getComputedStyle(obj,0)[attr]? getComputedStyle(obj,0)[attr]:obj.currentStyle(attr);
    }


}