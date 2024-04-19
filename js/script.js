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
  
function validateForm(){
  //mengambil data dari inputan
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var option = document.getElementById('option').value;

  // Membuat ekspresi reguler untuk memeriksa hanya huruf abjad dan spasi
  var lettersWithSpaceRegex = /^[a-zA-Z\s]+$/;

  //memeriksa inputan yang kosong
  if(name === ""){
    alert("please enter your name");
    return false;
  }else if(!lettersWithSpaceRegex.test(name)){
    alert("Name should only contain alphabetical characters and spaces");
    return false;
  }

  var emailRegex =  /^\S+@\S+\.\S+$/;
  if(email=== ""){
    alert("Please enter your email");
    return false;
  }else if(!emailRegex.test(email)){
    alert("Please enter a valid email");
    return false;
  }

  if(option === ""){
    alert("Please select your interest");
    return false;
  }

  //Jika validasi berhasil
  alert("Your form has been successfully submitted");
  return true;
}