//-------- кнопки Переключение языков-------------------------------------

let swBt = document.querySelector('.video__switch');
let swBox2 = document.querySelector('.video__box2');
let swBox = document.querySelector('.video__box');
let swBt2 = document.querySelector('.video__switch2');
let abBx = document.querySelector('.about__box');
let abBx2 = document.querySelector('.about__box2');
let arLs2 = document.querySelector('.articles2');
let arLs =  document.querySelector('.articles');
let newLs3 = document.querySelector('.news__article');
let newLs4 = document.querySelector('.news__article4');


console.log(arLs2);


function Switching() {
    swBt.onclick = () => {
        swBox2.style.display = 'block';
        arLs.style.display = 'none';
        arLs2.style.display = 'block';
        abBx2.style.display = 'block';
        abBx.style.display = 'none';
        abBx2.style.zIndex=4;
        abBx.style.zIndex=0;
        swBox.style.display = 'none';
        swBt.style.opacity = 0;
        swBt2.style.opacity = 1;
        newLs3.style.display='none';
        newLs4.style.display='block';
        swBt.style.zIndex = 0;
        swBt2.style.zIndex = 4;
    }

    swBt2.onclick = () => {
        swBox2.style.display = 'none';
        arLs.style.display = 'block';
        arLs2.style.display = 'none';
        swBox.style.display = 'block';
        abBx2.style.display = 'none';
        abBx.style.display = 'block';
        abBx2.style.zIndex = 0;
        abBx.style.zIndex = 4;
        swBt.style.opacity = 1;
        swBt2.style.opacity = 0;
        newLs3.style.display = 'block';
        newLs4.style.display = 'none';
        swBt.style.zIndex = 4;
        swBt2.style.zIndex = 0;
    }
}
Switching();
//----------------------------------------------конец--


//---------------кнопка вывода обомне---------------
function autobiography() {
    let abBt = document.querySelector('.v-bt2');
    let abBt1 = document.querySelector('.v-bt1');

    let man = document.querySelector('.main');

    abBt.onclick = function () {
        if (man.style.display == "none") {
            man.style.display = "block";
        } else {
            man.style.display = "none";
        }
      
        console.log(abBt);
    }

    abBt1.onclick = function () {
        if (man.style.display == "none") {
            man.style.display = "block";
        } else {
            man.style.display = "none";
        }

        console.log(abBt1);
    }
}

autobiography();