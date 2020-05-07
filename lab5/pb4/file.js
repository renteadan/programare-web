
function comparator (value) {
  return function (a, b) {
    const valA = $(a).data(value);
    const valB = $(b).data(value);
    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
  }
}

$(document).ready(() => {
  $('.customItem').each((i, element) => {
    const el = $(element);
    const header = el.siblings('.customHeader');
    const data = el.data();
    console.log(data);
    for(const key in data) {
      const cell = $('<td>');
      cell.text(data[key]);
      el.append(cell);
    }
  });
  $('th').attr('asc', true);
  $('th').click(function() {
    const table = $(this).parents('table').eq(0);
    let rows = table.find('.customItem').toArray().sort(comparator($(this).attr('value')));
    this.asc = !this.asc;
    if (!this.asc)
      rows = rows.reverse();
    table.append(rows);
  });
});