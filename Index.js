function donate()
{
	alert("Donated!!");
}
function donation()
{
	n = document.getElementById("nam").value;
	e = document.getElementById("em").value;
	p = document.getElementById("ph").value;
	s = document.getElementById("btn");
	document.write("<h2>"+"Donatee Details,"+"</h2>");
	document.write("<h3>"+"Name: "+n+"</h3>");
	document.write("<h3>"+"Email: "+e+"</h3>");
	document.write("<h3>"+"Phone Number: "+p+"</h3>");
	document.write("<h2>"+"Thank You for your contact information!"+"</h2>");
	document.write("<h2>"+"We will reach you out soon! Happy donating!!"+"</h2>");
}