const btn1 = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", function() {
 
  const imagePaths = [
    "Images/1images.jpeg",
    "Images/2images.jpeg",
    "Images/3images.jpeg",
    "Images/4images.jpeg",
    "Images/5images.jpeg",
    "Images/6images.jpeg",
    "Images/7images.jpeg",
    "Images/8images.jpeg",
    "Images/9images.jpeg",
    "Images/10images.jpeg"
  ];

 imagePaths.forEach(function(path) {
    const img = document.createElement("img");
    img.src = path;
    document.body.appendChild(img);
  });
});

btn2.addEventListener('click', function() {

 const images = document.querySelectorAll('img');

 images.forEach(function(img) {
    img.style.boxShadow = '5px 5px 5px #888888';
    img.style.borderRadius = '5px';
  });
});
