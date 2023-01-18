let { assert } = require('chai')
let { mathEnforcer } = require('./mathEnforcer')

describe('mathEnforcer', () => {

    describe('addFive', () => {

        it('should return a correct result with non-number parameter', () => {

            let param = 'some string'
            assert.equal(mathEnforcer.addFive(param), undefined)
        })
        it('should return a correct result with number parameter', () => {

            let param = 5
            assert.equal(mathEnforcer.addFive(param), 10)
        })
        it('should return a correct result with number parameter', () => {

            let param = 15
            assert.equal(mathEnforcer.addFive(param), 20)
        })
        it('should return a correct result with array', () => {

            let param = []
            assert.equal(mathEnforcer.addFive(param), undefined)
        })
        it('should return a correct result with obj', () => {

            let param = {}
            assert.equal(mathEnforcer.addFive(param), undefined)
        })
        it('should return a correct result with  params, as a number but floating', () => {

            let param = 5.25
            
            
            assert.equal(mathEnforcer.addFive(param), 10.25)
        })

        it('should return a correct result with  params, as a number but floating', () => {

            let param = -5.25
            
            
            assert.equal(mathEnforcer.addFive(param), -0.25)
        })
        it('should return a correct result with  params, as a number but negative', () => {

            let param = -5
            
            
            assert.equal(mathEnforcer.addFive(param), 0)
        })
    })

    describe('substractTen', () => {


        it('should return a correct result with string', () => {

            let param = 'some string'
            assert.equal(mathEnforcer.subtractTen(param), undefined)
        })
        it('should return a correct result with array', () => {

            let param = []
            assert.equal(mathEnforcer.subtractTen(param), undefined)
        })
        it('should return a correct result with obj', () => {

            let param = {}
            assert.equal(mathEnforcer.subtractTen(param), undefined)
        })

        it('should return a correct result with number parameter', () => {

            let param = 10
            assert.equal(mathEnforcer.subtractTen(param), 0)
        })
        it('should return a correct result with  params, as a number but floating', () => {

            let param = 20.25
            
            
            assert.equal(mathEnforcer.subtractTen(param), 10.25)
        })
        it('should return a correct result with  params, as a number but negative', () => {

            let param = 10.25
            
            
            assert.equal(mathEnforcer.subtractTen(param), 0.25)
        })
        it('should return a correct result with  params, as a number but negative', () => {

            let param = -10.25
            
            
            assert.equal(mathEnforcer.subtractTen(param), -20.25)
        })
    })
    describe('sum', () => {

        it('should return a correct result with  one parameter, which is not number', () => {

            let param = 10
            let secparam = 'somestring'
            assert.equal(mathEnforcer.sum(param, secparam), undefined)
        })

        it('should return a correct result with  sec parameter, which is not number', () => {

            let param = 'somestring'
            let secparam = 10
            assert.equal(mathEnforcer.sum(param, secparam), undefined)
        })

        it('should return a correct result with  two parameter, which is not number', () => {

            let param = 'somestring'
            let secparam = 'test'
            assert.equal(mathEnforcer.sum(param, secparam), undefined)
        })

        it('should return a correct result with one parameter inside, which is not number', () => {

            let param = 'somestring'
            
            assert.equal(mathEnforcer.sum(param), undefined)
        })
        
        it('should return a correct result with array, which is not number', () => {

            let param = 'somestring'
            let secparam = []
            
            assert.equal(mathEnforcer.sum(param, secparam), undefined)
        })

        it('should return a correct result with both params, as a number', () => {

            let param = 5
            let secparam = 5
            
            assert.equal(mathEnforcer.sum(param,secparam), 10)
        })

        it('should return a correct result with both params, as a number but zeros', () => {

            let param = 0
            let secparam = 0
            
            assert.equal(mathEnforcer.sum(param,secparam), 0)
        })

        it('should return a correct result with both params, as a number but negatives', () => {

            let param = -1
            let secparam = -2
            
            assert.equal(mathEnforcer.sum(param,secparam), -3)
        })

        it('should return a correct result with both params, as a number but floating', () => {

            let param = 2.25
            let secparam = 2.25
            
            assert.equal(mathEnforcer.sum(param,secparam), 4.50)
        })
    })
})