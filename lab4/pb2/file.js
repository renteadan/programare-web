

function move() {
  const nameBox = document.getElementById('name');
  const dateBox = document.getElementById('date');
  const emailBox = document.getElementById('email');
  const ageBox = document.getElementById('age');
  let errs = '';
  let errBox = [];
  if(nameBox.value === '') {
    errs+='Nume invalid.'
    errBox.push(nameBox);
  }

  if(emailBox.value === '') {
    errs+='Email invalid.'
    errBox.push(emailBox);
  }

  if(!Number.parseInt(ageBox.value)) {
    errs+='Varsta invalida.'
    errBox.push(ageBox);
  }

  const currentdate = Date.parse(dateBox.value);
  if(!currentdate || currentdate > Date.now()) {
    errs+='Data de nastere invalida.';
    errBox.push(dateBox);
  }

  clearBorder();
  if(errBox.length) {
    errBox.forEach(item => {
      item.style='border: 2px;border-style: solid;border-color: red;';
    });
    alert(errs);
  } else {
    alert('Datele sunt corecte');
  }
}

function clearBorder() {
  const inputs = document.getElementsByTagName('input');
  for(const input of inputs) {
    input.style="";
  }
}

function init() {
  const form = document.getElementById('mainForm');
  form.addEventListener('submit', event => event.preventDefault());
}

init();