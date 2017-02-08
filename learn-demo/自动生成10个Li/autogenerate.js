window.onload=function(){
	var oBtn=document.getElementsByTagName("input")[0];
	var oUl=document.getElementsByTagName("ul")[0];
    var aLis=oUl.getElementsByTagName("li");
    var judge=true;
	oBtn.onclick=function(){
		if(judge){
			for(var i=0;i<10;i++){
				var j=i+1;
				oUl.innerHTML+="<li>"+j+"</li>";
				
			}
			var len=aLis.length;
		    for(var i=0;i<len;i++){
		    	
		        aLis[i].style.left=i*50+"px";
		        if(i%4==0){
		        	aLis[i].style.backgroundColor="#f00";
		        }else if(i%4==1){
		        	aLis[i].style.backgroundColor="#ff0";
		        }else if(i%4==2){
		        	aLis[i].style.backgroundColor="#00f";
		        }else{
		        	aLis[i].style.backgroundColor="#0f0";
		        }
		    }
	    }
		
    judge=false;
    };

}