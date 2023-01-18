let { assert } = require('chai')
let { createCalculator } = require('./addSubstract')
//let { add } = require('./addSubstract')


describe('createCalculator functionallity', () => {


    it('should return object', () => {
        assert.typeOf(createCalculator(), 'object')
    })

    it('should return object with function add', () => {

        let obj = createCalculator()
        assert.property(obj, 'add')
    })
    it('should return object with function subtract', () => {

        let obj = createCalculator()
        assert.property(obj, 'subtract')
    })

    it('should return object with function get', () => {

        let obj = createCalculator()
        assert.property(obj, 'get')
    })

    it('value cannot be modified', () => {
        assert.equal(createCalculator().value, undefined)
    })

    it('add method should return value', () => {

        let calc = createCalculator()
        calc.add(3)
        assert.equal(calc.get(), 3)
    })

    it('add method should return value with string', () => {

        let calc = createCalculator()
        calc.add('3')
        assert.equal(calc.get(), 3)
        calc.add('3')
        assert.equal(calc.get(), 6)
    })

    it('add method should return value with substracted', () => {

        let calc = createCalculator()
        calc.add(9)
        calc.subtract(1)
        assert.equal(calc.get(), 8)
        calc.subtract('4')
        assert.equal(calc.get(), 4)
    })

})