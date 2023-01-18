function solve(input) {


    input = input.split(' ')
    let res = ''
    let type = 'Camel Case'

    for (let el of input) {


        switch (type) {


            case 'Pascal Case':
                res += el[0].toUpperCase() + el.substring(1);

                break;

            case 'Camel Case':
                
                res += el[0].toUpperCase() + el.substring(1);
                res = res[0].toLowerCase() + res.substring(1)
                break;

        }
        

    }
    console.log(res)

}
solve("this is an example")