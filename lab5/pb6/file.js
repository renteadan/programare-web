'use strict';

let arr = [];
let pos = [];
const size = 5;

function moveItems(e) {
  if(e.code === 'ArrowLeft') {
    const newH = Math.max(0, pos[1] -1);
    [arr[pos[0]][pos[1]], arr[pos[0]][newH]] = [arr[pos[0]][newH] ,arr[pos[0]][pos[1]]];
  } else if (e.code === 'ArrowRight') {
    const newH = Math.min(size-1, pos[1] +1);
    [arr[pos[0]][pos[1]], arr[pos[0]][newH]] = [arr[pos[0]][newH] ,arr[pos[0]][pos[1]]];
  } else if(e.code === 'ArrowUp') {
    const newV = Math.max(0, pos[0] - 1);
    [arr[pos[0]][pos[1]], arr[newV][pos[1]]] = [arr[newV][pos[1]] ,arr[pos[0]][pos[1]]];
  } else if(e.code === 'ArrowDown') {
    const newV = Math.min(size-1, pos[0] + 1);
    [arr[pos[0]][pos[1]], arr[newV][pos[1]]] = [arr[newV][pos[1]] ,arr[pos[0]][pos[1]]];
  }
  renderMatrix();
}

function renderMatrix() {
  const table = $('#playboard');
  table.empty();
  arr.forEach((row, indexrow) => {
    const trow = $('<tr>');
    table.append(trow);
    row.forEach((elem, columnindex) => {
      const cell = $('<td>');
      if(elem !==0)
        cell.text(elem);
      else
        pos = [indexrow, columnindex];
      cell.addClass('cell');
      trow.append(cell);
    })
  });
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

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

$(document).ready(() => {
  $(document).keydown(moveItems);
  for(let i=0;i<size * size;i++) {
    arr.push(i);
  }
  arr = shuffle(arr);
  arr = listToMatrix(arr, size);
  renderMatrix();
})