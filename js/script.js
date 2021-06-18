//-------- кнопки Переключение языков-------------------------------------

let swBt = document.querySelector('.video__switch');
let swBox2 = document.querySelector('.video__box2');
let swBox = document.querySelector('.video__box');
let swBt2 = document.querySelector('.video__switch2');
let abBx = document.querySelector('.about__box');
let abBx2 = document.querySelector('.about__box2');
let arLs2 = document.querySelector('.article__list2');
let arLs = document.querySelector('.article__list');




function Switching() {
    swBt.onclick = () => {
        swBox2.style.opacity = 1;
        arLs.style.opacity = 0;
        arLs2.style.opacity = 1;
        abBx2.style.opacity = 1;
        abBx.style.opacity = 0;
        swBox.style.opacity = 0;
        swBt.style.opacity = 2;
        swBt2.style.opacity = 1;
        swBt.style.zIndex = 0;
        swBt2.style.zIndex = 4;
    }

    swBt2.onclick = () => {
        swBox2.style.opacity = 0;
        arLs.style.opacity = 1;
        arLs2.style.opacity = 0;
        swBox.style.opacity = 1;
        abBx2.style.opacity = 0;
        abBx.style.opacity = 1;
        swBt.style.opacity = 1;
        swBt2.style.opacity = 2;
        swBt.style.zIndex = 4;
        swBt2.style.zIndex = 0;
    }
}
Switching();
//----------------------------------------------конец--


//---------------кнопка вывода обомне---------------
function autobiography() {
    let abBt = document.querySelector('.v-bt2');
    let man = document.querySelector('.main');
    
    abBt.onclick = function () {
        if (man.style.display == "none") {
            man.style.display = "block";
        } else {
            man.style.display = "none";
        }
      
        console.log(abBt);
    }
}
autobiography();