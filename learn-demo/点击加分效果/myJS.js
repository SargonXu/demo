window.onload = function(){
/////////////////////////获取对象css属性函数/////////////////////////////////////////////////////////////////

	function getStyle( obj,attr ){ return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle( obj,0 )[ attr ]; }

/////////////////////////对象移动函数///////////////////////////////////////////////////////////////////////////////

    function movement(obj,attr,speed,finalPos,endFn){
    	speed= parseInt(getStyle(obj,attr))<finalPos? speed : -speed;
        clearInterval( obj.timer );
    	obj.timer = setInterval( function(){	
    		var pos = parseInt( getStyle( obj,attr ) ) + speed;
    		if( pos > finalPos && speed > 0 || pos < finalPos && speed < 0 ){
    			pos = finalPos;
    		}
    		obj.style[ attr ] = pos + "px";
    		if( pos==finalPos ){
    			clearInterval( obj.timer );
    		}
    		endFn && endFn();
    	},50 ); 
    }

////////////////////抖动函数////////////////////////////////////////////////////////////////////////////////
    // 注：需事先在对象身上添加自定义属性jud为true作为判断  
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
            }
            endFn && endFn();
        },50 );
    }





} ;  
