function evenElement(arr) {


    let filtered = arr.filter((x, i) => {
        return i % 2 === 0;
    }).join(' ');

    console.log(filtered)

}
evenElement(['20', '30', '40', '50', '60'])