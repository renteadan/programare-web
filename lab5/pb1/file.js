

function move() {
  const list1 = $('#list1');
  const list2 = $('#list2');
  if(list1.children().is(this)) {
    return list2.append(this);
  }
  list1.append(this);
}

// function init() {
//   const items = document.getElementsByTagName('option');
//   for(const item of items) {
//     item.ondblclick = move;
//   }

//   const items2 = document.getElementsByTagName('select');
//   for(const item of items2) {
//     item.size = item.childElementCount;
//   }
// }

// init();

$(document).ready(() => {
  $('option').dblclick(move);
  $('#list1').attr('size', $('#list1').children().length);
  $('#list2').attr('size', $('#list2').children().length);
})