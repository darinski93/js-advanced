let {assert, expect} = require('chai')
let {isSymmetric} = require('./isSymmetry')

describe('isSymetric', ()=>{


    it('should test if array is array', () =>{

        let array = []

        assert.equal(isSymmetric(array), true)
    })
    it('should test if array is not an object', () =>{

        let array = {}

        assert.equal(isSymmetric(array), false)
    })
    it('should test if array is a number', () =>{
        let array = 1 
        assert.equal(isSymmetric(array), false)
    })
    it('should test if array is boolean', () =>{

        let array = true
        

        assert.equal(isSymmetric(array), false)
    })
    
    it('should test if array is not a string', () =>{

        let array = 'string'
        

        assert.equal(isSymmetric(array), false)
    })


describe('reversed',  ()=>{
    it('test not matching', ()=>{
        

        expect(isSymmetric([1,2,'1'])).to.be.false
    })
})
})