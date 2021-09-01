const { TestWatcher } = require('jest')
const  {cloneArr }  = require('./intro')

test('properly clones array', () => {
    const arr = [1, 2, 3]
    expect(cloneArr(arr)).toEqual(arr)
    expect(cloneArr(arr)).not.toBe(arr)
})