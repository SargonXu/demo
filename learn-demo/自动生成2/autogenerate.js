window.onload=function(){
	var oBtn=document.getElementsByTagName("input")[0];
	var oUl=document.getElementsByTagName("ul")[0];
	var aLis=oUl.getElementsByTagName("li");
    var jud=true;
	oBtn.onclick=function(){
		if(jud){
			for(var i=0;i<100;i++){
				var num=i+1;
				oUl.innerHTML +="<li>"+num+"</li>";
			}
	        var len=aLis.length;
	        for(var i=0;i<len;i++){
	        	var j=Math.floor(i/10);
	        	var k=i%10;
	        	var l=i%4;
	        	var arrColor=["#f00","#ff0","#00f","#0f0"];
	        	aLis[i].style.left=k*50+"px";
	        	aLis[i].style.top=j*50+"px";
	        	aLis[i].style.backgroundColor=arrColor[l];
	        }
		}
        jud=false;	
	};
}