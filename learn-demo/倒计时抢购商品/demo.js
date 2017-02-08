window.onload=function(){
	function getElementsByClassName(node,classname){
		if(node.getElementsByClassName){
			return node.getElementsByClassName(classname);
		}else{
			var elems=node.getElementsByTagName("*");
			var result=new Array();
			for(var i=0;i<elems.length;i++){
				if(elems[i].className.indexOf(classname)!=-1){
					result.push(elems[i]);
				}
			}
		    return result;
		}
	}

	var countDown=getElementsByClassName(document,"time");
	var list=document.getElementById("list");
	var aLi1=list.getElementsByTagName("li");
	var aInp1=getElementsByClassName(document,"dline");
	var aInp2=getElementsByClassName(document,"btn");
	var aP1=getElementsByClassName(document,"time");
	var aP2=getElementsByClassName(document,"keyword");
	var aImg1=list.getElementsByTagName("img");
	var aPri=list.getElementsByTagName("span");

	var shopList=document.getElementById("shoppinglist");
	var aLi2=shopList.getElementsByTagName("li");
	var aImg2=shopList.getElementsByTagName("img");
	var aSpan1=getElementsByClassName(shopList,"span1");
	var aSpan2=getElementsByClassName(shopList,"span2");

	var total=document.getElementById("total");

	var t=0;
	var iNow=null;
	var iNew=null;
	var str1="";
	var str2="";
	var sum=0;
	
	for(var i=0;i<aLi1.length;i++){
		aLi1[i].style.left=i*190+"px";
		aInp1[i].value="September 1 2016 22:50:00";
		aInp2[i].index=i;

		aInp2[i].onclick=function(){
			var num=this.index;
            fn(this,num);
		};	
	}


    function fn(obj,num){
		obj.timer=setInterval(function(){
			iNew=new Date(aInp1[num].value);
			iNow=new Date();
			t=Math.floor((iNew-iNow)/1000);
			if(t>=0){
				str1=toTwo(Math.floor(t/86400))+"天"+toTwo(Math.floor(t%86400/3600))+"时"+toTwo(Math.floor(t%3600/60))+"分"+toTwo(t%60)+"秒";
				aP1[num].innerHTML=str1;
			}else{
				clearInterval(obj.timer);
				fn2(num);

			}
        },1000);
    }

    function fn2(num){
    	shake(aLi1[num],"left",function(){
    		move(aLi1[num],"top",20,300,function(){
    			fn3(num);
    		});
    		Opacity(aLi1[num],0.05,0);
    	});
    }

    function fn3(num){
    	str2+="<li><span class='span1'>"+aP2[num].innerHTML+"</span><span class='span2'>"+aPri[num].innerHTML+"</span><img src='images/"+(num+1)+".jpg' alt='' /></li>"
    	shopList.innerHTML=str2;
    	fn4();
    	sum=0;    
    }
    
    function fn4(){
        for(var i=0;i<aSpan2.length;i++){
        	var n=parseFloat(aSpan2[i].innerHTML);
    		sum+=n;
    	}
    	total.innerHTML=sum;
    }
    

	function shake(obj,attr,endFn){
		var arr=[];

		for(var i=10;i>0;i-=2){
			arr.push(i,-i);
		}
		arr.push(0);
		var num2=0;
		obj.timer=setInterval(function(){
			var pos=parseInt(getStyle(obj,attr));
			obj.style[attr]=pos+arr[num2]+"px";
			num2++;
			if(num2==arr.length){
				clearInterval(obj.timer);
				endFn&&endFn();
			}
		},100);
	}

    function move(obj,attr,speed,finalPos,endFn){
    	var pos=parseInt(getStyle(obj,attr));
    	speed=pos<finalPos?speed:-speed;
    	clearInterval(obj.timer);
    	obj.timer=setInterval(function(){
    		pos=pos+speed;
    		if(pos>finalPos&&speed>0||pos<finalPos&&speed<0){
    			pos=finalPos;
    		}
    		obj.style[attr]=pos+"px";
    		if(pos==finalPos){
    			clearInterval(obj.timer);
    			endFn&&endFn();
    		}
    	},100);
    }

    function Opacity(obj,speed,target,endFn){
    	clearInterval(obj.Opacity);
    	var opa=parseFloat(getStyle(obj,"opacity"));
    	speed=opa<target?speed:-speed;
    	obj.Opacity=setInterval(function(){
    		opa=opa+speed;
    		if(opa>target&&speed>0||opa<target&&speed<0){
    			opa=target;
    		}
    		obj.style.opacity=opa;
    		if(opa==target){
    			clearInterval(obj.Opacity);
    			endFn&&endFn();
    		}
    	},50)
    }

    function getStyle(obj,attr){
    	return window.getComputedStyle?getComputedStyle(obj,0)[attr]:obj.currentStyle(attr);
    } 

    function toTwo(n){
    	if(n<10){
    		n="0"+n;
    	}else{
    		n=""+n;
    	}
    	return n;
    }
};