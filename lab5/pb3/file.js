'use strict';
let arr = [];
let tdarr = [];

function init() {
  const points = $('#points');
  points.val(0);
  points.text(`Number of moves: ${points.val()}`);
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
  const table = $('#tableboard');
  table.empty();

  arr.forEach((row, indexrow) => {
    const trow = $('<tr></tr>');
    table.append(trow);
    tdarr[indexrow] = [];
    row.forEach((elem, columnindex) => {
      const cell = $('<td></td>');
      cell.addClass('card');
      cell.val(elem);
      cell.attr('ismatch', false);
      cell.text('');
      cell.attr('pos', [indexrow, columnindex]);
      cell.click(turnCard);
      trow.append(cell);
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
  const points = $('#points');
  points.val(points.val() - 1 + 2);
  points.text(`Number of moves: ${points.val()}`);
}

let last;

function turnCard() {
  const el = $(this);
  if(el.attr('ismatch') === true || el.text())
    return;
  el.text(el.val());
  if(last) {
    const lastTd = tdarr[last[0]][last[1]];
    const lastEl = $(lastTd);
    if(lastEl.val() === el.val()) {
      el.attr('ismatch', true);
      lastEl.attr('ismatch', true);
    } else {
      setTimeout(() => {
        el.text('');
        lastEl.text('');
      }, 2000);
    }
    last = null;
    incrementPoints();
  } else {
    last = el.attr('pos').split(',').map(str => +str);
  }
}

init();