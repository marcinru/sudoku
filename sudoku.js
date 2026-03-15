document.querySelectorAll('td').forEach((cell) => {
  const isStandardCell = !cell.classList.contains('given-number');
  if (isStandardCell) {
    cell.addEventListener('click', onClickStandardCell);
  }
});

function onClickStandardCell() {
  document.querySelector('.selected')?.classList?.remove('selected');
  this.classList.add('selected');
}
