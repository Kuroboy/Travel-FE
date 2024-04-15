var images = document.querySelectorAll('.image img');
var index = 0;

function showImage(){
    images.forEach(image =>{
        image.style.display = 'none';
    });
    index = (index +1) % images.length;
    images[index].style.display = 'block';
}
showImage();
setInterval (showImage, 2500);

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  