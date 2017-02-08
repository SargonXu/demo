window.onload=function(){
	var oUl1=document.getElementById("choice");
	var aLi1=oUl1.getElementsByTagName("li");
	var oImg=document.getElementsByTagName("img")[0];
	var oUl2=document.getElementById("list");
	var aLi2=oUl2.getElementsByTagName("li");
     
    var arr=[["图片1","图片2","图片3"],["图片4","图片5","图片6"]];
    var arrImg=[["images/1.jpg","images/2.jpg","images/3.jpg"],["images/4.jpg","images/5.jpg","images/6.jpg"]];
    var num1=0;
    var num2=0;

    var timer1=null;
    var timer2=null;
    function fn1(a,b){
    	for(var i=0;i<aLi1.length;i++){
    		aLi1[i].style.background="#9de7ea";
    		aLi1[i].style.color="#000";
    	}
    	aLi1[a].style.background="#7ff159";
    	aLi1[a].style.color="#fff";
    	oImg.src=arrImg[a][b];
    	for(var i=0;i<aLi2.length;i++){
    		aLi2[i].style.background="#f1f1f1";
    		aLi2[i].style.color="#000";
    		aLi2[i].innerHTML=arr[a][i];
    	}
    	aLi2[b].style.background="#0f0";
    	aLi2[b].style.color="#fff";
    }
    fn1(num1,num2);

    	function autoPlay2(){
    		timer2=setInterval(function(){
    		    num2++;
    		    num2%=arrImg[num1].length;
    		    fn1(num1,num2);
    		},1500);
    	}
    	autoPlay2();
	    function autoPlay1(){
		    timer1=setInterval(function(){	
		    	num1++;
		    	num1%=arrImg.length;
		    	aLi1[num1].style.background="#7FF159";
		    	fn1(num1,num2);
		    },4500);
		}
		autoPlay1();

    for(var i=0;i<aLi1.length;i++){
    	aLi1[i].index=i;
    	aLi1[i].onmouseover=function(){
    		clearInterval(timer1);
    		clearInterval(timer2);
    		num1=this.index;
    		num2=0;
    		fn1(num1,num2);
            autoPlay2();
    	};
    	aLi1[i].onmouseout=function(){
    		clearInterval(timer1);
    		clearInterval(timer2);
    		autoPlay1();
    		autoPlay2();
    	};
    }
    for(var i=0;i<aLi2.length;i++){
    	aLi2[i].index=i;
    	aLi2[i].onmouseover=function(){
    		clearInterval(timer1);
    		clearInterval(timer2);
    		num2=this.index;
    		fn1(num1,num2);
    	};
    	aLi2[i].onmouseout=function(){
    		clearInterval(timer1);
    		clearInterval(timer2);
    		autoPlay1();
    		autoPlay2();
    	};
    }

}