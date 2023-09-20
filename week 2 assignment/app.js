let button = document.getElementById('button');
let bgImage = ["media/1.jpg", "media/2.jpg", "media/3.jpg","media/4.jpg","media/5.jpg"];
let choice = 0;

button.addEventListener("click", function () {
    console.log("image change");
    document.body.style.backgroundImage = `url(${bgImage[choice]})`;
    choice = (choice + 1) % bgImage.length;
});



let untitled = document.querySelector('.project_untitled');

window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        untitled.classList.add('fadeIn');
    } else {
        untitled.classList.remove('fadeIn');
    }
});