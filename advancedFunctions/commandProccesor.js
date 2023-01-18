function solution() {

    return {

        append: () => {
            return this.string
        },
        removeStart: () =>{
            this.string.substring(this.string.length - n)
            return this.string
        }
    }






}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
