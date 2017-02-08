window.onload=function(){
	var oBtn1=document.getElementById("btn1");
	var oBtn2=document.getElementById("btn2");
	var oGallery1=document.getElementById("imagegallery1");
	var oGallery2=document.getElementById("imagegallery2");
	var oSpan1=document.getElementById("count1");
	var oSpan2=document.getElementById("count2");

	var arrImg1=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
	var arrImg2=["images/01.jpg","images/02.jpg","images/03.jpg"];

    
    
    var num1=0;
	var num2=0;

	// 初始化
	function ftn(){
		oGallery1.src=arrImg1[num1];
		oGallery2.src=arrImg2[num2];
		oSpan1.innerHTML=1+num1+"/"+arrImg1.length;
		oSpan2.innerHTML=1+num2+"/"+arrImg2.length;
	}
	ftn();

    

	oBtn2.onclick=function(){
		num1++;
		num2++;
		if(num1==arrImg1.length){
			num1=0;
		}
		if(num2==arrImg2.length){
			num2=0;
		}
		ftn();
	};

	oBtn1.onclick=function(){
		num1--;
		num2--;
		if(num1==-1){
			num1=arrImg1.length-1;
		}
		if(num2==-1){
			num2=arrImg2.length-1;
		}
		ftn();
	};

	oGallery1.onclick=function(){
		num1++;
		if(num1==arrImg1.length){
			num1=0;
		}
		ftn();
	};

	oGallery2.onclick=function(){
		num2++;
		if(num2==arrImg2.length){
			num2=0;
		}
		ftn();
	};
}

