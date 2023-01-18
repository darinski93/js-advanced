let {assert} = require('chai');
let {isOddOrEven} = require('./isEvenOrOdd')



describe('isOddOrEven functionallity', ()=>{

    it('testing with obj', ()=>{
        let arg = {}
        assert.equal(isOddOrEven(arg), undefined)
    })

    it('testing with number', ()=>{
        let arg = 5
        assert.equal(isOddOrEven(arg), undefined)
    })

    it('testing with array', ()=>{
        let arg =[]
        assert.equal(isOddOrEven(arg), undefined)
    })
    it('testing with boolean', ()=>{
        let arg = true
        assert.equal(isOddOrEven(arg), undefined)
    })

    it('testing with integer', ()=>{
        let arg = 1.1
        assert.equal(isOddOrEven(arg), undefined)
    })

    it('should test with even number', ()=>{

        let text = 'Dari'
        assert.equal(isOddOrEven(text), 'even')
    })

    it('should test with odd number', ()=>{

        let text = 'Darioss'
        assert.equal(isOddOrEven(text), 'odd')
    })
})