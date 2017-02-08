window.onload=function(){
	var oRegister=document.getElementById('register');
	var aInp1=oRegister.getElementsByTagName('input');
	var oUsername1=aInp1[0]
	var oVerifyUserName=document.getElementById('verifyUserName');
	var oPassword1=aInp1[1];
	var oRegBtn=aInp1[2];
	var oLogin=document.getElementById('login');
	var aInp2=oLogin.getElementsByTagName('input');
	var oUsername2=aInp2[0];
	var oPassword2=aInp2[1];
	var oLoginBtn=aInp2[2];
	var oUser=document.getElementById('user');
	var oSpan=oUser.getElementsByTagName('span')[0];
	var oLink=oUser.getElementsByTagName('a')[0];
	var oMessageboard=document.getElementById('messageboard');
	var oText=oMessageboard.getElementsByTagName('textarea')[0];
	var oSendBtn=oMessageboard.getElementsByTagName('input')[0];
	var oPull=document.getElementById('pull');
    
    var oLeft=document.getElementById('left');

    var iPage=1;
    function updateUserStatus(){
    	var uid=getCookie('uid');
    	var username=getCookie('username');
    	if(uid){
    		oUser.style.display='block';
    		oSpan.innerHTML=username;
    		oRegister.style.display='none';
    		oUsername1.value='';
    		oPassword1.value='';
    		oVerifyUserName.innerHTML='';
    		oLogin.style.display='none';
    	}else{
    		oUser.style.display='none';
    		oSpan.innerHTML='';
    		oRegister.style.display='block';
    		oLogin.style.display='block';
    	}
    }  
    updateUserStatus();
//用户验证
	oUsername1.onblur=function(){
		ajax('post','guestbook/index.php','m=index&a=verifyUserName&username='+this.value,function(data){
			var data=JSON.parse(data);
			oVerifyUserName.innerHTML=data.message;
			if(data.code){
				oVerifyUserName.style.color="red";
			}else{
				oVerifyUserName.style.color="green";
			}
		});
	};

//用户注册
	oRegBtn.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=reg&username='+oUsername1.value+'&password='+oPassword1.value,function(data){
			var data=JSON.parse(data);
			alert(data.message);
			if(!data.code){
				updateUserStatus();
			}
		});
	};

//用户登录
	oLoginBtn.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=login&username='+oUsername2.value+'&password='+oPassword2.value,function(data){
			var data=JSON.parse(data);
			alert(data.message);
			if(!data.code){
				updateUserStatus();
			}
		});
	};

//用户退出
	oLink.onclick=function(){
		ajax('post','guestbook/index.php','m=index&a=logout',function(data){
			var data=JSON.parse(data);
			alert(data.message);
			if(!data.code){
				updateUserStatus();
			}
		});	
	};
	function getCookie(key){
		var arr1=document.cookie.split('; ');
		for(var i=0;i<arr1.length;i++){
			var arr2=arr1[i].split('=');
			if(arr2[0]==key){
				return decodeURI(arr2[1]);
			}
		}
	}

//留言
    //初始化
    function showList(){
    	ajax('post','guestbook/index.php','m=index&a=getList&page=1&n=2&page='+iPage,function(data){
    		var d=JSON.parse(data);
			if(d.data){
				for(var i=0;i<d.data.list.length;i++){
					createList(d.data.list[i]);
				}
			}else{
				if(iPage==1){
					oLeft.innerHTML='现在还没有留言快来抢沙发';
				}
				oPull.style.display='none';
			}
    	});
    }
    showList();

    oPull.onclick=function(){
    	iPage++;
    	showList();
    }
    
    oSendBtn.onclick=function(){
    	ajax('post','guestbook/index.php','m=index&a=send&content='+encodeURI(oText.value),function(data){
    		var d=JSON.parse(data);
    		alert(d.message);
    		if(!d.code){
    			createList(d.data,true);
    		}
    		oText.value='';
    	});
    };


    function createList(data,insert){
    	var oList=document.createElement('div');
    	oList.innerHTML='';

    	var oP1=document.createElement('p');
    	var oA=document.createElement('a');
    	oA.className='username';
    	oA.href='javascript:;';
    	oA.innerHTML=data.username;
    	var oSpan=document.createElement('span');
    	oSpan.innerHTML="说：";
    	oP1.appendChild(oA);
    	oP1.appendChild(oSpan);

    	var oP2=document.createElement('p');
    	oP2.className='content';
    	oP2.innerHTML=data.content;

    	var oDiv=document.createElement('div');
    	oDiv.className='bottomP';
    	var oA2=document.createElement('a');
    	oA2.innerHTML='顶(<span>'+data.support+'</span>)';
    	oA2.href='javasccript:;';
    	var oA1=document.createElement('a');
    	oA1.innerHTML='踩(<span>'+data.oppose+'</span>)';
    	oA1.href='javasccript:;';
    	oDiv.appendChild(oA1);
    	oDiv.appendChild(oA2);

    	oList.appendChild(oP1);
    	oList.appendChild(oP2);
    	oList.appendChild(oDiv);

    	
    	if(insert&&oLeft.children[0]){
    		oLeft.insertBefore(oList,oLeft.children[0]);
    	}else{
    		oLeft.appendChild(oList);
    	}
    	oPull.style.display='block';
    }
};