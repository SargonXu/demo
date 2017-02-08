window.onload=function(){
	var oUl=document.getElementsByTagName("ul")[0];
    var aInp=document.getElementsByTagName("input");

    aInp[1].onclick=function(){
    	var oLi=document.createElement("li");
    	oLi.innerHTML=aInp[0].value;
    	aInp[0].value="";
    	if(oUl.children.length<5){
    		if(oUl.children[0]){
    			oUl.insertBefore(oLi,oUl.children[0]);
    		}else{
    			oUl.appendChild(oLi);
    		}
    	}else{
    		oUl.removeChild(oUl.children[oUl.children.length-1]);
    		oUl.insertBefore(oLi,oUl.children[0]);
    	}
    	oLi.onclick=function(){
    		this.className="selected";
    	};
    };
    aInp[2].onclick=function(){
    	for(var i=0;i<oUl.children.length;i++){
    		if(oUl.children[i].className=="selected"){
    			oUl.removeChild(oUl.children[i]);
    			i--;
    		}
    	}
    };

};