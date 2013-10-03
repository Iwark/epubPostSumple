var http_test = {};

(function(){

	"use strict";
	var req = new XMLHttpRequest();
	http_test.request = function(path,method){
		alert("??");
		var url = "http://localhost:3000/" + path + ".json";
		alert(url);
		req.onreadystatechange = function(){
			//通信が完了したら、受信したテキストを表示
			if(req.readyState == 4){
				alert(req.responseText);
			}
		}
		req.open(method, path, true);
		req.send("");
	}

})();