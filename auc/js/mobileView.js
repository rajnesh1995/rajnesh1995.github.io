window.onload = function()
{
  winWidth=window.innerWidth;

  if(winWidth < 700)
  {

    //For navBar


    var logoBox=document.getElementById("logoBox");
    var innerHeader=document.getElementById("innerHeader");
    var navBox=document.getElementById("navigationBox");
    innerHeader.style.height="130px"
    logoBox.style.width="70%";
    logoBox.style.paddingLeft="15%";
    logoBox.style.paddingRight="15%";
    navBox.style.width="0%";
    navBox.style.height="0%";
    navBox.style.overflow="hidden";

    var navMenu=document.getElementsByClassName("navMenu");
    var i=0;
    for(;i<navMenu.length;i++)
    {
      navMenu[i].innerHTML="";
      navMenu[i].style.width="0px";
      navMenu[i].style.height="0px";
      navMenu[i].style.marginLeft="0px";

    };




    // For index page

    var indexBg1=document.getElementById("indexBg1");
    indexBg1.style.width="100%";

    document.getElementById("whatsappNumber").style.fontSize="18px";

    var indexImg1=document.getElementById("indexImg1");
    indexImg1.style.width=winWidth-200+"px";


    // About anam
    var homePage = document.getElementById('homePage');
    homePage.style.paddingTop="500px";


    var indexRightContent=document.getElementById("indexRightContent");
    indexRightContent.style.left="0px";
    indexRightContent.style.width="100%";
    indexRightContent.style.textAlign="center";
    indexRightContent.style.marginLeft="10%";






    // FOr Services Page

    var productBox = document.getElementsByClassName("productBox");
    document.getElementById("productInner").style.height="2000px";
    var productImage=document.getElementsByClassName("productImage");
    for(var j=0;j<productBox.length;j++)
    {
      productBox[j].style.display="block";
      productBox[j].style.width="100%";
      productImage[j].style.paddingRight="0%";
    };






    // For Pricing Page

    var pricingBox=document.getElementById("pricingBox");
    pricingBox.style.width="90%";

    var prodName=document.getElementsByClassName("prodName");
    for(var k=0;k<prodName.length;k++)
    {
      prodName[k].style.fontSize="30px";
    };




    // For contacts Page

    var contactsLeft=document.getElementById("contactsLeft");
    contactsLeft.style.width="40%";
    contactsLeft.style.marginLeft="0%";

    var contactsSocial=document.getElementsByClassName("contactsSocial");
    for(var l=0;l<contactsSocial.length;l++)
    {
      contactsSocial[l].style.marginLeft="10%";
    };



    var contactsRight=document.getElementById("contactsRight");
    contactsRight.style.width="50%";
    contactsRight.style.marginRight="0%";

    var contactsBoxLeft=document.getElementById("contactsBoxLeft");
    contactsBoxLeft.style.marginLeft="0%"
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


    var footerLeft=document.getElementById("footerLeft");
    footerLeft.style.lineHeight="35px";




    // For footer note






  };

};
