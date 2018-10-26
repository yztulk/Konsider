//var url_string = "https://sats4.localdomain:18295/web.isp/login?u=rr@rr.com&p=admin";
var url_string = window.location.href;
var url = new URL(url_string);
var username = url.searchParams.get("u");
var password = url.searchParams.get("p");
console.log(username);
console.log(password);

document.getElementById("infaTextbox1").value = username;
document.getElementById("infaTextbox2").value = password;
document.getElementById("infaButton1").click()



var w = window.open("http://13.54.57.147:9085/ldmcatalog/login");
w.onload = function(){

	setTimeout(function(){ 
			alert("Hello"); 
		}, 
		3000
	);

};