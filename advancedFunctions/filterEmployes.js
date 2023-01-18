function filterEmployes(data, criteria) {

    let newData = JSON.parse(data);

    let entries;
    let counter = 0;


    for (let el of newData) {

        entries = Object.entries(el)

        if (criteria === 'all') {
            console.log(`${counter}. ${el.first_name} ${el.last_name} - ${el.email}`)
            counter++

        } else {
            criteria = criteria.split('-').join(': ')
            for (let [k, v] of entries) {

                let entry = k + ': ' + v
                if (entry === criteria) {
                    console.log(`${counter}. ${el.first_name} ${el.last_name} - ${el.email}`)
                    counter++
                }
            }
        }
    }
}
filterEmployes(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'

)