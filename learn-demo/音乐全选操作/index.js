window.onload=function(){
	var aLi=document.getElementsByTagName("li");
    var oBottom=document.getElementById("bottom");
    var aInput2=oBottom.getElementsByTagName("input");
    var oUl=document.getElementsByTagName("ul")[0];
    var aInput1=oUl.getElementsByTagName("input");

    var bg="";
    var jud;
    var str="";

	for(var i=0;i<aLi.length;i++){
		
		bg=aLi[i].style.background;
		aLi[i].onmouseover=function(){
			this.style.background="#f1f1f1";
		};
		aLi[i].onmouseout=function(){
			this.style.background=bg;
		};
	}
    aInput2[0].onclick=function(){
        jud=this.checked;
        for(var i=0;i<aInput1.length;i++){
        	aInput1[i].checked=jud;
        }
    };

    for(var i=0;i<aInput1.length;i++){
    	aInput1[i].onclick=function(){
    		if(this.checked==false){
    			aInput2[0].checked=false;
    		}else{
    			for(var i=0;i<aInput1.length;i++){
    				str +=aInput1[i].checked;
    			}
    			if(str.indexOf("false")==-1){
    				aInput2[0].checked=true;
    			}
    		}
    		str="";
    		
    	};
    }


};
