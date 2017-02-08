window.onload=function(){
	var oDiv=document.getElementById("output");
	var aDiv=oDiv.getElementsByTagName("div");
	var oText=document.getElementById("input");
	var oSelect=document.getElementsByTagName("select")[0];
	var aOption=oSelect.getElementsByTagName("option");
	var oInp=document.getElementsByTagName("input")[0];

    
    var url=[
    	["images/airballoon/1.jpg","images/airballoon/2.jpg","images/airballoon/3.jpg"],
    	["images/star/1.jpg","images/star/2.jpg","images/star/3.jpg","images/star/4.jpg"],
    	["images/love/1.jpg"]
    ];


    oInp.onclick=function(){
        var str="";
    	if(oText.value==false){
    		alert("请输入内容");
    	}else{
    		var arrText=oText.value.split("");
    		for(var i=0;i<arrText.length;i++){
    			if(arrText[i]==false){  
                    str=str+"&nbsp;";
    			}else{
    				str+="<span>"+arrText[i]+"</span>";
    			}
    		}
    		str="<div>"+str+"</div>";
            oDiv.innerHTML+=str;
    		oText.value="";
    	}
        var aSpan=aDiv[aDiv.length-1].getElementsByTagName("span");
		for(var j=0;j<aOption.length;j++){
			if(aOption[j].selected){
				for(var i=0;i<aSpan.length;i++){
					aSpan[i].style.background="url("+url[j][i%url[j].length]+")";
				}
				break;
			}
		} 	
    };
};