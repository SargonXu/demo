window.onload=function(){
	var data = [
		{
			'name'	:	'前端',
			'list'	:	[
				{
					'title'	:	'前端工程师',
					'company'	:	'北京魔方国际旅行社有限公司',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京海淀',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'网站前端页面设计',
					'company'	:	'北京中联讯通网络科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'5人',
					'workingLocation'	:	'北京月坛',
					'workExperience'	:	'不限',
					'education'	:	'大专',
					'wage'	:	'7000',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'高级web前端工程师',
					'company'	:	'星职场教育培训公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'12人',
					'workingLocation'	:	'军博',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'HTML5前端工程师',
					'company'	:	'北京育智兴邦教育科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'朝阳',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'前端工程师',
					'company'	:	'北京恩跃时代教育科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'网站前端设计',
					'company'	:	'北京创美时代办公家具有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京海淀',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'诚招web前端开发工程师',
					'company'	:	'北京中新美迪文化发展中心 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'东城',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'web前端DIV+CSS',
					'company'	:	'北京华夏安业科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'西城',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'前端设计',
					'company'	:	'北京鲁艺轩网络科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'3人',
					'workingLocation'	:	'通州',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'招聘 前端页面工作者',
					'company'	:	'千言万语（北京）教育科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'页面前端工程师',
					'company'	:	'北京奇点时空投资管理有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'4人',
					'workingLocation'	:	'北京海淀',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'高级web前端工程师',
					'company'	:	'星职场教育培训公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'12人',
					'workingLocation'	:	'军博',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'HTML5前端工程师',
					'company'	:	'北京育智兴邦教育科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'朝阳',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'前端工程师',
					'company'	:	'北京恩跃时代教育科技有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'网站前端设计',
					'company'	:	'北京创美时代办公家具有限公司 ',
					'position'	:	'前端页面',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京海淀',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				}
			]
		},
		
		{
			'name'	:	'后端',
			'list'	:	[
				{
					'title'	:	'PHP工程师',
					'company'	:	'北京创美时代办公家具有限公司 ',
					'position'	:	'PHP后台',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京海淀',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'诚招java开发工程师',
					'company'	:	'北京中新美迪文化发展中心 ',
					'position'	:	'java开发',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'东城',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'java工程师',
					'company'	:	'北京华夏安业科技有限公司 ',
					'position'	:	'java后台',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'西城',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'.net工程师',
					'company'	:	'北京鲁艺轩网络科技有限公司 ',
					'position'	:	'.net程序员',
					'recruitingNumbers'	:	'3人',
					'workingLocation'	:	'通州',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'招聘php程序员',
					'company'	:	'千言万语（北京）教育科技有限公司 ',
					'position'	:	'php程序员',
					'recruitingNumbers'	:	'2人',
					'workingLocation'	:	'北京',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				},
				{
					'title'	:	'PHP高级工程师',
					'company'	:	'北京奇点时空投资管理有限公司 ',
					'position'	:	'PHP高级工程师',
					'recruitingNumbers'	:	'4人',
					'workingLocation'	:	'北京海淀',
					'workExperience'	:	'不限',
					'education'	:	'不限',
					'wage'	:	'面议',
					'addDate'	:	'2013-12-14'
				}
			]
		}
	];
	
	var oUl=document.getElementById("top");
	var oDiv=document.getElementById("listbox");
	var oBox=document.getElementById("box");
	var oSpan=oBox.getElementsByTagName("span")[0];
	var oDiv2=document.getElementById("jobcontent");
	var aLi=oUl.getElementsByTagName("li");
	var aLi1=oDiv.getElementsByTagName("li");

    var num=0;
    var oSpanTop=parseInt(getStyle(oSpan,"top"));

	var oH=document.createElement("h4");
	var oUl2=document.createElement("ul");
	
    for(var i=0;i<6;i++){
    	var oLi=document.createElement("li");
    	oUl2.appendChild(oLi);
    }
    oDiv2.appendChild(oH);
    oDiv2.appendChild(oUl2);
    var aLi2=oUl2.getElementsByTagName('li');  

	for(var i=0;i<data.length;i++){
		var oLi=document.createElement("li");
		oLi.innerHTML=data[i].name;
		oUl.appendChild(oLi);
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			num=this.index;
			fn(num);
		};
	}
  

    fn(num);
	function fn(num){
		for(var i=0;i<aLi.length;i++){
			removeClass(aLi[i],"active");
		}
		addClass(aLi[num],"active");
		oDiv.innerHTML="";
		var list=document.createElement("ul");
		for(var i=0;i<data[num].list.length;i++){
			var oLi=document.createElement("li");
			
			var oA=document.createElement("a");
			oA.href="javascript:";
			oA.innerHTML=data[num].list[i].title;
			oLi.appendChild(oA);
			list.appendChild(oLi);
			oA.index=i;
			oA.onmouseout=function(){
				oBox.style.top="-400px";
			};
			oA.onmouseover=function(){
				oH.innerHTML=data[num].list[this.index].company;
				aLi2[0].innerHTML="<strong>职位：</strong>"+data[num].list[this.index].position;
				aLi2[1].innerHTML="<strong>招聘人数：</strong>"+data[num].list[this.index].recruitingNumbers;
				aLi2[2].innerHTML="<strong>工作地点：</strong>"+data[num].list[this.index].workingLocation;
				aLi2[3].innerHTML="<strong>工作经历：</strong>"+data[num].list[this.index].workExperience;
				aLi2[4].innerHTML="<strong>学历：</strong>"+data[num].list[this.index].education;
				aLi2[5].innerHTML="<strong>薪资：</strong>"+data[num].list[this.index].wage;
				oBox.style.left=this.offsetWidth+this.offsetParent.offsetLeft+oSpan.offsetWidth+"px";
				
				oSpan.style.top=oSpanTop+this.offsetParent.offsetHeight+"px";
				oBox.style.top=this.offsetParent.offsetHeight/2+this.offsetParent.offsetTop-oSpan.offsetTop-oSpan.offsetHeight/2+"px";
				var oHeight=document.documentElement.clientHeight||document.body.clientHeight;
				var oscrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				if(oBox.offsetHeight+oBox.offsetTop>oscrollTop+oHeight){
					oBox.style.top=oHeight-oBox.offsetHeight+oscrollTop+"px";
					oSpan.style.top=this.offsetParent.offsetTop+this.offsetParent.offsetHeight/2-oBox.offsetTop-oSpan.offsetHeight/2+"px";
				}
				if(oBox.offsetTop<oscrollTop){
					oBox.style.top=oscrollTop+"px";
					oSpan.style.top=this.offsetParent.offsetTop+this.offsetParent.offsetHeight/2-oBox.offsetTop-oSpan.offsetHeight/2+"px";
				}
			};
		}
		oDiv.appendChild(list);		
		
	}

	function addClass(obj,classname){
		if(obj.className==""){
			obj.className=classname;
		}else{
			var arrClass=obj.className.split(" ");
			var n=arrIndexOf(arrClass,classname);
			if(n==-1){
				obj.className+=" "+classname;
			}

		}
	}
	function removeClass(obj,classname){
		var arrClass=obj.className.split(" ");
		var n=arrIndexOf(arrClass,classname)
		if(n!=-1){
			arrClass.splice(n,1);
			obj.className=arrClass.join(" ");
		}
	}
	function arrIndexOf(arr,b){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==b){
				return i;
			}
		}
		return -1;
	}
	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle(attr):getComputedStyle(obj,0)[attr];
	}

};