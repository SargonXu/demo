window.onload=function(){
	var oImg = document.getElementById("img");
	var oBtn1 = document.getElementById("left");
	var oBtn2 = document.getElementById("right");
	var changeBtn=document.getElementById("bottom");
	var aBtn=document.getElementsByClassName("dot");
	
	var arrImg = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
	var num = 0;
	
	var str="";
	for(var i=0;i<arrImg.length;i++){
		str +="<div class='dot'><img src='' alt='' /></div>";
	}
	changeBtn.innerHTML=str;
	
	var aDiv=[];
	for(var i=0;i<aBtn.length;i++){
		var oDiv=aBtn[i].getElementsByTagName("img")[0];
		aDiv.push(oDiv);
		aBtn[i].index=i;
		
		aBtn[i].onmouseover=function(){
			aDiv[this.index].style.display="block";
			aDiv[this.index].src=arrImg[this.index];
			aDiv[this.index].className="onshow";
			
	        
		};
		aBtn[i].onmouseout=function(){
			aDiv[this.index].style.display="none";
			aDiv[this.index].className="";
		};
	}
	
	function toForward (){
		oImg.src = arrImg[num];
		for(var i=0;i<aBtn.length;i++){
			if(i!=num){
				aBtn[i].className="dot";
			}else{
				aBtn[i].className="dot active";
			}
        }
		
	}
	toForward();
	
	
	oBtn2.onclick = function () {
		num ++;
		if(num==arrImg.length) {
				num=0;
		}
		toForward();
		return false;
	};
	oBtn1.onclick = function () {
		num --;
		if(num==-1) {
			    num=arrImg.length-1;	
			}
		toForward();
		return false;
	};
	
	oBtn1.onmouseover=function(){
		this.style.opacity=1;
	};
	oBtn1.onmouseout=function(){
		this.style.opacity=0.7;
	}
	oBtn2.onmouseover=function(){
		this.style.opacity=1;
	};
	oBtn2.onmouseout=function(){
		this.style.opacity=0.7;
	};	
	
	
	
	
	
	
	
    
	
}   
