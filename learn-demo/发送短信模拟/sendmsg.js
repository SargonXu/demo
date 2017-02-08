window.onload=function(){
	var oImg=document.getElementsByClassName("imgs")[0];
	var oText=document.getElementById("input");
	var oBtn1=document.getElementById("btn1");
	var oBtn2=document.getElementById("btn2");
	var oMsg=document.getElementById("text");
	
	var i=0;
	var imgArr=["images/sendmsg-01.jpg","images/sendmsg-02.jpg"];
	
	oBtn1.onclick=function(){ 
		if(i==0){
		    i=1;
		}else{
			i=0;
		}
		return oImg.src=imgArr[i];
		 
	};
	oBtn2.onclick=function(){
		if(i==0){
		return oMsg.innerHTML="<div class='right'><a href=''><img src='images/sendmsg-01.jpg' /></a><span>"+oText.value+"</span></div>"+oMsg.innerHTML
	    }else{
		return oMsg.innerHTML="<div class='left'><a href=''><img src='images/sendmsg-02.jpg' /></a><span>"+oText.value+"</span></div>"+oMsg.innerHTML
		}
    };
}