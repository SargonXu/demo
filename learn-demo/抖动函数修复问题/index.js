window.onload = function(){
	var aImg = document.getElementsByTagName( "img" );
	var len = 8;
    var str = "";
    var arrImg = [ "images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg" ];
    for( var i = 0; i < len; i ++ ){
    	str += "<img src='' alt='' />";
    }
    document.body.innerHTML = str;
    for( var i = 0; i < aImg.length; i ++ ){
    	aImg[i].style.left = 20 + i*110 + "px";
    	aImg[i].src = arrImg[i];
    	aImg[i].jud = true;
    	aImg[i].onmouseover = function(){
    		if( this.jud==true ){
    			shake( this,"top",20 );
    		}	
    	};
    }
    function shake(obj,attr,range,endFn){
        var arr = [];
        var num = 0;
        for( var i = range;i > 0; i -=2 ){
            arr.push( i,-i );
        }
        arr.push( 0 );
        obj.jud = false;
        clearInterval( obj.shake );
        pos = parseInt( getStyle( obj,attr ) );
        obj.shake = setInterval( function(){
            obj.style[attr] = pos + arr[num] +"px";
            num ++;
            if( num == arr.length ){
                clearInterval( obj.shake );
                obj.jud = true;
                endFn && endFn();
            }
        },50 );
    }
    function getStyle( obj,attr ){ return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle( obj,0 )[ attr ]; }
}