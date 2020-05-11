var images=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"];
var i=1;
var j=images.length;
function scrollLeft1()
{
  i=i-1;
  if(i<1)
    i=1;

  document.getElementById("galleryImages").src="images/" + images[i-1];
};
function scrollRight()
{
  i++;
  if(i>j)
    i=j;

  document.getElementById("galleryImages").src="images/" + images[i-1];
};
