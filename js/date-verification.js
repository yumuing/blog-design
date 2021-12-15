$("#login").click(function(){
	var name = $('#logName');
	var pass = $('#logPass');
	if(name.val() == "" || pass.val() == ""){
		alert("请填写完整表单！")
		return false;
	}
	else{
		if(name.val() == "webdesign" & pass.val() == "123456"){
			alert("登陆成功！");
			return true;
		}
		else{
			alert("登录失败！");
			return false;
		}
	}
}) 

$("#register").click(function(){
	var name = $('#registerName');
	var mail = $('#registerMail');
	var pass = $('#registerPass');
	var aPass = $("#affirmregisterPass")
	if(name.val() == "" || pass.val() == "" || mail.val()=="" || aPass.val()==""){
		alert("请填写完整表单！");
		return false;
	}
	else{
		if(pass.val() == aPass.val()){
			var postData = "mailto:1714935263@qq.com?subject=注册信息" + "&body="+" name=" + name.val() + " email=" + mail.val() + " password=" + pass.val();
			$("#register").attr("href",postData);
		}
		else{
			alert("密码不一致！");
			return false;
		}
	}
	
}) 
