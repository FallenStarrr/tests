const { TestWatcher } = require('jest')
const {sum, cloneArr} = require('./intro')

test('properly adds two nums', () => {
     expect(
         sum(1, 2)
         ).toBe(3)
})


