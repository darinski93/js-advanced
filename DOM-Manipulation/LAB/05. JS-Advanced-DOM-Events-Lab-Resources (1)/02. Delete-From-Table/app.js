function deleteByEmail() {


    let emails = document.querySelectorAll("#customers tr td:last-child")

    let input = document.getElementsByName('email')[0].value

    for (let email of emails) {
        if (email.textContent === input) {
            let row = email.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById("result").textContent = "Deleted."
        } else {
            document.getElementById("result").textContent = "Not found."
        }

    }
}