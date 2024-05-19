let men = document.querySelector('.men');
let navlinks = document.querySelector('#link');



men.addEventListener('mouseenter' ,()=>{
    navlinks.classList.toggle('linksvisable')
    men.classList.toggle('menunderline')
} )