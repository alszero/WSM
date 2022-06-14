//toggle show hidden menu
function toggleMenu(toggleId, naveListId){
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(naveListId);

    function clickHandler(){
        navList.classList.toggle('show-menu');
    }

    if(toggle && navList){
        toggle.addEventListener('click',clickHandler);
    }
}
toggleMenu('nav-toggle', 'nav-list');
// function say(){
//     console.log('hello world');
// } 
// const say = function(){
//     console.log('hello world2');
// }
const say = () => console.log('hello world3');
say();