
	function ajax(method,url,data,success){
		var xhr=null;
		try{
			xhr=new XMLHttpRequest();
		}catch(e){
			xhr=new ActiveXObjext('Microsoft.XMLHTTP');
		};
		if(method=='get'&&data){
			url+='?'+data+'&'+new Date().getTime();
		}
		xhr.open(method,url,true);
		if(method=='get'){
			xhr.send();
		}else{
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			xhr.send(data);
		}
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					success&&success(xhr.responseText);
				}else{
					alert('错了！Err:'+xhr.status);
				}
			}
		};
	}
