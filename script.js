function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const selectedUnit = document.getElementById('selectUnit').value;
    let convertedTemperature;

    if (selectedUnit === 'celsius') {
        convertedTemperature = (inputTemperature * 9/5) + 32;
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (inputTemperature - 32) * 5/9;
    }

    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °${selectedUnit === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
}
