function bigNumbe () {
    let numberin = document.getElementById('munder').value
    numberin = Array.from(numberin.toString(), Number)
    for (let i = 0; i < numberin.length; ++i) {
        const result = parseInt(numberin[i]);
        if (result > i) {
            maxDigit = result;
        }
    }
    
    document.getElementById('result-bigNamder').innerHTML = `<b>Сама велика цифра:</b> ${maxDigit}`;
}

