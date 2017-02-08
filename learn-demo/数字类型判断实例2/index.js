window.onload=function(){
	var oText=document.getElementsByTagName("input")[0];
	var oBtn=document.getElementsByTagName("input")[1];

	oBtn.onclick=function(){
		if(oText.value==""){
			alert("不能为空");
		}else if(isNaN(Number(oText.value))){
			alert(oText.value+"不是数字");
		}else if(oText.value.length<5||oText.value.length>10){
			if(oText.value.charAt(0)=="0"){
			   alert("第一个数字不能为0，且请输入5位以上10位以内的数字");
		    }else if(parseInt(oText.value)!=parseFloat(oText.value)){
		    			alert("不能是小数，且请输入5位以上10位以内的数字");
			}else{
				alert("请输入5位以上10位以内的数字");
	        }	
		}else if(oText.value.charAt(0)=="0"){
			alert("第一个数字不能为0");
		}else if(parseInt(oText.value)!=parseFloat(oText.value)){
			alert("不能是小数");
		}else{
			return true;
		}
	}
    
}