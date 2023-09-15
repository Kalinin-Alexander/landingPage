let skill = {
    JavaScript: 4,  
    HTML: 1,
    CSS: 2,  
    PY: 5,   
};

let keys = Object.keys(skill);
document.getElementById('cssName').innerText = keys[2];
document.getElementById('jsName').innerText = keys[0];
document.getElementById('htmlName').innerText = keys[1];
document.getElementById('PYName').innerText = keys[3];

let _1 = '<img class="star" src="images/star.jpg"> <img class="star" src="images/star1.jpg"> <img class="star" src="images/star1.jpg"> <img class="star" src="images/star1.jpg"> <img class="star" src="images/star1.jpg"> ';
let _2 = '<img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star1.jpg"> <img class="star" src="images/star1.jpg"> <img class="star" src="images/star1.jpg">';
let _3 = '<img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star1.jpg"> <img class="star" src="images/star1.jpg">';
let _4 = '<img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star1.jpg">';
let _5 = '<img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg"> <img class="star" src="images/star.jpg">';

let a = skill.PY;

function genStar(lvl,id){
    switch (lvl) {
        case 1:
            document.querySelector(id).innerHTML = _1 ;
            break;
        case 2:
            document.querySelector(id).innerHTML = _2 ;
            break;
        case 3:
            document.querySelector(id).innerHTML = _3 ;
            break;
        case 4:
            document.querySelector(id).innerHTML = _4 ;
            break;
        case 5:
            document.querySelector(id).innerHTML = _5;
            break;
    }
}

genStar(skill.CSS,"#cssLevel")
genStar(skill.PY,"#PYLevel")
genStar(skill.JavaScript,"#jsLevel")
genStar(skill.HTML,"#htmlLevel")


let modal = document.getElementById("modal");
let btn = document.getElementById("contact_btn");
let span = document.getElementsByClassName("modal_close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// онсабмит от формы+ кнопки
//document.querySelector('.toSend_btn').onclick =  

function snd(event){
  event.preventDefault();

  let user = {     
    name: document.querySelector('#toSend_user').value,  
    massage: document.querySelector('#toSend_problem').value,
    post: document.querySelector('#toSend_select').value,
    email: document.querySelector('#input').value,        
  }; 

  console.log(user);
  modal.style.display = "none";

}


//проверка и вывод в случае с полем имени
toSend_user.onblur = function() {
  if (!document.getElementById("toSend_user").value ) { 
    toSend_user.classList.add('__notxt');
    txterr.innerHTML = 'Пожалуйста, заполните все поля формы!'
  }
};

toSend_user.onfocus = function() {
  if (this.classList.contains('__notxt')) {
    this.classList.remove('__notxt');
    txterr.innerHTML = "";
  }
};

//проверка и вывод в случае с полем селектора
toSend_select.onblur = function() {
  if (!document.getElementById("toSend_toSend_select").value) { 
    toSend_select.classList.add('__notxt');
    txterr.innerHTML = 'Пожалуйста, заполните все поля формы!'
  }
};

toSend_select.onfocus = function() {
  if (this.classList.contains('__notxt')) {
    this.classList.remove('__notxt');
    txterr.innerHTML = "";
  }
};

//проверка и вывод в случае с полем текста
toSend_problem.onblur = function() {
  if (!document.getElementById("toSend_problem").value ) { 
    toSend_problem.classList.add('__notxt');
    txterr.innerHTML = 'Пожалуйста, заполните все поля формы!'
  }
};

toSend_problem.onfocus = function() {
  if (this.classList.contains('__notxt')) {
    this.classList.remove('__notxt');
    txterr.innerHTML = "";
  }
};

//проверка и вывод в случае с почтой
input.onblur = function() {
  if (!input.value.includes('@')) { 
    input.classList.add('__invalid');
    error.innerHTML = 'Пожалуйста, введите правильный email.'
  }
};

input.onfocus = function() {
  if (this.classList.contains('__invalid')) {
    this.classList.remove('__invalid');
    error.innerHTML = "";
  }
};
