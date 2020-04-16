

function move() {
  const list1 = document.getElementById('list1');
  const list2 = document.getElementById('list2');
  var moveTo = this.parentElement.id === "list1" ? list2 : list1;
  moveTo.appendChild(this);
}

function init() {
  const items = document.getElementsByTagName('option');
  for(const item of items) {
    item.ondblclick = move;
  }

  const items2 = document.getElementsByTagName('select');
  for(const item of items2) {
    item.size = item.childElementCount;
  }
}

init();