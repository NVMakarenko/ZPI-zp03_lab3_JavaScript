
let mainButton = document.querySelector('button');
  
mainButton.onclick = function () {  
//Блок розрахунку номерів, вказаних гравцем
let arrClient = [];
   for (let i = 0; i < 5; i++) {
   arrClient[i] = gtn('input')[i].value;
}
  
arrClient.forEach( () => document.querySelector('#out2').innerHTML = arrClient);

let clientEvery = arrClient.every(elem => elem <= 10);

let clientSome = arrClient.some(elem => elem < 0);

let clientFilter = arrClient.filter(elem => elem >= 5);

let clientMap = clientFilter.map(elem => elem = elem * 10);

let clientSum = clientMap.reduce((sum,cur) => sum + cur, 0);

//Блок розрахунку виграшних номерів
  let arr = [];
  let min = 0;
  let max = 9; 
  for (let i = 0; i < 5; i++){
  arr.push(randomInteger(min, max));
}
  
  let arrFilter = arr.filter(elem => elem >= 5);

  document.querySelector('#out').innerHTML = arr;

  let arrMap = arrFilter.map((elem, clientFilter) => elem = elem * 10);

  let arrSum = arrMap.reduce((sum,cur) => sum + cur , 0);
  document.querySelector('#win').innerHTML = Math.abs(arrSum - clientSum);
  return arr;
}
mainButton.addEventListener('click', white);
mainButton.addEventListener('click', rewarding);
mainButton.addEventListener('click', show);

function randomInteger(min, max) {
  // випадкове число від min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}