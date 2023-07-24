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

/*выведет уровень навыка цифрой - РАБОТАЕТ*/
document.getElementById('cssLevel').innerText = skill.CSS;
document.getElementById('jsLevel').innerText = skill.JavaScript;
document.getElementById('htmlLevel').innerText = skill.HTML;
document.getElementById('PYLevel').innerText = skill.PY;
