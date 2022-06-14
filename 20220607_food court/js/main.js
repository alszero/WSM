//toggle show hidden menu
const toggleMenu = (toggleId, naveListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(naveListId);

    if(toggle && navList){
        //add: 추가, remove 제거, toggle: 추가/제거
        
        toggle.addEventListener('click', () => navList.classList.toggle('show-menu'));
    }
}
toggleMenu('nav-toggle', 'nav-list');
// function say(){
//     console.log('hello world');
// } 
// const say = function(){
//     console.log('hello world2');
// }
// const say = () => console.log('hello world3');
// say();