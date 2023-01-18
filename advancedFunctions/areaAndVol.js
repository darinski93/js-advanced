function area() {
    return Math.abs(this.x * this.y);
};

vol()
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {

    input = JSON.parse(input)

    let result = []

    for (let el of input) {

        let calcArea = area.call(el)
        let calcVol = vol.call(el)

        result.push({
            area: calcArea,
            volume: calcVol
        })
    }

    return result

}
let res = solve(area, vol, `[
    { "x": "1", "y": "2", "z": "10" },
    { "x": "7", "y": "7", "z": "10" },
    { "x": "5", "y": "2", "z": "10" }
]`)







