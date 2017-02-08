window.onload=function(){
	var aLi=document.getElementsByTagName("li");
	var aImg=document.getElementsByTagName("img");
	var aH=document.getElementsByTagName("h2");
	var links=document.getElementsByTagName("a");
    var arrImg=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg",];
    var arrText=["1-图片一","2-图片二","3-图片三","4-图片四","5-图片五","6-图片六","7-图片七","8-图片八","9-图片九","10-图片十","11-图片十一","12-图片十二"];
    
    function fn(){
    	for(var i=0;i<aH.length;i++){
    		aH[i].innerHTML=arrText[i];
    		aImg[i].src=arrImg[parseInt(arrText[i])-1];
    	}
    }
    fn();    

	links[1].onclick=function(){
		arrText.sort(function(){
			return Math.random()-0.5;
		});
		fn();
	};

    links[0].onclick=function(){
    	arrText.sort(function(a,b){
    		return parseInt(b)-parseInt(a);
    	});
    	fn();
    };

};