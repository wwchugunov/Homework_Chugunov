
let infobox = document.getElementById('info-box__content')
sneakers = 15.678;
watch = 123.965;
notebook = 90.2345;

let maxnum = Math.ceil(sneakers)
let minnum = Math.floor(sneakers)
let WholeAmount = (sneakers + watch + notebook)
let summallround = Math.round(WholeAmount);
let  noKopecks = Math.floor(sneakers + watch + notebook)
let rounding = (Math.ceil(noKopecks / 100) * 100)
let isOdd = (rounding % 2 !== 0);
let summall = (sneakers + watch + notebook - 500);
let randomDiscount = Math.random() * (sneakers,  notebook) + sneakers 
let average = ((sneakers + watch + notebook  / 3).toFixed(2));

function randomDiscountf() {
    let price = parseFloat(document.getElementById('prise').value);
    let cost = price * 0.5;
    let discount = parseFloat(document.getElementById('discont').value);
    let discountedPrice = price - (price * (discount / 100));
    let profit = discountedPrice - cost;
    alert(`Чистий прибуток: ${profit} грн`);
}
function minmax(sneakers, watch, notebook) {
     min = Math.min(sneakers, watch, notebook);
     max = Math.max(sneakers, watch, notebook);
     console.log(`Мінімальна ціна:${min} \nМаксимальна ціна ${max}`);
     return  [min, max];
}

minmax(sneakers, watch, notebook)

let boxContent = `
Завдання<br>&emsp;
Мінімальна сума <span style="color: red;">${min}</span><br>&emsp;
Максимальна сума <span style="color: red;">${max}</span><br>&emsp;
Використовуючи вбудований об'єкт Math – виведіть максимальне число:  <span style="color: red;"> ${maxnum}</span><br>&emsp; 
Використовуючи вбудований об'єкт Math – виведіть мінімальне число:   <span style="color: red;">${minnum}</span><br>&emsp;
Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму:   <span style="color: red;">${WholeAmount}</span><br>&emsp;
Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою:   <span style="color: red;">${noKopecks}</span><br>&emsp;
Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260,то виведіть 300):   <span style="color: red;">${rounding}</span><br>&emsp;
Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?:  <span style="color: red;">${isOdd}</span><br>&emsp;
Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн:  <span style="color: red;">${summall}</span><br>&emsp;
Виведіть середнє значення цін, округлене до другого знаку після коми:  <span style="color: red;">${average}</span><br>&emsp;
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.:  <span style="color: red;">${randomDiscount.toFixed(2)}</span><br>&emsp;
`;

infobox.innerHTML = boxContent;

