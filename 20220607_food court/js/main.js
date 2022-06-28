//toggle show hidden menu
const toggleMenu = (toggleId, navListId) => {
    const toggle = document.getElementById(toggleId);
    const navList = document.getElementById(navListId);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if(toggle && navList){
        //add : 추가, remove : 제거, toggle : 추가/제거
        toggle.addEventListener('click', () =>{
            //toggle menu
            navList.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x-circle
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bx-x-circle");
        });
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

const addNow = (homeCardId) => {
    // html -> js
    const homeCard = document.getElementById(homeCardId);
    
    // 시간 -> index번째 식사가 선택되어야하는지 결정
    // 조식 끝 : 8시
    // 중식 끝 : 1시
    // 석식 끝 : 5시50분
    const now = new Date();
    let hour = 16; // 시 now.getHours()
    let minute = 20; // 분 now.getMinutes()
    console.log(hour, minute);
    index = 0;

    minute = hour * 60 + minute;

    console.log(index);
    
    if(minute >= 17* 60 + 50){ //1070
        index = 0;
    }else if( 13*60 <= minute){
        index = 2;
    }else if(8*60 <= minute){
        index = 1;
    } else{
        index = 0;
    }

    // homeCard에서 index번째 card에 now 클래스 추가
    let card = homeCard.getElementsByClassName('card')[index];
    card.classList.add('now');
}
addNow('home-card');