// 'use strict';

// function init() {
//   const points = document.getElementById('points');
//   points.value = 0;
//   points.textContent = `Number of moves: ${points.value}`;
//   const cards = document.getElementsByClassName('card');
//   const numb = cards.length / 2;
//   let arr = [];
//   for(let i=1;i<=numb;i++) {
//     arr.push(i);
//     arr.push(i);
//   }
//   arr = shuffle(arr);
//   let index = 0;
//   for(const item of cards) {
//     item.value = arr[index];
//     index++;
//     item.onclick = turn;
//   }
// }

// function shuffle(a) {
//   for (let i = a.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }

// function incrementPoints() {
//   const points = document.getElementById('points');
//   points.value+=1;
//   points.textContent = `Number of moves: ${points.value}`;
// }

// let current;
// let last = [];
// function turn(e) {
//   console.log(this.isMatch);
//   if(this.isMatch)
//     return;
//   this.textContent = this.value;
//   if(!current) {
//     last.forEach(item => item.textContent = '');
//     last = []
//     current = this;
//   } else {
//     if(current.value === this.value) {
//       current.isMatch = true;
//       this.isMatch = true;
//     } else {
//       last.push(this, current);
//     }
//     current = null;
//     incrementPoints();
//   }
// }

// init();

'use strict';
let arr = [];
let tdarr = [];

function init() {
  const points = document.getElementById('points');
  points.value = 0;
  points.textContent = `Number of moves: ${points.value}`;
  for(let i=1;i<=6;i++) {
    arr.push(i);
    arr.push(i);
  }
  arr = shuffle(arr);
  arr = listToMatrix(arr, 4);
  renderTable();
}

function listToMatrix(list, elementsPerSubArray) {
  var matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
          k++;
          matrix[k] = [];
      }

      matrix[k].push(list[i]);
  }

  return matrix;
}

function renderTable() {
  const table = document.getElementById('tableboard');
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }

  arr.forEach((row, indexrow) => {
    const trow = document.createElement('tr');
    table.appendChild(trow);
    tdarr[indexrow] = [];
    row.forEach((elem, columnindex) => {
      const cell = document.createElement('td');
      cell.className = 'card';
      cell.value = elem;
      cell.isMatch = false;
      cell.textContent = '';
      cell.pos = [indexrow, columnindex];
      cell.onclick = turn;
      trow.appendChild(cell);
      tdarr[indexrow].push(cell);
    })
  });
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

let last;

function turn(e) {
  if(this.isMatch)
    return;
  this.textContent = this.value;
  if(last) {
    const lastTd = tdarr[last[0]][last[1]];
    if(lastTd.value === this.value) {
      this.isMatch = true;
      lastTd.isMatch = true;
    } else {
      setTimeout(() => {
        this.textContent = '';
        lastTd.textContent = '';
      }, 2000);
    }
    last = null;
    incrementPoints();
  } else {
    last = this.pos;
  }
}

init();