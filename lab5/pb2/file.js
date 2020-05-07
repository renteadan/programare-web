

function submitData() {
  $('input').removeClass('wrong');
  const nameBox = $('#name');
  const dateBox = $('#date');
  const emailBox = $('#email');
  const ageBox = $('#age');
  let errs = '';
  if(!nameBox.val()) {
    errs+='Nume invalid.'
    nameBox.addClass('wrong');
  }

  if(!emailBox.val()) {
    errs+='Email invalid.'
    emailBox.addClass('wrong');
  }

  if(!Number.parseInt(ageBox.val())) {
    errs+='Varsta invalida.'
    ageBox.addClass('wrong');
  }

  const currentdate = Date.parse(dateBox.val());
  if(!currentdate || currentdate > Date.now()) {
    errs+='Data de nastere invalida.';
    dateBox.addClass('wrong');
  }

  if(errs.length) {
    alert(errs);
  } else {
    alert('Datele sunt corecte');
  }
}

$(document).ready(() => {
  $('#mainForm').on('submit', event => event.preventDefault());
})