window.onload=function(){
	var oUl=document.getElementById("list");
	var aLi=oUl.getElementsByTagName("li");
	var oP=document.getElementById("text");
    var count=0;
    var sum=0;
    var pri=0;
	
	
    for(var i=0;i<aLi.length;i++){
    	fn(aLi[i]);
    }
  
	function fn(oLi){
		var oStrong=oLi.getElementsByTagName("strong")[0];
		var oBtn1=oLi.getElementsByTagName("input")[0];
		var oBtn2=oLi.getElementsByTagName("input")[1];
		var oEm=oLi.getElementsByTagName("em")[0];
		var oSpan=oLi.getElementsByTagName("span")[0];
		var n1=Number(oStrong.innerHTML);
		var n2=parseFloat(oEm.innerHTML);
		
	

		oBtn2.onclick=function(){
            pri=0;
            n1++;
            count++;
            sum+=n2
            oStrong.innerHTML=n1;
            oSpan.innerHTML=n1*n2+"元";
            fn3();
            oP.innerHTML="商品合计共："+count+"件，共花费了："+sum+"元</br>其中最贵的商品单价是："+pri+"元"
		};
		oBtn1.onclick=function(){
			pri=0
			if(n1>0){
				count--;
				sum=sum-n2;
			}
			n1--;
			if(n1<=0){
				n1=0;
			}
            oStrong.innerHTML=n1;
            oSpan.innerHTML=n1*n2+"元";
            fn3();
            oP.innerHTML="商品合计共："+count+"件，共花费了："+sum+"元</br>其中最贵的商品单价是："+pri+"元"
		};
       


		function fn3(){
			for (var i=0;i<aLi.length ;i++ ){
		       if (Number(aLi[i].getElementsByTagName('strong')[0].innerHTML)>0){
	               if (parseFloat(aLi[i].getElementsByTagName('em')[0].innerHTML)>pri){
	                       pri=parseFloat(aLi[i].getElementsByTagName('em')[0].innerHTML);
	               }
		        }
		    }
		}
    }
}
