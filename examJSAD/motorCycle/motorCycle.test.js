const { motorcycleRider } = require('./motorcycle')
let { assert } = require('chai')

describe('test functionallity of motorcycleRider', function () {

    describe("licenseRestriction Functionallity with wrong inputs", function () {

        it("test licenseRestriction with invalid B category", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction('B'), msg)
        })
        it("test licenseRestriction with invalid B1 category", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction('B1'), msg)
        })
        it("test licenseRestriction with invalid C category", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction('B'), msg)
        })
        it("test licenseRestriction with empty input", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction(' '), msg)
        })
        it("test licenseRestriction with empty obj", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction({}), msg)
        })

        it("test licenseRestriction with empty array", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction([]), msg)
        })
        it("test licenseRestriction with number array", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction([213]), msg)
        })
        it("test licenseRestriction with number ", function () {
            let msg = "Invalid Information!"
            assert.throw(() => motorcycleRider.licenseRestriction(131), msg)
        })
    })

    describe("licenseRestriction Functionallity correct answers", function () {

        it('test licenseRestriction with AM category', function () {
            assert.equal(motorcycleRider.licenseRestriction("AM"), "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        })
        it('test licenseRestriction with A1 category', function () {
            assert.equal(motorcycleRider.licenseRestriction("A1"), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        })
        it('test licenseRestriction with A2 category', function () {
            assert.equal(motorcycleRider.licenseRestriction("A2"), "Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        })
        it('test licenseRestriction with A category', function () {
            assert.equal(motorcycleRider.licenseRestriction("A"), "No motorcycle restrictions, and the minimum age is 24.")
        })
    })
    describe("Test motorcycleShowroom functionallity", function () {

        describe("motorCycleShowroom Functionallity with wrong inputs", function () {

            it("test motorCycleShowroom with array and string", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([], 'text'), msg)
            })

            it("test motorCycleShowroom with switched position of array and string", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction('text', []), msg)
            })

            it("test motorCycleShowroom with empty arrays", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([], []), msg)
            })

            it("test motorCycleShowroom with empty objects", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction({}, {}), msg)
            })
            it("test motorCycleShowroom with numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction(2, 4), msg)
            })
            it("test motorCycleShowroom with strings", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction('text', 'texty'), msg)
            })
            it("test motorCycleShowroom with array and empty string", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([], ''), msg)
            })
            it("test motorCycleShowroom with number and empty string", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction(5, ''), msg)
            })
            it("test motorCycleShowroom with array and number", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([5], 4), msg)
            })


        })
        describe("Test maximumEngine functionallity", function () {

            it('test maximumEngine with  3 motorcycles', function () {
                assert.equal(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 1000), "There are 3 available motorcycles matching your criteria!"
                )
            })
            it('test maximumEngine with  2 motorcycles', function () {
                assert.equal(motorcycleRider.motorcycleShowroom(["125", "250"], 400), "There are 2 available motorcycles matching your criteria!"
                )
            })
            it('test maximumEngine with  1 motorcycles', function () {
                assert.equal(motorcycleRider.motorcycleShowroom(["125"], 130), "There are 1 available motorcycles matching your criteria!"
                )
            })
            it('test maximumEngine with equal maximumEngine', function () {
                assert.equal(motorcycleRider.motorcycleShowroom(["125"], 125), "There are 1 available motorcycles matching your criteria!"
                )
            })
            it('test maximumEngine with equal maximumEngine', function () {
                assert.equal(motorcycleRider.motorcycleShowroom(['0'], 125), "There are 0 available motorcycles matching your criteria!"
                )
            })
            it('test maximumEngine with equal maximumEngine', function () {
                assert.equal(motorcycleRider.motorcycleShowroom(['40'], 50), "There are 0 available motorcycles matching your criteria!"
                )
            })
        })
    })
    describe("Test otherSpendings functionallity", function () {
        describe("otherSpendings Functionallity with wrong inputs", function () {

            it("test motorCycleShowroom with arrays and numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction(10, [], []), msg)
            })
            it("test motorCycleShowroom with mixed arrays and numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction(10, 10, []), msg)
            })
            it("test motorCycleShowroom with mixed second arrays and numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([], 10, []), msg)
            })
            it("test motorCycleShowroom with mixed  objects and numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction({}, 10, []), msg)
            })
            it("test motorCycleShowroom with mixed second  objects and numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction({}, {}, []), msg)
            })
            it("test motorCycleShowroom with mixed third objects and numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction({}, {}, {}), msg)
            })
            it("test motorCycleShowroom with strings", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction('text', 'texty', 'textov'), msg)
            })
            it("test motorCycleShowroom with strings mixed", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction('text', 'texty', 5), msg)
            })
            it("test motorCycleShowroom with strings mixed second", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction('text', 5, 5), msg)
            })
            it("test motorCycleShowroom with strings mixed third", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction('text', 5, 'textov'), msg)
            })
            it("test motorCycleShowroom with strings mixed fourth", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction(5, 'texty', 'textov'), msg)
            })
            it("test motorCycleShowroom with strings mixed fifth", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction('', 'texty', 'textov'), msg)
            })
            it("test motorCycleShowroom with numbers", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction(5, 5, 5), msg)
            })
            it("test motorCycleShowroom with two inputs", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([],[]), msg)
            })
            it("test motorCycleShowroom with two inputs second", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([],true,[]), msg)
            })
            it("test motorCycleShowroom with two inputs second", function () {
                let msg = "Invalid Information!"
                assert.throw(() => motorcycleRider.licenseRestriction([],true,[]), msg)
            })

        })
        describe("otherSpendings Functionallity correct answers", function () {

            it('test otherSpendings with  first correct answer', function () {
                assert.equal(motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true), "You spend $243.00 for equipment and consumables with 10% discount!"
                )
            })
            it('test otherSpendings with  second correct answer', function () {
                assert.equal(motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false), "You spend $270.00 for equipment and consumables!")
            })
            it('test otherSpendings with third correct answer', function () {
                assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil"], true), "You spend $513.00 for equipment and consumables with 10% discount!")
            })
            it('test otherSpendings with fourth correct answer', function () {
                assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil"], false), "You spend $570.00 for equipment and consumables!")
            })
        })
    })
})