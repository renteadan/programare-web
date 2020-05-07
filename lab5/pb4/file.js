
function comparator (value) {
  return function (a, b) {
    const valA = $(a).attr(value);
    const valB = $(b).attr(value);
    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
  }
}

$(document).ready(() => {
  $('.customItem').each((i, element) => {
    const el = $(element);
    const row = el.parent('tr');
    const nameCell = $('<td>');
    const priceCell = $('<td>');
    const qntCell = $('<td>');
    nameCell.text(el.attr('name'));
    priceCell.text(Number.parseFloat(el.attr('price')));
    qntCell.text(Number.parseInt(el.attr('qnt')));
    el.append([nameCell, priceCell, qntCell]);
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