'use strict';
let arr = [];
let imgarr = [];

function init() {
  const points = document.getElementById('points');
  points.value = 0;
  points.textContent = `Number of moves: ${points.value}`;
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
  const table = document.getElementById('tableboard');
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  let index = 0;
  for(let i=0;i<3;i++) {
    const trow = document.createElement('tr');
    table.appendChild(trow);
    arr[i] = [];
    for(let j=0;j<4;j++) {
      const item = document.createElement('td');
      const img = document.createElement('img');
      img.src = imgarr[index].image;
      img.className = 'card';
      img.hidden = true;

      item.frontImg = img;
      item.isMatch = false;
      item.className = 'card';
      item.value = imgarr[index].val;
      item.onclick = turn;
      item.pos = [i, j];
      item.appendChild(img);

      arr[i].push(item);
      trow.appendChild(item);
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
  const points = document.getElementById('points');
  points.value+=1;
  points.textContent = `Number of moves: ${points.value}`;
}

let last;

function turn(e) {
  if(this.isMatch || this.firstChild.hidden === false)
    return;
  this.firstChild.hidden = false;
  if(last) {
    const lastTd = arr[last[0]][last[1]];
    if(lastTd.value === this.value) {
      this.isMatch = true;
      lastTd.isMatch = true;
    } else {
      setTimeout(() => {
        this.firstChild.hidden = true;
        lastTd.firstChild.hidden = true;
      }, 2000);
    }
    last = null;
    incrementPoints();
  } else {
    last = this.pos;
  }
}

init();