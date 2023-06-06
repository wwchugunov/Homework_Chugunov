let sneakers, watch, notebook, nocoins

sneakers = 15.678;
watch = 123.965;
notebook = 90.2345;

let summ = sneakers + watch + notebook

console.log(`Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн. ${summ - 500}`)

console.log(`Використовуючи вбудований об'єкт Math – виведіть максимальне число \nРішення:  ${Math.ceil(sneakers)} `)

console.log(`Використовуючи вбудований об'єкт Math – виведіть мінімальне число \nРішення:  ${Math.floor(sneakers)}`) 

console.log(`Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму \nРішення:  ${summ}`) 

sneakers = Math.floor(sneakers);
watch = Math.floor(watch);
notebook = Math.floor(notebook);

nocoins = sneakers + watch + notebook
console.log(`Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.\nРішення:  ${nocoins}`)

nocoins = Math.ceil(nocoins / 100) * 100;
console.log(`Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300) \nРішення:  ${nocoins}`);

let isOdd = nocoins % 2 !== 0;
console.log(`Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? \nРішення:  ${isOdd}`)





