const dntactvecs = document.getElementById('dntactvecs')




dntactvecs.addEventListener('click', function (e) {
    let startnum = prompt("Введите начальное число");
    
    if (!isNaN(parseInt(startnum))) {
      // Код, который выполняется, когда startnum является числом
      console.log("Введено целое число");
    } else {
      alert("Пожалуйста, введите целое число");
      return; // Завершить выполнение функции, если введено неправильное значение
    }
    
    let clarification = confirm("Пропускать парные числа?");
    
    if (clarification === true) {
      // Код, который выполняется, когда clarification равно true
      console.log("Пропускаем парные числа");
    } else {
      // Код, который выполняется, когда clarification равно false
      console.log("Не пропускаем парные числа");
    }
  });
  