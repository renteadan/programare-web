'use strict';
let arr = [];
let imgarr = [];

function init() {
  const points = $('#points');
  points.val(0);
  points.text(`Number of moves: ${points.val()}`);
  for(let i=1;i<=6;i++) {
    imgarr.push({
      image: `images/fruit${i}.jpg`,
      val: i
    });
    imgarr.push({
      image: `images/fruit${i}.jpg`,
      val: i
    });
  }
  imgarr = shuffle(imgarr);
  renderTable();
}

function renderTable() {
  const table = $('#tableboard');
  table.empty();

  let index = 0;
  for(let i=0;i<3;i++) {
    const trow = $('<tr></tr>');
    table.append(trow);
    arr[i] = [];
    for(let j=0;j<4;j++) {
      const item = $('<td>');
      const img = $('<img>');
      img.attr('src', imgarr[index].image);
      img.addClass('card');
      img.hide();

      item.attr('frontImg', img);
      item.attr('isMatch', false)
      item.addClass('card');
      item.val(imgarr[index].val);
      item.click(turn);
      item.attr('pos', [i, j]);
      item.append(img);

      arr[i].push(item);
      trow.append(item);
      index++;
    }
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
  const points = $('#points');
  points.val(points.val() - 1 + 2);
  points.text(`Number of moves: ${points.val()}`);
}

let last;

function turn(e) {
  const el = $(this);
  if(el.attr('ismatch') === true || !el.children().is(':hidden'))
    return;
  el.children().show();
  if(last) {
    const lastTd = arr[last[0]][last[1]];
    const lastEl = $(lastTd);
    if(lastEl.val() === el.val()) {
      el.attr('ismatch', true);
      lastEl.attr('ismatch', true);
    } else {
      setTimeout(() => {
        el.children().hide();
        lastEl.children().hide();
      }, 2000);
    }
    last = null;
    incrementPoints();
  } else {
    last = el.attr('pos').split(',').map(str => +str);
  }
}

init();