
var slider_img=document.getElementById("slider")
var images=["i1.avif","i2.avif","i3.avif","i4.avif","i5.avif","i6.avif"]
var i=0
 function rightclick(){
   if(i<=0)i=images.length;
   i--;
      return setimg();   
 }
 function leftclick(){
  if(i>=images.length-1)i=-1;
  i++;
     return setimg();   
}
function setimg()
{
  return slider_img.setAttribute('src','images/'+images[i])
}
