var structureCount=1;
function parallax()
{	if (window.pageYOffset<650)
	{
		var mridaksh = document.getElementById("textcontainer");
		mridaksh.style.visibility="visible";
		mridaksh.style.top = -(window.pageYOffset/2.8)+200+'px';
		mridaksh.style.fontSize=150-(window.pageYOffset/8);
		document.getElementById("header").style.opacity=1-(window.pageYOffset/80);
		document.getElementById("date").style.opacity=1-(window.pageYOffset/80);
		document.getElementById("registercontainer").style.opacity=1-(window.pageYOffset/80);
		document.getElementById("newheader").style.visibility="hidden";
	}
	else
	{
		document.getElementById("newheader").style.visibility="visible";
		document.getElementById("textcontainer").style.visibility="hidden";
	}		
}


window.addEventListener("scroll", parallax, false);


function structureback()
{
	if (structureCount==1)
	{
		document.getElementById("structureback").style.opacity=0.5;
	}
	else
	{
		document.getElementById("structureback").style.opacity=1;
		document.getElementById("contentheading"+structureCount).style.visibility="hidden";
		document.getElementById("content"+structureCount).style.visibility="hidden";
		structureCount--;
		document.getElementById("contentheading"+structureCount).style.visibility="visible";
		document.getElementById("content"+structureCount).style.visibility="visible";
	}
	document.getElementById("structureforward").style.opacity=1;
}


function structureforward()
{	if (structureCount==7)
	{
		document.getElementById("structureforward").style.opacity=0.5;
	}
	else
	{
		document.getElementById("structureforward").style.opacity=1;
		document.getElementById("contentheading"+structureCount).style.visibility="hidden";
		document.getElementById("content"+structureCount).style.visibility="hidden";
		structureCount++;
		document.getElementById("contentheading"+structureCount).style.visibility="visible";
		document.getElementById("content"+structureCount).style.visibility="visible";
	}
	document.getElementById("structureback").style.opacity=1;
}