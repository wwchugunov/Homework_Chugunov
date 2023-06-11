const dntactvecs = document.getElementById('dntactvecs');
let result

dntactvecs.addEventListener('click', function (e) {
  let startnum = parseInt(prompt("Введіть початкове число"));
  let endnum = parseInt(prompt("Введіть кінцеве число"));  
  let clarification = confirm("Пропускати парні числа");
  
  if (isNaN(startnum) && isNaN(endnum)) {
    alert("Введіть будь ласка ціле число");
    return;
  }
  
  for (result = 0; startnum <= endnum; startnum++) {
    if (clarification && startnum % 2 === 0) {
      continue;
    }
    result += startnum;
  } 
  
  alert(`Результат:  ${result}`);
});
