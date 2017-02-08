window.onload=function(){
	var oUl1=document.getElementById("changeList");
	var aLi1=oUl1.getElementsByTagName("li");
	var oUl2=document.getElementById("list");
	var aLi2=oUl2.getElementsByTagName("li");
	var aDiv=oUl2.getElementsByTagName("div");
	var aImg=oUl2.getElementsByTagName("img");
	var aSpan=oUl2.getElementsByTagName("span");
    var aP=oUl2.getElementsByTagName("p");

    for(var i=0;i<aSpan.length;i++){
    	aSpan[i].innerHTML=aP[i].innerHTML;
    	aP[i].style.backgroundPositionY=-i*31+6+"px";
    	aDiv[i].style.backgroundPositionY=-i*100+6+"px";
    }
    

	for(var i=0;i<aLi1.length;i++){
		aLi1[i].onclick=function(){
			for(var i=0;i<aLi1.length;i++){
				aLi1[i].style.borderBottom="1px solid #94bdd6";
				aLi1[i].style.background="#dee7e7";
			}
			this.style.borderBottom="1px solid #fff";
			this.style.background="#fff";
		};
	}
    var num=0;

	for(var i=0;i<aLi2.length;i++){
		aLi2[i].index=i;
		aLi2[i].onclick=function(){
			num=this.index;
			for(var i=0;i<aP.length;i++){
				if(i!=num){
				   aP[i].style.display="block";
				}
			}
			aP[num].style.display="none";
			for(var i=0;i<aDiv.length;i++){
				if(i!=num){
					aDiv[i].style.display="none";
				}
				
			}
            aDiv[num].style.display="block";

		};
	}
}