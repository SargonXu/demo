window.onload=function(){
	var nav=document.getElementById("nav");
	var aLi=nav.getElementsByTagName("li");
	var Link=nav.getElementsByTagName("a")[0];
	var menu=document.getElementById("menu");
	var oDiv=menu.getElementsByTagName("div")[0];
	var Links=menu.getElementsByTagName("a");

	var arrText=[["最新更新","活动","报名试听","学院反馈"],["妙味讲师","培训方法","培训理念","联系我们"],["班固","MATRIX","留学e网","ECMail"],["JS课程","弹出效果","3D球面标签云","Windows计算器"]]
    var num=0;
    var str="";
    var timer1=null;
    var timer2=null;
    var widths=0;
    var width1=0;
    var arr=["328px","360px","288px","416px"];
    function fn(num){
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.background="transparent";
			aLi[i].style.border="none";

		}
		aLi[num].style.background="#bce8ea";
        aLi[num].style.border="1px solid #bce8ea";
        aLi[num].style.borderRadius="4px";
        
        
        /*oDiv.style.left=parseInt(getComputedStyle(aLi[num],0)["width"])/2+20*num+22+"px";*/
    }
    fn(num);

    for(var i=0;i<aLi.length;i++){
    	aLi[i].index=i;
    	aLi[i].onmouseover=function(){
            menu.style.display="none";
            clearTimeout(timer2);
            clearTimeout(timer1);
    		num=this.index;
    		fn(num);
            
	        
	       	
            timer1=setTimeout(function(){
        	    for(var i=0;i<arrText[num].length;i++){
        	     	str+="<a href=''></a>";
        	    }
        	    menu.innerHTML=str;
                /*"<div id='triangle'></div>"+*/
        	    str="";
        	    for(var i=0;i<Links.length;i++){
        	    	Links[i].innerHTML=arrText[num][i];
        	    }
                menu.style.width=arr[num];

        		/*for(var i=0;i<Links.length;i++){
        			widths+=parseInt(getComputedStyle(Links[i],0)["width"])+21;	
        		}  
        		              
        	    menu.style.width=widths+20+"px";

        	    widths=0;*/
        	   /* alert(menu.style.width);*/
                for(var i=0;i<num;i++){
                	width1+=parseInt(getComputedStyle(aLi[i],0)["width"]);
                }
                menu.style.left=width1+20*num+340+"px";
                width1=0;
           
                menu.style.display="block";    
            },500);
    	};
	    aLi[i].onmouseout=function(){
	    	clearTimeout(timer1);
	    	clearTimeout(timer2);

	    	timer2=setTimeout(function(){

	    		menu.style.display="none";
	    	},1000);
	    	
	    };


    }


}