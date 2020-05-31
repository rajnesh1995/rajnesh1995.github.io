window.onload = function()
{
  winWidth=window.innerWidth;
  //alert(winWidth);
  if(winWidth < 700)
  {

    //For navBar


/*    var logoBox=document.getElementById("logoBox");
    var innerHeader=document.getElementById("innerHeader");
    var navBox=document.getElementById("navigationBox");
    innerHeader.style.height="130px"
    logoBox.style.width="70%";
    logoBox.style.paddingLeft="15%";
    logoBox.style.paddingRight="15%";
    navBox.style.width="0%";
    navBox.style.height="0%";
    navBox.style.overflow="hidden";
*/
    var navMenu=document.getElementsByClassName("navMenu");
    var i=0;
    for(;i<navMenu.length;i++)
    {
      navMenu[i].innerHTML="";
      //navMenu[i].style.width="0px";
      //navMenu[i].style.height="0px";
      //navMenu[i].style.marginLeft="0px";
      //navMenu[i].style.borderRadius="0px";
    };
    //document.getElementById("navMenu1").style.marginLeft="0%";
    //document.getElementById("navBox").style.paddingLeft="0%";





    // For index page
/*
    var indexBg1=document.getElementById("indexBg1");
    indexBg1.style.width="100%";

    document.getElementById("whatsappNumber").style.fontSize="18px";
*/
    var x=winWidth-200;
    var indexImg1=document.getElementById("indexImg1");
    indexImg1.style.width=x+"px";


    // About anam
/*    var homePage = document.getElementById('homePage');
    homePage.style.paddingTop="500px";


    var indexRightContent=document.getElementById("indexRightContent");
    indexRightContent.style.left="0px";
    indexRightContent.style.width="100%";
    indexRightContent.style.textAlign="center";
    indexRightContent.style.marginLeft="10%";



    var getInTouch=document.getElementById("getInTouch");
    getInTouch.style.display="block";


    getInTouch.style.width="80%";
    //alert("hello");
    getInTouch.style.marginLeft="10%";
    getInTouch.style.marginRight="10%";

    var whatsappUs=document.getElementById("whatsappUs");
    whatsappUs.style.display="block";
    whatsappUs.style.float="left";
    whatsappUs.style.width="80%";
    whatsappUs.style.marginLeft="10%";
    whatsappUs.style.marginRight="10%";
    //whatsappUs.style.marginBottom="40px";


*/



    // FOr Services Page

 /*   var ourServices=document.getElementById("ourServices");
    ourServices.style.fontSize="45px";
    //ourServices.style.lineHeight="90px";
    var productBox = document.getElementsByClassName("productBox");
    document.getElementById("productInner").style.height="2000px";
    var productImage=document.getElementsByClassName("productImage");
    for(var j=0;j<productBox.length;j++)
    {
      productBox[j].style.display="block";
      productBox[j].style.width="100%";
      productImage[j].style.paddingRight="0%";
    };




    document.getElementById("galleryHeading").style.fontSize="60px";
*/
    // For Pricing Page


/*
    document.getElementById("pricingInfo").style.fontSize="60px";

    var pricingBox=document.getElementById("pricingBox");
    pricingBox.style.width="90%";

    var prodName=document.getElementsByClassName("prodName");
    for(var k=0;k<prodName.length;k++)
    {
      prodName[k].style.fontSize="20px";
    };

*/


    // For contacts Page

/*
    document.getElementById("contactsHeading").style.fontSize="60px";

    var contactsLeft=document.getElementById("contactsLeft");
    contactsLeft.style.width="70%";
    contactsLeft.style.display="block";
    contactsLeft.style.marginLeft="15%";
    document.getElementById("contactsPage").style.height="750px";

    var contactsSocial=document.getElementsByClassName("contactsSocial");
    for(var l=0;l<contactsSocial.length;l++)
    {
      contactsSocial[l].style.marginLeft="10%";
    };



    var contactsRight=document.getElementById("contactsRight");
    contactsRight.style.width="100%";
    contactsRight.style.display="block";
    contactsRight.style.marginRight="0%";

    var contactsBoxLeft=document.getElementById("contactsBoxLeft");
    contactsBoxLeft.style.marginLeft="2%"
    contactsBoxLeft.style.width="42%";

    var contactsBoxRight=document.getElementById("contactsBoxRight");
    //contactsBoxRight.style.marginLeft="0%"
    contactsBoxRight.style.width="42%";


    var contactsSocialImage=document.getElementsByClassName("contactsSocialImage");
    var contactsSocialDesc = document.getElementsByClassName("contactsSocialDesc");
    for(var m=0;m<contactsSocialDesc.length;m++)
    {
      contactsSocialDesc[m].style.marginLeft="3px";
      contactsSocialImage[m].style.marginLeft="3px";
    };
*/

    // For footer note

  /*  var footerLeft=document.getElementById("footerLeft");
    footerLeft.style.lineHeight="20px";

    var footerRight=document.getElementById("footerRight");
    footerRight.style.lineHeight="20px";


*/








  };

};
