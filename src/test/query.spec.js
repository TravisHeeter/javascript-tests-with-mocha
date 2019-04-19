const assert = require('assert')

const { parse, stringify } = require('../query')

describe('The query package', function(){
    describe('The parse function', function(){
        it('Should return an object of all query params when a query string is passed to it.', function(){
            const query = '?by=trav&popular=false&category=sss'
            const actual = parse(query)
            const expectation = {
                by: 'trav',
                popular: "false",
                category: 'sss'
            }
            assert.deepEqual(actual, expectation)
        })
    })
    describe('The stringify function', function(){
        it('Should return an string of an object that is passed to it.', function(){
            const query = {by: 'trav', popular: false, category: 'sss'}
            const actual = stringify(query)
            const expectation = `by=trav&popular=false&category=sss`
            assert.deepEqual(actual, expectation)
        })
        it('Should return an object: { number: 3 } when ?number=3 is passed to it.', function(){
            assert.deepEqual(parse('number=3'), {
                number: 3
            })
        })
        it('eliminates all undefined and null values', () =>{
            const queryObject = {
                by: 'trav',
                popular: undefined,
                unanswered: null
            }
            assert.deepEqual(parse(stringify(queryObject)),{by:'trav'})
        })
    })
})