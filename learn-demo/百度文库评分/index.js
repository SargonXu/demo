window.onload=function(){
	var aSpan=document.getElementsByTagName("span");
	var oDiv=document.getElementById("remark");
	var arr=["很差","较差","一般","推荐","力荐"];
	var num=-1;

	for(var i=0;i<aSpan.length;i++){
        aSpan[i].index=i;
		aSpan[i].onclick=function(){
			oDiv.style.display="block";
            num=this
            oDiv.innerHTML=arr[this.index];
            for(var i=0;i<aSpan.length;i++){
            	aSpan[i].style.background="url(images/bg1.jpg)";
            }
			if(this.index<2){
				for(var i=0;i<=this.index;i++){
					aSpan[i].style.background="url(images/bg3.jpg)";
				}
			}else{
				for(var i=0;i<=this.index;i++){
					aSpan[i].style.background="url(images/bg2.jpg)";
			    }
			}
		};
		aSpan[i].onmouseover=function(){
			oDiv.style.display="block";
            oDiv.innerHTML=arr[this.index];
            if(this.index>num){
            	for(var i=0;i<aSpan.length;i++){
            	    aSpan[i].style.background="url(images/bg1.jpg)";
            	}
            	if(this.index<2){
            		for(var i=0;i<=this.index;i++){
            			aSpan[i].style.background="url(images/bg3.jpg)";
            		}
            	}else{
            		for(var i=0;i<=this.index;i++){
            			aSpan[i].style.background="url(images/bg2.jpg)";
            	    }
            	}
            }
		};
        aSpan[i].onmouseout=function(){
        	oDiv.style.display="none";
        	for(var i=0;i<aSpan.length;i++){
        		aSpan[i].style.background="url(images/bg1.jpg)";
        	}
        	if(num<2){
        		for(var i=0;i<=num;i++){
        			aSpan[i].style.background="url(images/bg3.jpg)";
        		}
        	}else{
        		for(var i=0;i<=num;i++){
        			aSpan[i].style.background="url(images/bg2.jpg)";
        	    }
        	}
        };
	}
};