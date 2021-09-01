const { TestWatcher } = require('jest')
let sub = require('./subtract')


  
test('sub two nums', () => {
    expect(sub(1, 2)).toBe(-1)
})