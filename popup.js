document.getElementById('overlaydiv').addEventListener('click', (event) => {
  event.target.remove();
});
document.getElementById('text1').addEventListener('click', (event) => {
  document.getElementById('overlaydiv').remove();
});
document.getElementById('text2').addEventListener('click', (event) => {
  document.getElementById('overlaydiv').remove();
});
