console.log('hello world');

const cateogaries = document.querySelector('.cateogaries');
const dropdowns = document.querySelectorAll('.dropdown');
const menubtn = document.querySelector('.menubtn');
dropdowns.forEach((dropdown)=>{
    dropdown.addEventListener('click',(e)=>{
        const dropparent = e.currentTarget.parentElement;
        dropparent.classList.toggle('active-drop')
    })
})
menubtn.addEventListener('click',function(){
cateogaries.classList.toggle('active-cateogary');
menubtn.classList.toggle('active-menu');
})
const userDrop = document.querySelector('.userDrop');
const logutdropdown = document.querySelector('.logout-dropdown');
userDrop.addEventListener('click',function(){
    logutdropdown.classList.toggle('active-logout-dropdown')
})