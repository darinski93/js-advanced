let { assert } = require('chai')
let { rgbToHexColor } = require('./rgbToHex')

describe('rgbToHexColor', () => {

    it(`testing correct inputs`, () => {

        let result = rgbToHexColor()
        assert.typeOf(result, 'undefined')
    })

    it('should test integers to hex', () => {

        let redOne = rgbToHexColor(255, 0, 0)

        assert.equal(redOne, '#FF0000')
    })

    it(`testing incorrect first input`, () => {

        let result = rgbToHexColor(256,0,0)
        assert.equal(result, undefined)
    })

    it(`testing incorrect second input`, () => {

        let result = rgbToHexColor(0,256,0)
        assert.equal(result, undefined)
    })

    it(`testing incorrect third input`, () => {

        let result = rgbToHexColor(0,0,256)
        assert.equal(result, undefined)
    })

    it(`testing incorrect input with string`, () => {

        let result = rgbToHexColor(-1, -1, -1)
        assert.equal(result, undefined)
    })
   
})

  