function setCookie() 
{
	var userName=document.getElementById("name").value;
	var pattern=/^[A-Za-z']*$/;
	var result=pattern.test(userName);
	if (result==true)
	{
		document.cookie="username="+userName;
		return true;
	
 }
	else
 {
	alert("Invalid Entry");
	return false;
 }
 }

function deleteCookie()
{
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 

}
 