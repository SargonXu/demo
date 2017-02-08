window.onload=function(){
	var oUl=document.getElementById("menu");
	var aLi=oUl.children;
	var oDiv=document.getElementById("condition");
	var aSpan=oDiv.getElementsByTagName("span");
	var num=0;

	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;	
		/*var oA=aLi[i].children[0];*/
		aLi[i].onOff=true;
		aLi[i].onclick=function(){
			num=this.index;
			var list=this.children[1];
			if(this.onOff==true){
				addClass(this,"active");
				list.style.display="block";
				this.onOff=false;
			}else{
				removeClass(this,"active");
				list.style.display="none";
				this.onOff=true;
			}
			var aLi2=list.children;
			for(var i=0;i<aLi2.length;i++){
				removeClass(aLi2[i],"focus");
			}
			for(var i=0;i<aLi2.length;i++){
				aLi2[i].onclick=function(ev){
					for(var i=0;i<aLi2.length;i++){
						removeClass(aLi2[i],"focus");
					}
					addClass(this,"focus");
					aSpan[num].style.display="inline-block";
					aSpan[num].innerHTML=this.innerHTML;
					var ev=ev||event;
					ev.cancelBubble=true;
				};
			}
		};
	}
	function removeClass(obj,classname){
		var arrClass=obj.className.split(" ");
		var n=arrIndexOf(arrClass,classname);
		if(n!=-1){
			arrClass.splice(n,1);
			obj.className=arrClass.join(" ");
		}
	}

    function addClass(obj,classname){
    	if(obj.className==""){
    		obj.className=classname;
    	}else if(arrIndexOf(obj.className.split(" "),classname)=-1){
    		obj.className+=" "+classname;
    	}
    }
    function arrIndexOf(arr,a){
    	for(var i=0;i<arr.length;i++){
    		if(arr[i]==a){
    			return i;
    		}
    	}
    	return -1;
    }


	function getElementsByClassName(node,classname){
		if(node.getElementsByClassName){
			return node.getElementsByClassName(classname);
		}else{
			var elems=node.getElementsByTagName("*");
			var result=[];
			for(var i=0;i<elems.length;i++){
				var arrClass=elems.className.split(" ");
				if(arrIndexOf(arrClass,classname)!=-1){
					result.push(elems[i]);
				}
			}
			return result;
		}
	} 
};