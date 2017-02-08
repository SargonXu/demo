window.onload=function(){
	var aLi=document.getElementsByTagName("li");
    for(var i=0;i<aLi.length;i++){
    	fn(aLi[i]);
    }
	function fn(oLi){
		
		var oLi1=oLi.getElementsByTagName("div")[0];
		var oSpan=oLi1.getElementsByTagName("span")[0];
		var oP=oLi.getElementsByTagName("p")[0];
		var oLi2=oLi.getElementsByTagName("div")[1];
        var oBtn1=oLi2.getElementsByTagName("a")[0];
        var oBtn2=oLi2.getElementsByTagName("a")[1];
        var oText=oLi2.getElementsByTagName("input")[0];
        
        function fn1(){
        	oLi2.style.top="-800px";
        	oLi1.style.top="0px";		
        }

		oSpan.onclick=function(){
			oLi1.style.top="-800px";
			oLi2.style.top="0px";
			oText.value=oP.innerHTML;
		};
		function fn2(oBtn){
			oBtn.style.background="#0af";
			oBtn.style.color="#fff"
		}
		function fn3(oBtn){
			oBtn.style.background="#fff";
			oBtn.style.color="#000";
		}
        oBtn1.onmouseover=function(){
        	fn2(oBtn1);
        };
        oBtn2.onmouseover=function(){
        	fn2(oBtn2);
        };
        oBtn1.onmouseout=function(){
        	fn3(oBtn1);
        };
        oBtn2.onmouseout=function(){
        	fn3(oBtn2);
        };

		oBtn1.onclick=function(){
			fn1();
			oP.innerHTML=oText.value;
			return false;
        };
        oBtn2.onclick=function(){
            fn1();
            return false;
	    };
	}
}