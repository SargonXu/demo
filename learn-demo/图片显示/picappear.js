window.onload=function(){
	var oUl=document.getElementsByTagName("ul")[0];
	var str="";
	for(var i=0;i<100;i++){
        str+="<li></li>";
	}
	oUl.innerHTML=str;	
	var aLis=oUl.getElementsByTagName("li");
	var len=aLis.length;
	for( var i=0;i<len;i++){
		var j=Math.floor(i/10);
		var k=i%10;
		aLis[i].style.left=k*50+"px";
		aLis[i].style.top=j*50+"px";
		aLis[i].onmouseover=function(){
			this.style.background="transparent";
		};
	}
}