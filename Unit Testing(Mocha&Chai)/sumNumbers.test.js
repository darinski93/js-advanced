let { assert } = require('chai')

let { sum } = require('./sumNumbers')

describe('sum', () => {
    it('should test the result of array', () => {

        let arr = [1, 2, 3];
        let result = sum(arr)
        assert.equal(result, 6);

    })
    it('test if array is valid', () => {
        let arr = [];
        assert.equal(sum(arr), [])

    })
    it('should test if array has only numbers', () => {

        let arr = [1,2,3]
        let sumOfArr = sum(arr)
        let type = typeof sumOfArr        


        assert.equal(type, 'number')

    })
})