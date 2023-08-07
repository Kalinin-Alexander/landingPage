let skill = {
    JavaScript: 3,  
    HTML: 4,
    CSS: 2,  
    PY: 3,   
};

let keys = Object.keys(skill);
document.getElementById('cssName').innerText = keys[2];
document.getElementById('jsName').innerText = keys[0];
document.getElementById('htmlName').innerText = keys[1];
document.getElementById('PYName').innerText = keys[3];

let _1 = '<img class="star" src="star.jpg"> <img class="star" src="star1.jpg"> <img class="star" src="star1.jpg"> <img class="star" src="star1.jpg"> <img class="star" src="star1.jpg"> ';
let _2 = '<img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star1.jpg"> <img class="star" src="star1.jpg"> <img class="star" src="star1.jpg">';
let _3 = '<img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star1.jpg"> <img class="star" src="star1.jpg">';
let _4 = '<img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star1.jpg">';
let _5 = '<img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star.jpg"> <img class="star" src="star.jpg">';

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
