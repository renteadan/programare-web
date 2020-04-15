'use strict';

function init() {
  const points = document.getElementById('points');
  points.value = 0;
  points.textContent = `Number of moves: ${points.value}`;
  const cards = document.getElementsByClassName('card');
  const numb = cards.length / 2;
  let arr = [];
  for(let i=1;i<=numb;i++) {
    arr.push(i);
    arr.push(i);
  }
  arr = shuffle(arr);
  let index = 0;
  for(const item of cards) {
    item.value = arr[index];
    index++;
    item.onclick = turn;
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function incrementPoints() {
  const points = document.getElementById('points');
  points.value+=1;
  points.textContent = `Number of moves: ${points.value}`;
}

let current;
let last = [];
function turn(e) {
  console.log(this.isMatch);
  if(this.isMatch)
    return;
  this.textContent = this.value;
  if(!current) {
    last.forEach(item => item.textContent = '');
    last = []
    current = this;
  } else {
    if(current.value === this.value) {
      current.isMatch = true;
      this.isMatch = true;
    } else {
      last.push(this, current);
    }
    current = null;
    incrementPoints();
  }
}

init();