let litriRimasti = document.getElementById('litri-rimasti');
let litriDinamici = document.getElementById('litri');
let percentualeLitri = document.getElementById('percentuale');
let bicchieri = document.querySelectorAll('.bicchiere-pieno');

updateLitri();

bicchieri.forEach((value, index) => {
  value.addEventListener('click', () => highlightedLitri(index));
});

function highlightedLitri(index) {
  if (index === 7 && bicchieri[index].classList.contains('full')) {
    index--;
  } else if (
    bicchieri[index].classList.contains('full') &&
    !bicchieri[index].nextElementSibling.classList.contains('full')
  ) {
    index--;
  }

  bicchieri.forEach((value, index2) => {
    if (index2 <= index) {
      value.classList.add('full');
    } else {
      value.classList.remove('full');
    }
  });

  updateLitri();
}

function updateLitri() {
  let bicchieriRiempiti = document.querySelectorAll(
    '.bicchiere-pieno.full'
  ).length;
  let bicchieriTotali = bicchieri.length;

  if (bicchieriRiempiti === 0) {
    percentualeLitri.style.visibility = 'hidden';
    percentualeLitri.style.height = 0;
  } else {
    percentualeLitri.style.visibility = 'visible';
    percentualeLitri.style.height = `${
      (bicchieriRiempiti / bicchieriTotali) * 330
    }px`;
    percentualeLitri.innerText = `${
      (bicchieriRiempiti / bicchieriTotali) * 100
    }%`;
  }
  if (bicchieriRiempiti === bicchieriTotali) {
    litriRimasti.style.visibility = 'hidden';
    litriRimasti.style.height = 0;
  } else {
    litriRimasti.style.visibility = 'visible';
    litriDinamici.innerText = `${2 - (250 * bicchieriRiempiti) / 1000}L`;
  }
}
