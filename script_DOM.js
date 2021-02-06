//Функції доступу до елементів
    //через id
let gid = (id) => document.getElementById(id);
    // через ім"я тегу
let gtn = (tagname) => document.getElementsByTagName(tagname);
    // через ім"я класу
let gcn = (className) => document.getElementsByClassName(className);
    // ф-я виведення в алерт заданих тегів
let elements = document.querySelectorAll('p');
for (let elem of elements) alert(elem.innerHTML);

    // ф-я, що зафарбовує білим весь заданий блок
function white() {
let activBut = gid('Play');
activBut.style.color = 'white';  
}
    //ф-я трансформації сторінки після виграшу
function rewarding() {
    //назва практичної роботи замінюється назвої гри
  let qsSel = document.querySelector('h1');
  let h = document.createElement('h1');
    h.innerHTML = ('Безпрограшна лотерея');
    qsSel.replaceWith(h);
      //тег із завданням стає білим
  let h2Sel = document.querySelector('h2');
    h2Sel.classList.add('whitening');
      //приховується блок, в якому гравець вводим номери
  let inputHide = gid('Ticket');
  inputHide.classList.toggle('hide');
  let showTicket = gid('hiden');
  showTicket.classList.toggle ('show');
      //анімація виграшу
  let prize = gid('win');
  prize.classList.add('win');
  prize.style.color = 'red';
  prize.style.fontSize = 'xx-large';
}

function show() {
    let showText = gid('nextPage');
    showText.classList.add('show');
    let showText1 = gid('nextPage1');
    showText1.classList.add('show');

}
