const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    console.log("DONE")
    menu.classList.toggle("change");
})

