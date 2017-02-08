window.onload=function(){   
    /*function getElementsByClassName(element,classname){
        if(!document||element.getElementsByClassName){
            var arr=[];
            var elements=document||element.getElementsByTagName("*");
            for(var i=0;i<elements.length;i++){
                if(elements[i].className.indexOf("classname")!=-1){
                    arr.push(elements[i]);
                }
            }
            return arr;
        }
    }
    if(document||element.getElementsByClassName){*/
        var aLi=document.getElementsByClassName("choice");
   /* }else{
        var aLi=getElementsByClassName("document","choice");
    }*/
    
    var oImg=document.getElementsByTagName("img")[0];
    var oDiv=document.getElementsByTagName("div")[0];
    var aSpan=oDiv.getElementsByTagName("span");
    var num1=0;
    var num2=0;

    var arr1=[["images/1.jpg","images/2.jpg","images/3.jpg"],["images/3.jpg","images/2.jpg","images/02.jpg","images/4.jpg"],
    ["images/2.jpg","images/01.jpg","images/3.jpg","images/4.jpg","images/5.jpg"],["images/6.jpg","images/3.jpg","images/4.jpg","images/5.jpg"]];
    var arr2=[["型动女装","女士新品","短袖T恤"],["时尚套装","女装商场","同款内衣","夏季新品"],["内衣商场","同款睡衣","套装情侣","家居服","丝袜"],["短袖T恤","套装情侣","同款内衣","夏季新品"]]
    function fn1(oLi){
    	for(var i=0;i<aLi.length;i++){
    		aLi[i].style.background="#f1f1f1";
    	}
    	oLi.style.background="#fff";
    	oImg.src=arr1[num1][0];
        for(var i=0;i<arr1[num1].length;i++){
            oDiv.innerHTML +="<span></span>";
        }
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].style.width=600/aSpan.length-2+"px";
            aSpan[i].innerHTML=arr2[num1][i];
        }
        aSpan[0].style.background="#f10000"; 
        
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].index=i;
            aSpan[i].onclick=function(){
                num2=this.index;
                for(var i=0;i<aSpan.length;i++){
                    aSpan[i].style.background="#666";
                }
                this.style.background="#f10000";
                oImg.src=arr1[num1][num2];
            };
        }   
    }
    fn1(aLi[num1]);

    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
    	aLi[i].onclick=function(){
            oDiv.innerHTML="";
    		num1=this.index;
    		fn1(this);
    	};  
    }
}







    	/*function fn2(oSpan){
            for(var j=0;j<aSpan.length;j++){
                if(j!=num2){
                    aSpan[j].style.background="#666";
                }   
            }
            oImg.src=arr[num1][num2];
            oSpan.style.background="#f10000";
            
        }
        
		for(var j=0;j<aSpan.length;j++){
		 	aSpan[j].index=j;
		 	aSpan[j].style.width=600/aSpan.length-2+"px";
		 	aSpan[j].onclick=function(){
		 		num2=this.index;
		 		fn2(this);
		 		num2=0;
		 	};
		}

    	
    }
*/