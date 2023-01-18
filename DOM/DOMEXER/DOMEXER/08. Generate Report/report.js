function generateReport() {

    let buttonClick = document.querySelectorAll('input')
    let namesInfo = document.querySelectorAll('tbody tr')
    let output = document.getElementById('output');
    
    let res = [];

    for (let i = 0; i < namesInfo.length; i++) {

        let total = {};


        for (let j = 0; j < buttonClick.length; j++) {
            if (buttonClick[j].checked) {

                total[buttonClick[j].name] = namesInfo[i].children[j].textContent

            }

        }
        res.push(total)
    }

output.textContent = JSON.stringify(res)


}