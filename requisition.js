function requestFile()
{
	var emailReqWindow = window.open('emailPop.html', name, "height=400,width=300");
	if(window.focus){emailReqWindow.focus()}
	
	return false;
}

function sendReqEmail()
{
	var name = document.getElementById("nameReceive").value;
	var emailAddr = document.getElementById("emailAddr").value;
	var description = document.getElementById("descFileDescr").value;
	/*
	$.post("mailer.php",
			{'name': name, 'emailAddr': emailAddr, 'description':description},
			function(response){
			}, "text"
			);
			*/
	window.close();
}