window.onload=function(){
	var oWrap=document.getElementById("content");
	var aMenu=oWrap.getElementsByTagName("h2");
	var aUl=oWrap.getElementsByTagName("ul");
	var aLi=null;
	var arrLi=[];

	for(var i=0;i<aMenu.length;i++){
		aMenu[i].index=i;
		aMenu[i].onclick=function(){
			for(var i=0;i<aMenu.length;i++){
				if(i!=this.index){
					aMenu[i].className="";
					aUl[i].style.display="none";
				}
			}
			if(this.className==""){
				aUl[this.index].style.display="block";
				this.className="active";
			}else{
				aUl[this.index].style.display="none";
				this.className="";
		    }
	    };
	}
    
	for(var i=0;i<aUl.length;i++){
		aLi=aUl[i].getElementsByTagName("li");
        for(var j=0;j<aLi.length;j++){
        	arrLi.push(aLi[j]);
        }
	}
    
    for(var i=0;i<arrLi.length;i++){
    	arrLi[i].index=i;
    	arrLi[i].onclick=function(){
    		for(var i=0;i<arrLi.length;i++){
    			if(i!=this.index){
    				arrLi[i].className="";
    			}
    		}
    		if(this.className==""){
    			this.className="activeli";
    		}else{
    			this.className="";
    		}
    		
    	}
    }
}