let skill = {
    JavaScript: 3,  
    HTML: 4,
    CSS: 2,     
};

let keys = Object.keys(skill);
document.getElementById('cssName').innerText = keys[2];
document.getElementById('jsName').innerText = keys[0];
document.getElementById('htmlName').innerText = keys[1];

/*выведет уровень навыка цифрой - РАБОТАЕТ*/
document.getElementById('cssLevel').innerText = skill.CSS;
document.getElementById('jsLevel').innerText = skill.JavaScript;
document.getElementById('htmlLevel').innerText = skill.HTML;



/* выведет  * и 0, потом надо заменить их  на '&#9733;' - заполненные и '&#9734;' - пустые звёзды
пока не работает вставка звёзд
//nam - имя из списка скил, id - айди уровня

function star(nam,id){
    let val = skill[nam];
    let sfilled = '*';
    for (var i = 0; i < val; i++) {
    sfilled += "*"; };
    let nofilled = '';
    for (var k = 0; k < 5-val; k++) {
    nofilled += "0"; };
    document.getElementById(id).innerText = sfilled + nofilled;
}

star(keys[0],jsLevel);
star(keys[1],htmlLevel);
star(keys[2],cssLevel);
*/
