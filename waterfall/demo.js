window.onload=function(){
	var oUl=document.getElementById('ul1');
	var aLi=oUl.getElementsByTagName("li");
	var len=aLi.length;
	var iPage=1;
	var b=true;
	/*ajax('get','getPics.php','cpage=1',function(data){
		alert(data);
	});*/
	function getList(){
		ajax('get','getPics.php','cpage='+iPage,function(data){
			var data=JSON.parse(data);
			if(!data){
				return ;
			}
            for(var i=0;i<data.length;i++){
            	var oDiv=document.createElement("div");
            	var oImg=document.createElement("img");
            	oImg.src=data[i].image;
            	oImg.style.height=data[i].height*(238/data[i].width)+"px";
            	var oP=document.createElement("p");
            	oP.innerHTML=data[i].title;
            	oDiv.appendChild(oImg);
            	oDiv.appendChild(oP);

            	var _index=getShortest();
            	aLi[_index].appendChild(oDiv);
            }
            b=true;	
		});
	}
	getList();
	window.onscroll=function(){
		var _index=getShortest();
		var oLi=aLi[_index];
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if( oLi.offsetHeight+getTop(oLi)<document.documentElement.clientHeight+scrollTop){
			if(b){
				b=false;
				iPage++;
				getList();
			}
		}
	};
    function getTop(obj){
    	var iTop=0;
    	while(obj){
    		iTop+=obj.offsetTop;
    		obj=obj.offsetParent;
    	}
    	return iTop;
    }
	function getShortest(){
		var index=0;
		var iH=aLi[index].offsetHeight;
		for(var i=0;i<len;i++){
			if(aLi[i].offsetHeight<iH){
				index=i;
				iH=aLi[i].offsetHeight;
			}
		}
		return index;
	}
};