window.onload=function(){
	var oBtn=document.getElementsByTagName("input")[0];
	var oUl=document.getElementsByTagName("ul")[0];
	var aLis=oUl.getElementsByTagName("li");
    var jud=true;
	oBtn.onclick=function(){
        if(jud){
        	var str="";
			for(var l=0;l<13;l++){
				var num1=l+1;
		        str=str+"<li>"+num1+"</li>";
			}
            oUl.innerHTML=str;
			var len=aLis.length;
            var num2=1;
            var num3;
			for(var i=0;i<len;i++){
				aLis[i].style.left=i*40+"px";
				var k=Math.floor((len+1)/2);
				if(i<k){
					aLis[i].style.top=i*42+"px";
				}else {if(len%2==0){
							num3=1;
						}else{
							num3=0
						}
						num2++;
						aLis[i].style.top=(k-num2+num3)*42+"px";
					
				}
				var arrColor=["#f00","#ff0","#00f","#0f0"]
				var j=i%4;
				aLis[i].style.backgroundColor=arrColor[j];
			}
		}
        jud=false;
	};
	
}