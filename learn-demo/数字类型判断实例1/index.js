window.onload=function(){


		var arr = [ '100px', 'abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, null, 
		document, [], true, '200px'-30,'23.45元', 5, Number('abc'), function(){ alert(3); }, 'xyz'-90 ];

		/*
		1、找到arr里所有的数字：-98765, 34, -2, 0, 5
		2、找到可以转成数字的：'100px', -98765, 34, -2, 0, '300', '23.45元',  5 
		3、把转成数字以后，最大值判断出来：300
		4、把 NaN 所在的位置找出来：1 14 17  19
		*/
		
        var arr1=[];
        var arr2=[];
		for(var i=0;i<arr.length;i++){
            if((typeof arr[i])=="number" && !(isNaN(arr[i]))){
            	arr1.push(arr[i]);
            }
            if((typeof parseInt(arr[i])) =="number" && !(isNaN(parseInt(arr[i])))){
            	arr2.push(arr[i]);
            }

		}
		alert(arr1);
		alert(arr2);
        var arr3=[];
		for(var i=0;i<arr.length;i++){
			if((typeof (arr[i]))=="number" && isNaN(Number(arr[i]))){
				arr3.push(i);
			}
		}
		alert(arr3);
		;
}