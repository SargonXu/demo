window.onload=function(){
	var oDiv1=document.getElementById("top");
	var links=oDiv1.getElementsByTagName("a");
	var aSpan1=oDiv1.getElementsByTagName("span");
	var oImg=document.getElementById("show");
	var oH=document.getElementsByTagName("h2")[0];
	var oUl=document.getElementsByTagName("ul")[0];
	var aLi=oUl.getElementsByTagName("li");
	var aImg=oUl.getElementsByTagName("img");
	var aH=oUl.getElementsByTagName("h2");
	var aP=oUl.getElementsByTagName("p");
	var oDiv2=document.getElementById("control");
	var oDiv3=oDiv2.getElementsByTagName("div")[0];
	var aLink=oDiv2.getElementsByTagName("a");
	var aSpan2=oDiv2.getElementsByTagName("span");


	var arrImg=[["images/1.jpg","images/2.jpg","images/3.jpg"],["images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg"]];
    var arrText=[[["微软方面今日宣布","微软在线(MSN中国)达成管理层收购协议"],["西窗科技旗下公司","原微软在线总经理刘振宇将出任西窗科技CEO"],["西窗科技同微软","协议于 2016年8月10日起正式生效"]],[["无人机反制系统","“电科智达”已于今年6月完成100万天使轮融资"],["智能送货机器人","“真机地虎”透露已获得中科创星数百万元天使轮投资"],["轻量级商业服务机器人","“小船互动”宣布完成千万元Pre-A轮融资"],["结合农业和智能硬件的科技公司","“花花草草”透露已于去年11月份完成2000万Pre-A轮融资"],
    ["电竞线上赛平台","“好哥哥线上赛”完成300万种子轮融资"],["开源在线学习平台","“EduSoho”完成数千万A轮融资，投资方为华睿投资"],["实时视频面试招聘平台","“机遇在线”完成天使轮融资，具体金额未透露"],["互联网外包中介及监理平台","“找外包”已于去年6月完成200万天使轮融资"],["品牌整合全案服务商"," “维宁传媒”宣布完成数千万Pre-A轮融资"]]];
    var arrBg=["url(images/bg2.jpg) no-repeat left bottom","url(images/bg2.jpg) no-repeat -111px top"];

    var num1=0;
    var num2=0;
    var num3=0;
    var num4=0;
    
    var str1="";
    var str2="";
    function fn1(num){
    	for(var i=0;i<links.length;i++){
    		links[i].style.background="";
    	}
    	links[num1].style.background=arrBg[num1];
    	for(var i=0;i<arrImg[num].length;i++){
    		str1+="<li><img src='' alt='' /><h2></h2><p></p></li>";
    		
    	}
        for(var i=0;i<parseInt(arrImg[num].length/3);i++){
            str2+="<span></span>";
        }
    	oUl.innerHTML=str1;
    	oDiv3.innerHTML=str2;
    	str1="";
    	str2="";
    	for(var i=0;i<aLi.length;i++){
    		aImg[i].src=arrImg[num][i];
    		aH[i].innerHTML=arrText[num][i][0];
    		aP[i].innerHTML=arrText[num][i][1];
    	}
        oUl.style.width=aLi.length*163+"px";
    	oImg.src=arrImg[num][num2];
    	oH.innerHTML=arrText[num][num2][0];
        aSpan2[num3].className="active";
    }
    fn1(num1);

   /* function fn2(num2){
        for(var i=0;i<aSpan2.length;i++){

        }
    }
*/
    function fn3(num3){
        for(var i=0;i<aSpan2.length;i++){
            if(i!=num3){
                aSpan2[i].className=" ";
            }   
        }
        aSpan2[num3].className="active";
    }
    fn3(num3);
    function fn2(num2){
        for(var i=0;i<aImg.length;i++){
            aImg[i].style.border="1px solid #aaa";
        }
        aImg[num2].style.border="1px solid #0f0";
        oImg.src=aImg[num2].src;
        oH.innerHTML=aH[num2].innerHTML;
    }
    fn2(num2);
    for(var i=0;i<links.length;i++){
    	links[i].index=i;
    	links[i].onclick=function(){
            num4=0;
            num3=0;
            num2=0;
    		num1=this.index;
	    	fn1(num1);
            oUl.style["left"]="0px";
    		return false;
    	};
    }  
    aLink[1].onclick=function(){
        num4++;
        if(num4==aSpan2.length){
            num4=aSpan2.length-1;
        }
        num3++;
        if(num3==aSpan2.length){
            num3=aSpan2.length-1;
        }
        move(oUl,"left",20,489,-(aSpan2.length-1)*489);
        fn3(num3);
        return false;
    };
    aLink[0].onclick=function(){
        num4++;
        if(num4==aSpan2.length){
            num4=aSpan2.length-1;
        }
        num3--;
        if(num3==-1){
            num3=0;
        }
        move(oUl,"left",20,489,0);
        fn3(num3);
        return false;
    };
    for(var i=0;i<aImg.length;i++){
        aImg[i].index=i;
        aImg[i].onclick=function(){
            num2=this.index;
            fn2(num2);
        };
        aImg[i].onmouseover=function(){
            for(var i=0;i<aImg.length;i++){
                aImg[i].style.border="1px solid #aaa";
            }
            this.style.border="1px solid #0f0";
        };
        aImg[i].onmouseout=function(){
            for(var i=0;i<aImg.length;i++){
                aImg[i].style.border="1px solid #aaa";
            }
        };
    }
    function move(obj,attr,speed,range,finalPos,endFn){
        
        
        var pos=parseInt(getStyle(obj,attr));
        if(pos==finalPos)return num4=0&&false;
        var target;
        speed=pos<finalPos?speed:-speed;
        range=pos<finalPos?range:-range;
        target=finalPos-range*(aSpan2.length-1-num4);
        clearInterval(obj.move);
        obj.move=setInterval(function(){
            pos=pos+speed;
            if(pos>target&&speed>0||pos<target&&speed<0){
                pos=target;
            }
            obj.style[attr]=pos+"px";
            if(pos==target){
                clearInterval(obj.move);
            }
            endFn&&endFn();
        },50);    
    }




    function getStyle(obj,attr){
        return getComputedStyle(obj,0)[attr]?getComputedStyle(obj,0)[attr]:obj.currentStyle(attr);
    }

}