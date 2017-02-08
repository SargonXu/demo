window.onload=function(){
    function getElementsByClassName(node,classname){
        if(node.getElementsByClassName){
            return node.getElementsByClassName(classname);
        }else{
            var results=new Array();
            var elems=node.getElementsByTagName("*");
            for(var i=0;i<elems.length;i++){
                if(elems[i].className.indexOf(classname)!=-1){
                    results[results.length]=elems[i];
                }
            }
            return results;
        }
    }

    var aImg1=getElementsByClassName(document,"time1");
    var aImg2=getElementsByClassName(document,"time2");
    var aImg3=getElementsByClassName(document,"dot");
    var aSpan=document.getElementsByTagName("span");
    var len=aImg1.length;
    
    aImg3[0].src="images/colon.jpg";
    aImg3[1].src="images/colon.jpg";
    for(var i=0;i<len;i++){
        if(i<2){
            aImg1[i].style.left=i*50+"px";
            aImg2[i].style.left=i*50+"px";
        }else if(i<4){
            aImg1[i].style.left=i*50+50+"px";
            aImg2[i].style.left=i*50+50+"px";
        }else{
            aImg1[i].style.left=i*50+100+"px";
            aImg2[i].style.left=i*50+100+"px";
        }
    }
    for(var i=0;i<aImg1.length;i++){
        aImg1[i].jud=true;
    }
    timeRun();
    setInterval(function(){
        timeRun();
    },1000);

    function timeRun(){
        var iNow=new Date();
        var Hour=toTwo(iNow.getHours());
        var Min=toTwo(iNow.getMinutes());
        var Second=toTwo(iNow.getSeconds());
        var str="";
        str=Hour+Min+Second;
        for(var i=0;i<str.length;i++){
            aImg2[i].src="images/"+str.charAt(i)+".jpg";
            aImg1[i].src="images/"+str.charAt(i)+".jpg";
        }
        fn(5,10);
        if(str.charAt(5)==9){
            fn(4,6);
            if(str.charAt(4)==5){
                fn(3,10);
                if(str.charAt(3)==9){
                    fn(2,6);
                    if(str.charAt(2)==5){
                        if(str.charAt(0)!=2){
                            fn(1,10);
                            if(str.charAt(1)==9){
                                fn(0,3);
                            } 
                        }else if(str.charAt(0)==2){
                            fn(1,4);
                            if(str.charAt(1)==3){
                                fn(0,3);
                            }
                        }
                    }    
                }
            }
        }
        changeDot();
    }

    function fn(num1,num2){
        var iNow=new Date();
        var Hour=toTwo(iNow.getHours());
        var Min=toTwo(iNow.getMinutes());
        var Second=toTwo(iNow.getSeconds());
        var str="";
        str=Hour+Min+Second;
        var n=1+parseInt(str.charAt(num1));
        if(n==num2){
            n=0;
        }
        if(aImg1[num1].jud==false){
            aImg1[num1].src="images/"+n+".jpg";
            setTimeout(function(){
                move(aImg1[num1],"top",10,0,0);
                move(aImg2[num1],"top",10,-100,100);
            },500);
            aImg1[num1].jud=true;
        }else{
            aImg2[num1].src="images/"+n+".jpg";
            setTimeout(function(){
                move(aImg1[num1],"top",10,-100,100);
                move(aImg2[num1],"top",10,0,0);
            },500);
            aImg1[num1].jud=false;
        }
    }

    function fn1(a){
        for(var i=0;i<aSpan.length;i++){
            aSpan[i].style.display=a;
        }   
    }

    function changeDot(){
        fn1("none");
        setTimeout(function(){
            fn1("block");
        },500);
    }

    function toTwo(n){
        if(n<10){
            return n="0"+n;
        }else{
            return n=""+n;
        }
    }

    function move(obj,attr,speed,finalPos,target,endFn){
        var pos=parseInt(getStyle(obj,attr));
        speed=pos<finalPos?speed:-speed;
        clearInterval(obj.move);
        obj.move=setInterval(function(){
            pos=pos+speed;
            if(pos>finalPos&&speed>0||pos<finalPos&&speed<0){
                pos=finalPos;
            }
            obj.style[attr]=pos+"px";
            if(pos==finalPos){
                clearInterval(obj.move);
                obj.style[attr]=target+"px";
            }
            endFn&&endFn();
        },50);
    }

    /*function getStyle(obj,attr){
        return obj.currentStyle?obj.currentStyle(attr):getComputedStyle(obj,0)[attr];
    }*/
    function getStyle(obj,attr){
        return window.getComputedStyle(obj,0)[attr]?getComputedStyle(obj,0)[attr]:obj.currentStyle(attr);
    }

}