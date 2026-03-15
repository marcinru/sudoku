document.querySelectorAll('td').forEach((cell) => {
  const isStandardCell = !cell.classList.contains('given-number');
  if (isStandardCell) {
    cell.addEventListener('click', onClickStandardCell);
  }
});

document.querySelectorAll('.number-control').forEach((numberControl) => {
  numberControl.addEventListener('click', onClickNumberControl);
});

function onClickStandardCell() {
  document.querySelector('.selected')?.classList?.remove('selected');
  this.classList.add('selected');
}

function onClickNumberControl() {
  const selectedCell = document.querySelector('.selected');
  if (selectedCell == null) {
    return;
  }
  const clickedNumber = this.textContent;
}
