function tickets(data, sorter) {

    let arr = []

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }

    for (let el of data) {

        let [destination, price, status] = el.split('|')
        arr.push(new Ticket(destination, price, status))

    }

    if (sorter === 'destination') {
        arr.sort(function (a, b) {
            if (a.destination < b.destination) {
                return - 1
            }
            if (a.destination > b.destination) {
                return 1
            }
            return 0

        })
    }
    else if(sorter === 'price'){
        arr.sort()
    }
    else if (sorter === 'status') {
        arr.sort(function (a, b) {
            if (a.status < b.status) {
                return - 1
            }
            if (a.status > b.status) {
                return 1
            }
            return 0

        })
    }

    return arr





}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')