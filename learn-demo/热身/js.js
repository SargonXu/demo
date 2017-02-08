function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(changeBox)

function changeBox(){
	var showBox=document.getElementById("top");
	var show=document.getElementsByTagName("input")[0];
	var designBox=document.getElementById("designBox");
	var cover=document.getElementById("over");
	show.onclick=function(){
		designBox.style.display="block";
		cover.style.display="block";
	}
	var links=designBox.getElementsByTagName("a");	
    var box=document.getElementById("box");	
	for(var i=0;i<links.length;i++){
		if(i<3){
			switch(i){
				case 0:links[i].onclick=function(){
				box.style.backgroundColor="red";
			    };break;
				case 1:links[i].onclick=function(){
				box.style.backgroundColor="yellow";
			    };break;
				case 2:links[i].onclick=function(){
				box.style.backgroundColor="blue";
			    };break;	
			}
		}else if(i<6){
			links[i].onclick=function(){
				box.style.width=this.firstChild.nodeValue+"px";
			}
		}else{
			links[i].onclick=function(){
				box.style.height=this.firstChild.nodeValue+"px";
			}					  
		}
    }
	var btn1=document.getElementById("btn1");
	var btn2=document.getElementById("btn2");
	btn1.onclick=function(){
		box.style.backgroundColor="#fff";
		box.style.width="100px";
		box.style.height="100px";
		designBox.style.display="none";
		cover.style.display="none";
	}
	btn2.onclick=function(){
		designBox.style.display="none";
		cover.style.display="none";
	}
}