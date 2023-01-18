function sortingNumbers(array) {


    let newArray = [];
    let arrays = array.slice()

    let smallestNum = array.sort((a, b) => a - b)
    let biggerNum = arrays.sort((a, b) => b - a)

    for(let i = 0; i < array.length /2; i++){
        let current = smallestNum[i]
        let second = biggerNum[i]
    
       
        newArray.push(current,second)
    

    }
    if(array.length % 2 !== 0){
        newArray.pop()
    }
return newArray
    
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])