var imageCount = 0;
var currentImage = 0;
var images = new Array();
 
images[0] = 'document.getElementById("intro").src="img/6.gif"';
images[1] = 'document.getElementById("intro").src="img/2.gif"';
images[2] = 'document.getElementById("intro").src="img/3.gif"';
images[3] = 'document.getElementById("intro").src="img/4.gif"';
images[4] = 'document.getElementById("intro").src="img/5.gif"';
 
var preLoadImages = new Array();
for (var i = 0; i < images.length; i++)
{
   if (images[i] == "")
      break;
 
   preLoadImages[i] = new Image();
   preLoadImages[i].src = images[i];
   imageCount++;
}
 
function startSlideShow()
{
   if (document.body && imageCount > 0)
   {
      document.body.style.backgroundImage = "url("+images[currentImage]+")";    
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundRepeat = "repeat";
      document.body.style.backgroundPosition = "left top";
 
      currentImage = currentImage + 1;
      if (currentImage > (imageCount-1))
      { 
         currentImage = 0;
      }
      setTimeout('startSlideShow()', 3000);
   }
}
startSlideShow();