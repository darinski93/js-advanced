function elementPrinter(arr, num) {

    let filtered = arr.filter((x, i) => {

        if (i % num === 0) {
            return x
        }
    });

    return filtered;

}

elementPrinter(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)