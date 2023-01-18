function smallest(arr) {


    let sorted = arr.sort((a, b) => {
        return a - b
    }).filter((x, i) => {

        if (i < 2) {
            return x
        }
    }).join(' ');

    return sorted



}

smallest([30, 15, 50, 5])