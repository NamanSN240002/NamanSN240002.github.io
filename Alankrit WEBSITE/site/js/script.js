// Fucntion for collapsing menu when it goes out of focus
$(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  });
// Function for gallery
  $(function(){
    var expandImg = document.getElementById("expandedImg");
    expandedImg.src = "https://image.shutterstock.com/image-photo/vintage-flowers-peonies-tulips-lily-600w-1383694610.jpg";
    var imgText = document.getElementById("imgtext");
    imgText.innerHTML = "img1";
    expandImg.parentElement.style.display = "block";
  })
  function myFunction(imgs){
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }