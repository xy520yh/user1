function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/1334;
    if(width<=1334){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}

function rePosition1(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}

rePosition();
rePosition1();
/*window.onresize = function(){
    rePosition();
	rePosition1();
};
*/
 window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
      if (window.orientation === 180 || window.orientation === 0) {
		   // alert('竖屏状态！');
       rePosition1();
      }
      if (window.orientation === 90 || window.orientation === -90) {
		   // alert('横屏！');
        rePosition();
      }
    }, false);








window.onload=function(){
	var oYzm=document.getElementById('yzm');
	oYzm.onclick=function(){
		this.innerHTML='60S';
		this.style.borderBottom='none';
	}

	/*
		var  number01=document.getElementById('number01');
	number01.onfocus = function(){
		if(number01.value=='请输入手机号'){
			number01.value='';
			this.style.color='#000';
		}
	}
	number01.onblur = function(){
		if(number01.value==''){
			number01.value='请输入手机号';
			this.style.color='#fff';
		}
	}
	var  yzm01=document.getElementById('yzm01');
	yzm01.onfocus = function(){
		if(yzm01.value=='请输入验证码'){
			yzm01.value='';
			this.style.color='#000';
		}
	}
	yzm01.onblur = function(){
		if(yzm01.value==''){
			yzm01.value='请输入验证码';
			this.style.color='#fff';
		}
	}
	

*/







/*
var  youx01=document.getElementById('youx01');
	youx01.onfocus = function(){
		if(youx01.value=='请输入手机号'){
			youx01.value='';
			this.style.color='#000';
		}
	}
	youx01.onblur = function(){
		if(youx01.value==''){
			youx01.value='请输入手机号';
			this.style.color='#fff';
		}
	}
	
	var  yzm02=document.getElementById('yzm02');
	yzm02.onfocus = function(){
		if(yzm02.value=='请输入验证码'){
			yzm02.value='';
			this.style.color='#000';
		}
	}
	yzm02.onblur = function(){
		if(yzm02.value==''){
			yzm02.value='请输入验证码';
			this.style.color='#fff';
		}
	}
*/		
		
}
