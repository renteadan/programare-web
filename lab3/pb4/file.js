

function initCode() {
  const headers = document.getElementsByTagName('th');
  for(const header of headers) {
    header.onclick = sortTable;
  }
  const rows = document.getElementsByClassName('customItem');
  for(const row of rows) {
    const nameCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const qntCell = document.createElement('td');
    const item = {};
    item.name = row.getAttribute('itemname');
    nameCell.textContent = item.name;
    item.price = Number.parseFloat(row.getAttribute('itemprice'));
    priceCell.textContent = item.price;
    item.qnt = Number.parseInt(row.getAttribute('itemqnt'));
    qntCell.textContent = item.qnt;
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(qntCell);
    row.value = item;
  }
}

function sortTable(e) {
  const table = this.closest('table');
  const rows = table.getElementsByClassName('customItem');
  const header = this.parentNode;
  let arr = [];
  for(const row of rows) {
    arr.push(row);
  }
  arr = arr.sort((row1, row2) => {
    const val = this.getAttribute('value');

    if(typeof row1.value[val] === 'string') {
      if(row1.value[val] < row2.value[val])
        return -1;
      return 1;
    }
    return row1.value[val] - row2.value[val];
  });
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }

  console.log(arr);
  table.appendChild(header);
  arr.forEach(row => table.appendChild(row));

}

initCode();