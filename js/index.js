// function rePosition(){
// 	var width = document.documentElement.clientWidth || document.body.clientWidth;
// 	var height = document.documentElement.clientHeight || document.body.clientHeight;
// 	var ratio = (width > height ? width : height)/1334;
// 	console.log('1111');
//     if(width<=1334){
//         document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
//     }else{
//         document.getElementsByTagName('html')[0].style.fontSize="100px";
//     }
// }


window.onload = function() {
    var oYzm = document.getElementById('yzm');
    oYzm.onclick = function() {
        this.innerHTML = '60S';
        this.style.borderBottom = 'none';
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