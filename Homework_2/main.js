const dntactvecs = document.getElementById('dntactvecs')


dntactvecs.addEventListener('click', function (e) {
    let startnum = parseInt(prompt("Введіть початкове число"));
    let endnum = parseInt(prompt("Введіть кінцеве число"));  
    let clarification = confirm("Пропускати парні числа")
    if (isNaN(startnum) || isNaN(endnum)) {
      alert("Введіть будь ласка ціле число");
      return;
    }
    for (; startnum <= endnum; startnum++) {
      if (clarification && startnum % 2 === 0) {
        continue;
      }
      console.log(startnum);
    }
  });
  