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
  

// Тут якось зробив але всеж таки важко розуміти як воно працює в середині не не бачу явно ми складаемно число startnum 
// Стільки раз скільки в змінній endnum я взагалі думав що треба зробити: додовати по одному поки не буде число дорывнювати endnum
// Але судячи по завданню потрібно зовсім інше 
  for (result = 0; startnum <= endnum; startnum++) {
    if (clarification && startnum % 2 === 0) {
      continue;
    }
    result += startnum;
  } 
  
  alert(`Результат:  ${result}`);
});
