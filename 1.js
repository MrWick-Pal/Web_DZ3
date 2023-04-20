const celsius = +prompt("Введите температуру по цельсию: ")

function fahrenheit(cels) {
    fahrenheit_result = (9/5) * cels + 32;
    alert(`${cels} по цельсию равняются ${fahrenheit_result.toFixed(1)} по Фаренгейту.`)
}

fahrenheit(celsius)