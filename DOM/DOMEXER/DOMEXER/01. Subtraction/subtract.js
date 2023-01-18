function subtract() {
   
    let firstNumb = document.getElementById("firstNumber").value
    let secondNumb = document.getElementById("secondNumber").value
    let sum = Number(firstNumb) - Number(secondNumb)

    document.getElementById('result').innerHTML = sum
    return console.log(sum)

}