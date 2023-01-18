function roadRadar(speed, area) {

    let motorLimit = 130
    let interLimit = 90
    let cityLimit = 50
    let resLimit = 20
    let status;
    let diff = 0


    switch (area) {

        case 'motorway':

            diff = Math.abs(motorLimit - speed)

            if (speed <= motorLimit) {
                console.log(`Driving ${speed} km/h in a ${motorLimit} zone`);
            }
            else if (speed > motorLimit && diff <= 20) {
                status = 'speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorLimit} - ${status}`)
            } else if (speed > motorLimit && diff <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorLimit} - ${status}`)
            } else {
                status = 'reckless driving'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorLimit} - ${status}`)
            }
            break;

        case 'interstate':
            diff = Math.abs(interLimit - speed)

            if (speed <= interLimit) {
                console.log(`Driving ${speed} km/h in a ${interLimit} zone`);
            }
            else if (speed > interLimit && diff <= 20) {
                status = 'speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interLimit} - ${status}`)
            } else if (speed > interLimit && diff <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interLimit} - ${status}`)
            } else {
                status = 'reckless driving'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interLimit} - ${status}`)
            }
            break;

        case 'city':
            diff = Math.abs(cityLimit - speed)

            if (speed <= cityLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
            }
            else if (speed > cityLimit && diff <= 20) {
                status = 'speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
            } else if (speed > cityLimit && diff <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
            } else {
                status = 'reckless driving'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
            }
            break;

        case 'residential':

            diff = Math.abs(resLimit - speed)

            if (speed <= resLimit) {
                console.log(`Driving ${speed} km/h in a ${resLimit} zone`);
            }
            else if (speed > resLimit && diff <= 20) {
                status = 'speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${resLimit} - ${status}`)
            } else if (speed > resLimit && diff <= 40) {
                status = 'excessive speeding'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${resLimit} - ${status}`)
            } else {
                status = 'reckless driving'
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${resLimit} - ${status}`)
            }
            break;

    }




}


roadRadar(200, 'motorway')