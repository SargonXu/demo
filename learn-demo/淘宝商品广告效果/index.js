window.onload=function(){
	var aLi=document.getElementsByTagName("li");
	var aUl=document.getElementsByTagName("ul");
	var aLi1=aUl[0].getElementsByTagName("li");
	var aLi2=aUl[1].getElementsByTagName("li");
	var oImg=document.getElementsByTagName("img")[0];
	var aSpan=document.getElementsByTagName("span");
    var jud=true;
    var arrText=["童装款","演出服","连衣裙","打底裤","外套","遮阳帽","亲子装","童鞋","女童鞋","半身裙","套装","卫衣","高腰裤","牛仔裤"];
    var arrImg=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/1.jpg"];
    var arrSpan=[["热卖童装","新款演出服","特价连衣裙","秋季打底裤","韩版外套","时尚遮阳帽","可爱亲子装","靓丽童鞋","粉系女童鞋","新式半身裙","情侣套装","高领卫衣","紧身高腰裤","经典牛仔裤"],["50","88","69","128","168","89","129","120","179","158","160","199","216","118"]];
    var num=0;
    var timer1=null;
    var timer2=null;
    for(var i=0;i<aLi.length;i++){
    	aLi[i].innerHTML=arrText[i];
    }
    function fn(num){
    	for(var i=0;i<aLi.length;i++){
    		aLi[i].style.background="#fff";
    		aLi[i].style.color="#000";
    	}
    	aLi[num].style.background="#ff8494";
    	aLi[num].style.color="#fff";
    	for(var i=0;i<aSpan.length;i++){
    		aSpan[i].innerHTML=arrSpan[i][num];	
    	}
    	oImg.src=arrImg[num];
    }
    fn(num);
    
	function autoPlay1(){
        jud=true;
		timer1=setInterval(function(){
            
			num++;
            if(num==aLi.length){
                num=aLi.length-1;
                clearInterval(timer1);
                autoPlay2();
            }else{
                fn(num); 
            }
			
		},1000);
	}
	function autoPlay2(){
        jud=false;
		timer2=setInterval(function(){
			num--;
            if(num==-1){
                num=0;
                clearInterval(timer2);
                autoPlay1();
            }else{
                fn(num);  
            }
			
		},1000);
	}
    autoPlay1();
    for(var i=0;i<aLi.length;i++){
    	aLi[i].index=i;
    	aLi[i].onmouseover=function(){
    		clearInterval(timer1);
    		clearInterval(timer2);
    		num=this.index;
    		fn(num);
    	};
    	aLi[i].onmouseout=function(){
            if(jud==true){
                autoPlay1();
            }else{
                autoPlay2();
            }
    	};
    }

    
};
