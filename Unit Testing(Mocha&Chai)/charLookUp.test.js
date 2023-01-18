let { assert } = require('chai');
let { lookupChar } = require('./charLookUp');



describe('lookUp functionallity', () => {



    it('tests first param to be invalid', () => {

        let firstParam = 'some string'
        let secParam = 123

        assert.equal(lookupChar((typeof !firstParam, typeof secParam)), undefined)
    })
    it('tests second param to be invalid', () => {

        let firstParam = 'some string'
        let secParam = 123

        assert.equal(lookupChar((typeof firstParam, typeof !secParam)), undefined)
    })

    it('tests secparam for floatin number', () => {

        let firstParam = 'some string'
        let secParam = 1.23
 
        assert.equal(lookupChar(firstParam, secParam),undefined, 'undefined')
    })
    
    it('value of the index is bigger', () => {

        let firstParam = 'some string'
        let secParam = 100
        assert.equal(lookupChar(firstParam, secParam), "Incorrect index")
    })

    it('value of the index is negative', () => {

        let firstParam = 'some string'
        let secParam = -1
        assert.equal(lookupChar(firstParam, secParam), "Incorrect index")
    })
    
    it('string to be eqal index', () => {

        let firstParam = 1
        let secParam = 1
        assert.equal(lookupChar(firstParam, secParam), undefined)
    })
    it('correct type and value', () => {

        let firstParam = 'some string'
        let secParam = 10
        assert.equal(lookupChar(firstParam, secParam), 'g', 'char at the specified index')
    })

    it('correct type and value sec', () => {

        let firstParam = 'some string'
        let secParam = 3
        assert.equal(lookupChar(firstParam, secParam), 'e', 'char at the specified index')
    })

    it('correct type and value third', () => {

        let firstParam = 'some string'
        let secParam = 4
        assert.equal(lookupChar(firstParam, secParam), ' ', 'char at the specified index')
    })

})