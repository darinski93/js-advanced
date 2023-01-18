window.addEventListener('load', solve);

function solve() {

    let firstName = document.getElementById('first-name')
    let lastName = document.getElementById('last-name')
    let dateIn = document.getElementById('date-in')
    let dateOut = document.getElementById('date-out')
    let peopleCount = document.getElementById('people-count')


    let listItem = document.createElement('li')
    listItem.className = 'reservation-content'

    let article = document.createElement('article')

    let h3 = document.createElement('h3')

    let dateP = document.createElement('p')
    let toDateP = document.createElement('p')
    let countP = document.createElement('p')








    let nextBtn = document.getElementById('next-btn')
    nextBtn.addEventListener('click', onNext)
   
    function onNext(e) {
        e.preventDefault()

        let nameValue = firstName.value
        let lastNameValue = lastName.value
        let dateInValue = dateIn.value
        let dateOutVale = dateOut.value
        let countValue = peopleCount.value


        let editBtn = document.createElement('button')
        editBtn.className = 'edit-btn'
        editBtn.textContent = 'Edit'

        let continueBtn = document.createElement('button')
        continueBtn.className = 'continue-btn'
        continueBtn.textContent = 'Continue'

        if (!nameValue || !lastNameValue || !dateInValue || !dateOutVale || !countValue) {
            return
        }
    
    
        if (dateOutVale < dateInValue) {
            firstName.value = ''
            lastName.value = ''
            dateIn.value = ''
            dateOut.value = ''
            peopleCount.value = ''

            return
        }
        //let reserve = document.getElementById('info-reservation')

        h3.textContent = `Name: ${nameValue} ${lastNameValue}`
        dateP.textContent = `From date: ${dateInValue}`
        toDateP.textContent = `To date: ${dateOutVale}`
        countP.textContent = `For ${countValue} people`

        let ulInfo = document.querySelector('ul')

        article.appendChild(h3)
        article.appendChild(dateP)
        article.appendChild(toDateP)
        article.appendChild(countP)
        listItem.appendChild(article)
        listItem.appendChild(editBtn)
        listItem.appendChild(continueBtn)
        ulInfo.appendChild(listItem)



        firstName.value = ''
        lastName.value = ''
        dateIn.value = ''
        dateOut.value = ''
        peopleCount.value = ''

        nextBtn.disabled = true
        editBtn.addEventListener('click', onEdit)

        function onEdit() {
            nextBtn.disabled = false

            firstName.value = nameValue
            lastName.value = lastNameValue
            dateIn.value = dateInValue
            dateOut.value = dateOutVale
            peopleCount.value = countValue
            listItem.remove()
        }

        continueBtn.addEventListener('click', onContinue)

        function onContinue() {

            let ulConfirm = document.querySelector('.confirm-list')
            ulConfirm.appendChild(listItem)
            editBtn.textContent = 'Confirm'
            editBtn.className = 'confirm-btn'

            continueBtn.textContent = 'Cancel'
            continueBtn.className = 'cancel-btn'


            let confirmBtn = editBtn

            confirmBtn.addEventListener('click', onConfirm)


            function onConfirm() {

                listItem.remove()
                nextBtn.disabled = false
                let ver = document.getElementById('verification')
                ver.classList.add("reservation-confirmed")
                ver.textContent = "Confirmed."

                firstName.value = ''
                lastName.value = ''
                dateIn.value = ''
                dateOut.value = ''
                peopleCount.value = ''
            }

            let cancelBtn = continueBtn
            cancelBtn.addEventListener('click', onCancel)

            function onCancel() {
                listItem.remove()
                nextBtn.disabled = false
                let ver = document.getElementById('verification')
                ver.classList.add("reservation-cancelled")
                ver.textContent = "Cancelled."
            }

        }
    }


}





